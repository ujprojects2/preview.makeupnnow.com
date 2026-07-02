import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact Us" };


export default function Page() {
  return (
    <>


<section className="relative pt-40 pb-20 px-container-margin-mobile md:px-container-margin-desktop overflow-hidden">
<div className="absolute top-0 right-0 -z-10 w-1/3 h-full opacity-10 blur-3xl bg-soft-rose rounded-full translate-x-1/2 -translate-y-1/4"></div>
<div className="max-w-4xl mx-auto text-center">
<h1 className="font-headline-display text-headline-display md:text-[64px] mb-4 text-primary leading-tight">Get in Touch</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant italic">We&apos;re here to help you shine.</p>
</div>
</section>

<section className="pb-section-gap-lg px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

<div className="lg:col-span-4 space-y-12">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-2 inline-block">Our Location</h3>
<div className="flex gap-4 mt-4">
<span className="material-symbols-outlined text-champagne-gold">location_on</span>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Office Address</p>
<p className="text-on-surface-variant mt-1">MG Road, Bangalore,<br />Karnataka, India</p>
</div>
</div>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-2 inline-block">Direct Contact</h3>
<div className="space-y-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-champagne-gold">mail</span>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Email Us</p>
<a className="text-on-surface-variant hover:text-primary transition-colors mt-1 block" href="mailto:support@makeupnnow.com">support@makeupnnow.com</a>
</div>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-champagne-gold">phone_iphone</span>
<div>
<p className="font-title-lg text-title-lg text-on-surface">Call Us</p>
<a className="text-on-surface-variant hover:text-primary transition-colors mt-1 block" href="tel:+919876543210">+91 98765 43210</a>
</div>
</div>
</div>
</div>
<div className="p-4 bg-surface-blush rounded-xl border border-outline-variant/30">
<div className="aspect-square w-full rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy1gzsAGADy0X7zrzceTszBiRmUVHfxb9seUQoBtPTdpTRPeGpUBlknxwJRpThH68GVB8UQ138xuQDIURAkSMfR0iln2srQxf8rsLnCyJx3moY0QGPEFcdYYoN2s5H4fGJCokx1ze9yt3OZ72tV4NSo2z9NW0ZhhC5icE1njnz-MiOJyDUVavCG-TIlJ8gYf2qKBwFjlSNPedVFkMOT-JGV9o8Xw6HjVU2RSxDbF-MbtDhaS8zkgCU98rLMfNlT0bXfVWqDCRneSDF"  alt="Makeup artistry" />
</div>
<p className="text-label-sm text-center mt-3 uppercase tracking-tighter text-outline italic">Find us in the heart of the city</p>
</div>
</div>

<div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(134,78,93,0.05)] border border-surface-blush">
<ContactForm />
</div>
</div>
</section>

<section className="py-section-gap-lg bg-surface-container-low">
<div className="px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-[3/4] rounded-xl overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5l-kb9h2ZH-MTmyjczIOAmsiXU29K7z7n2svPJGr-xT4SF3tNWiQIX7YOnbOjSKQPyELhM0wDTt1G9R_Kwo9PfBfGe_8IlFD7fZW6hcRqBDOPxNEoEYEORMgNL8p45qfNU4VTTVutXxMrqVLMm0ly2qMCQeq6-sWehf4LHHNEPwiNQoJuuWMogoMCZQEns2EIjnA6eogEC6fFngT6TJznCY5ls2nLOSMXs40IwwCScUaYSJnR3B9Xz1ugI6v4QYfn7HdR-ksu1SLN"  alt="Makeup artistry" />
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden group relative translate-y-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArVhSFe9Ix-pwWMEs5Om1jgBMKLIxAvMq9a9PLfI6mQfR0uxUiv5IPOY1_G9mqNMVrMvgmy0uHhM5S140Ok_usNTnRXEnGtiV_YCHl4v0wBldNScaKYTazt2LbiegQUONZXX4uDS2HkXMKHr-jo1uQ3kdwQtaxTvPAUAC-cR1e5BznDogwsHq0pMDHvhBRRwOyG45YTypGeSLRy99taDuOB3LXFig9LiENmgrfkxekOesucEeMc025561CfceQ1ujQm_I8yoCnqigz"  alt="Makeup artistry" />
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden group relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXONbm9U2FU-1-8zmq4hUX81TiyFe1YaOceMy255RX5srYCShLEnLonB8fTVMHp3QffSyhjiYKI6JzeS60p8CoNt67xVGZPWqZZSRW6nz0Oh3Qb5cpRYW_bpzh6sHuQJfbdNzkGlIY9VxKtzt-E6rRR5oBa8dGgTo4C74kV0wRE4bb0RusoJPzpAwyPr99twmSaNv0VIl0iSHVarhPT7o7OO9_Yy0cGZMjCenq24Rj2SCjTKntNvA5Txc1RKDrKNfHQYRiDlmXbq9m"  alt="Makeup artistry" />
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden group relative translate-y-8">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBuZPPs9WWwevCgqB2ZpMg3oVZo9rjJ74TtWxMwup1ceVBfaen_y1PQudQrsMNAo45F7KuPLgwlS1tSB3l2g_gz67ZJmtuYbQxWMyKIHvUTt75RfQjEPs0c0ksVmYjwyGVZ8Lhc_aulx3f2Yp-MSvclyJE-vGSJXTFiCERes1T8TWNZjsjyCACISl-gMzPlq2X5bHeHmQOXYiK46uZWQ26fWR2Xmx2-xOQ-lY3vxaiQ-sCT7hQOc446cyAvTcrI1X_bh_0zqjRzUKD"  alt="Makeup artistry" />
<div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
</div>
</div>
</div>
</section>


    </>
  );
}
