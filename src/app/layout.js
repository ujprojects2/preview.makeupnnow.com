import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export const metadata = {
  title: {
    default: "Makeupnnow | Professional Makeup Artist Directory in Bangalore",
    template: "%s | Makeupnnow",
  },
  description:
    "Find and book professional makeup artists, hairstylists, and beauty masterclasses in Bangalore. Elite bridal, editorial, and party makeup artistry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface-blush text-on-surface font-body-md selection:bg-soft-rose/30">
        <Header />
        <main className="flex-1 pt-16 pb-20 md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
