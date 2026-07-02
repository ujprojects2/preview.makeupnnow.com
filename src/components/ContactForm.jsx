"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire this up to your email/CRM endpoint (e.g. an API route or form service).
    setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-16">
        <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
        <h3 className="font-headline-md text-headline-md text-on-surface">Message sent</h3>
        <p className="font-body-md text-on-surface-variant max-w-sm">
          Thanks for reaching out — our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest" htmlFor="name">Full Name</label>
        <input required className="form-input-bottom py-2 font-body-md text-body-md" id="name" name="name" placeholder="E.g. Elena Rossi" type="text" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest" htmlFor="email">Email Address</label>
        <input required className="form-input-bottom py-2 font-body-md text-body-md" id="email" name="email" placeholder="elena@example.com" type="email" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest" htmlFor="phone">Phone Number</label>
        <input className="form-input-bottom py-2 font-body-md text-body-md" id="phone" name="phone" placeholder="+91 00000 00000" type="tel" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest" htmlFor="subject">Subject</label>
        <select className="form-input-bottom py-2 font-body-md text-body-md appearance-none" id="subject" name="subject">
          <option value="">General Inquiry</option>
          <option value="booking">Booking Assistance</option>
          <option value="artist">Artist Registration</option>
          <option value="partnership">Brand Partnerships</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest" htmlFor="message">Message</label>
        <textarea required className="form-input-bottom py-2 font-body-md text-body-md resize-none" id="message" name="message" placeholder="How can our artists assist you today?" rows="4"></textarea>
      </div>
      <div className="md:col-span-2 pt-6">
        <button
          className="w-full md:w-auto bg-primary text-on-primary px-12 py-4 rounded-full font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-60"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </div>
    </form>
  );
}
