import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest pt-section-gap-lg pb-12 px-container-margin-mobile md:px-container-margin-desktop">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
              <span className="font-headline-md text-primary tracking-tighter text-2xl">Makeupnnow</span>
            </div>
            <p className="font-body-md text-on-surface-variant mb-8 max-w-xs">
              India&apos;s premier destination for luxury bridal artistry and professional beauty education.
            </p>
            <div className="flex gap-4">
              <a
                aria-label="Website"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">camera</span>
              </a>
              <a
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                href="mailto:hello@makeupnnow.com"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/">Home</Link></li>
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</Link></li>
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/services">Our Services</Link></li>
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/artists">Artist Directory</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">Categories</h5>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/services">Bridal Makeup</Link></li>
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/services">Hairstyling</Link></li>
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/services">Nail Art</Link></li>
              <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/services">Saree Draping</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">Contact</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="font-body-md">Indiranagar, Bangalore,<br />Karnataka 560038</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="font-body-md">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-on-surface-variant/60">
            © {new Date().getFullYear()} MAKEUPNNOW ARTISTRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a className="font-label-sm text-label-sm text-on-surface-variant/60 hover:text-primary" href="#">PRIVACY POLICY</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant/60 hover:text-primary" href="#">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
