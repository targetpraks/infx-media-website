import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy-dark font-bold text-sm">INFX</span>
              </div>
              <span className="text-foreground font-semibold">INFX <span className="text-gold">Media</span>
</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">Africa&aposs;s first QSR store takeover platform. One brand per space. One space per brand.</p>
            <div className="flex items-center gap-4 mt-5">
              {<span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted">in</span>}
              {<span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted">X</span>}
              {<span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-muted">IG</span>}
            </div>
          </div>

          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-5">Explore</p>
            <ul className="space-y-3">
              <li>
<Link href="/how-it-works/" className="text-muted text-sm hover:text-foreground transition" prefetch={false}>How It Works</Link>
</li>
              <li>
<Link href="/gallery/" className="text-muted text-sm hover:text-foreground transition" prefetch={false}>Gallery</Link>
</li>
              <li>
<Link href="/data-advantage/" className="text-muted text-sm hover:text-foreground transition" prefetch={false}>Data Advantage</Link>
</li>
            </ul>
          </div>

          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-5">Company</p>
            <ul className="space-y-3">
              <li>
<Link href="/about/" className="text-muted text-sm hover:text-foreground transition" prefetch={false}>About INFX</Link>
</li>
              <li>
<Link href="/faq/" className="text-muted text-sm hover:text-foreground transition" prefetch={false}>FAQ</Link>
</li>
              <li>
<Link href="/agency/" className="text-muted text-sm hover:text-foreground transition" prefetch={false}>Agency Partners</Link>
</li>
            </ul>
          </div>

          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
<Mail size={16} className="text-gold mt-0.5 shrink-0" />
<span className="text-muted text-sm">leads@infxmedia.xyz</span>
</li>
              <li className="flex items-start gap-3">
<Phone size={16} className="text-gold mt-0.5 shrink-0" />
<span className="text-muted text-sm">+27 11 XXX XXXX</span>
</li>
              <li className="flex items-start gap-3">
<MapPin size={16} className="text-gold mt-0.5 shrink-0" />
<span className="text-muted text-sm">Bedfordview, Johannesburg, South Africa</span>
</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">&copy; {new Date().getFullYear()} INFX Media, an Infinity Brands company. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/" className="text-muted text-xs hover:text-foreground transition" prefetch={false}>Privacy Policy</Link>
            <Link href="/legal/" className="text-muted text-xs hover:text-foreground transition" prefetch={false}>Terms</Link>
            <Link href="/legal/" className="text-muted text-xs hover:text-foreground transition" prefetch={false}>POPIA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
