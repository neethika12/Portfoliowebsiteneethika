"use client";

import { FormEvent, useState } from "react";

type ContactState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

const initialState: ContactState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(payload.message ?? "Failed to submit your message.");
      }

      setStatus("success");
      setFeedbackMessage(payload.message ?? "Message sent successfully.");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form className="glass-card space-y-4 rounded-2xl p-5 md:p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          Name
          <input
            required
            className="input-field"
            value={formData.name}
            onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          Email
          <input
            required
            type="email"
            className="input-field"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="you@email.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-300">
        Subject
        <input
          required
          className="input-field"
          value={formData.subject}
          onChange={(event) => setFormData((prev) => ({ ...prev, subject: event.target.value }))}
          placeholder="Let's build something great"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-300">
        Message
        <textarea
          required
          rows={6}
          className="input-field resize-y"
          value={formData.message}
          onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Tell me about your project or opportunity..."
        />
      </label>

      {/* Honeypot anti-spam field. Real users should not see or fill this. */}
      <label className="hidden">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          value={formData.company}
          onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === "submitting"} className="primary-button">
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        <p
          className={`text-sm ${
            status === "error" ? "text-rose-300" : status === "success" ? "text-emerald-300" : "text-slate-400"
          }`}
        >
          {feedbackMessage}
        </p>
      </div>
    </form>
  );
}
