"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Web3Forms endpoint. The access key is public by design (it only routes mail
// to the inbox registered for that key), so it's safe in the client bundle.
// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local — see README / tasks.
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

// Shared field styling: flat, mono, hairline underline that warms to accent on
// focus — no boxes, in keeping with the paper aesthetic.
// text-base (16px) on mobile prevents iOS Safari from auto-zooming on focus;
// sm:text-sm restores the smaller size on desktop where there's no zoom.
const fieldClass =
  "w-full border-0 border-b border-line bg-transparent py-2 text-base sm:text-sm text-ink " +
  "placeholder:text-faint focus:border-accent focus:outline-none";

export function ContactPane() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this. Bail silently as if it succeeded.
    if (data.get("botcheck")) {
      setStatus("success");
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setError("The form isn't configured yet. Try again later.");
      return;
    }

    setStatus("submitting");
    setError(null);

    const payload = {
      access_key: ACCESS_KEY,
      name: data.get("name"),
      email: data.get("email"),
      topic: data.get("topic"),
      message: data.get("message"),
      // Sets the email's Reply-To to the sender, so hitting "Reply" goes
      // straight to them instead of the Web3Forms address.
      replyto: data.get("email"),
      // Shows up as the email subject in the inbox.
      subject: `New ${data.get("topic") || ""} message from ${data.get("name") || "the website"}`,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        form.reset();
        setStatus("success");
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setError("Something went wrong sending that. Mind trying again?");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col items-start gap-3"
      >
        <span className="h-1.5 w-1.5 bg-accent" />
        <p className="text-lg text-ink">Message sent.</p>
        <p className="text-sm leading-relaxed text-muted">
          Thanks for reaching out! I&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link mt-2 text-sm text-muted"
        >
          Send another ↗
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <p className="mb-7 text-sm leading-relaxed text-muted">
        Want to work together, book my band, or just say hello? Drop a note!
      </p>

      {/* pb on mobile: iOS Safari drops a scroll container's own padding-bottom
          at scroll-end, so the viewer window's py-6 vanishes and the Send button
          sits flush to the edge. A child's padding is honored, so we add it here.
          sm:pb-0 lets desktop fall back to the window's padding (no double gap). */}
      <form onSubmit={onSubmit} className="flex flex-col gap-6 pb-6 sm:pb-0">
        {/* Honeypot — visually hidden, off-screen, never tab-reachable. */}
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-muted">Name</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>

        {/* Email + topic share a row on desktop, stack on mobile. */}
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-5">
          <label className="flex flex-1 flex-col gap-1.5">
            <span className="text-xs text-muted">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={fieldClass}
            />
          </label>

          <label className="flex flex-1 flex-col gap-1.5">
            <span className="text-xs text-muted">
              What do you want to chat about?
            </span>
            {/* appearance-none strips the native select chrome so it inherits
                the mono font + flat hairline and lines up with the inputs; a
                custom chevron replaces the one we remove. */}
            <div className="relative">
              <select
                name="topic"
                required
                defaultValue=""
                className={`${fieldClass} cursor-pointer appearance-none pr-6`}
              >
                <option value="" disabled>
                  Pick one…
                </option>
                <option value="Professional">Professional</option>
                <option value="Music">Music</option>
                <option value="Personal">Personal</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-muted" />
            </div>
          </label>
        </div>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs text-muted">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What's on your mind?"
            className={`${fieldClass} resize-none`}
          />
        </label>

        {status === "error" && error && (
          <p className="text-sm text-accent">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group mt-1 inline-flex w-fit items-center gap-2 border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Send"}
          <span className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </button>
      </form>
    </div>
  );
}
