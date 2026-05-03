`use client`;

import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-lime flex items-center justify-center">
                <span className="text-void font-extrabold text-xs">INFX</span>
              </div>
              <span className="text-text-primary font-bold text-sm">
                INFX <span className="text-lime">TakeOver</span>
              </span>
            </div>
            <p className="text-text-tertiary text-sm leading-relaxed max-w-xs">
              We don't advertise. We hijack physical retail and convert it into immersive brand worlds overnight.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="eyebrow mb-5">Navigation</p>
            <ul className="space-y-3">
              <li><a href="#revelation" className="text-text-tertiary text-sm hover:text-lime transition">The Revelation</a></li>
              <li><a href="#attention-deficit" className="text-text-tertiary text-sm hover:text-lime transition">The Generation</a></li>
              <li><a href="#overnight" className="text-text-tertiary text-sm hover:text-lime transition">The TakeOver</a></li>
              <li><a href="#activation" className="text-text-tertiary text-sm hover:text-lime transition">The Activation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="text-text-tertiary text-sm">leads@infxmedia.xyz</li>
              <li className="text-text-tertiary text-sm">Bedfordview, Johannesburg</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            &copy; 2025 INFX Solutions &mdash; An Infinity Brands Company
          </p>
          <p className="text-text-dim text-xs flex items-center gap-2">
            <Zap size={12} className="text-lime" />
            Powered by the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
