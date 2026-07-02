"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire this up to your artist-onboarding API endpoint.
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <>
      <section className="px-container-margin-mobile max-w-xl mx-auto text-center mb-10">
        <div className="mb-4 inline-block px-4 py-1 rounded-full bg-soft-rose/10 text-primary text-label-sm font-label-sm uppercase tracking-widest">
          Artist Community
        </div>
        <h2 className="text-headline-lg-mobile font-headline-lg-mobile text-primary mb-3">Register as an Artist</h2>
        <p className="text-body-md text-on-surface-variant italic">
          Fill in your details below and start connecting with clients across India.
        </p>
      </section>

      <section className="px-container-margin-mobile max-w-xl mx-auto">
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_20px_50px_-20px_rgba(134,78,93,0.1)]">
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
              <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">You&apos;re on the list!</h3>
              <p className="font-body-md text-on-surface-variant max-w-sm">
                Thanks for registering. Our team will review your profile and reach out within 2-3 business days.
              </p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="relative group">
                <label className="block text-label-sm font-label-sm text-primary uppercase mb-1">Full Name</label>
                <input required name="fullName" className="w-full input-elegant py-3 font-body-md placeholder:text-outline-variant/60" placeholder="e.g. Priya Sharma" type="text" />
              </div>

              <div className="relative group">
                <label className="block text-label-sm font-label-sm text-primary uppercase mb-1">Email Address</label>
                <input required name="email" className="w-full input-elegant py-3 font-body-md placeholder:text-outline-variant/60" placeholder="e.g. priya@email.com" type="email" />
              </div>

              <div className="relative group">
                <label className="block text-label-sm font-label-sm text-primary uppercase mb-1">Phone Number</label>
                <div className="flex items-center gap-2 border-b border-outline-variant group-focus-within:border-champagne-gold transition-colors">
                  <span className="text-on-surface-variant font-body-md">+91</span>
                  <input required name="phone" className="w-full bg-transparent border-none py-3 px-0 focus:ring-0 font-body-md placeholder:text-outline-variant/60" maxLength="10" placeholder="9876543210" type="tel" />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-label-sm font-label-sm text-primary uppercase mb-1">City</label>
                <input required name="city" className="w-full input-elegant py-3 font-body-md placeholder:text-outline-variant/60" placeholder="e.g. Bangalore" type="text" />
              </div>

              <div className="relative group">
                <label className="block text-label-sm font-label-sm text-primary uppercase mb-1">Instagram Profile Link</label>
                <input name="instagram" className="w-full input-elegant py-3 font-body-md placeholder:text-outline-variant/60" placeholder="https://www.instagram.com/yourprofile" type="url" />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-primary text-white py-4 rounded-lg text-label-md font-label-md uppercase tracking-[0.2em] shadow-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting..." : "Register Now"}
                </button>
              </div>

              <p className="text-center text-body-md text-on-surface-variant">
                Already have an account?{" "}
                <a className="text-primary font-semibold hover:underline decoration-champagne-gold underline-offset-4" href="#">
                  Login here
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

      <div className="mt-section-gap-lg px-container-margin-mobile max-w-xl mx-auto opacity-40">
        <div className="h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent"></div>
      </div>
    </>
  );
}
