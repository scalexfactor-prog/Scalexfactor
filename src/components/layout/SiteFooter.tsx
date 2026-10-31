import { Icon } from '@/components/ui/Icon';
import { Link } from 'react-router-dom';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#070b11] py-16 text-sm text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-800 pb-12 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/25">
                <Icon name="bolt" className="text-[18px]" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white">
                SCALEX<span className="text-cyan-400">FACTOR</span>
              </span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Scalex Factor is a performance growth and web technology agency engineered to accelerate enterprise brands through design, data, and software.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white" aria-label="Twitter"><Icon name="alternate_email" className="text-[18px]" /></a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn"><Icon name="work" className="text-[18px]" /></a>
              <a href="#" className="hover:text-white" aria-label="GitHub"><Icon name="code" className="text-[18px]" /></a>
            </div>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">Core Services</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white">Web App Engineering</a></li>
              <li><a href="#services" className="hover:text-white">Search Engine Dominance</a></li>
              <li><a href="#services" className="hover:text-white">Paid Media &amp; Ads</a></li>
              <li><a href="#services" className="hover:text-white">Conversion Optimization</a></li>
              <li><a href="#services" className="hover:text-white">Brand Systems &amp; UI/UX</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">Agency</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#results" className="hover:text-white">Case Studies</a></li>
              <li><a href="#process" className="hover:text-white">Our Framework</a></li>
              <li><a href="#calculator" className="hover:text-white">ROI Predictor</a></li>
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
              <li><a href="#audit-form" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">Contact Direct</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2"><Icon name="mail" className="text-[14px] text-cyan-400" /> hello@scalexfactor.com</li>
              <li className="flex items-center gap-2"><Icon name="call" className="text-[14px] text-cyan-400" /> +1 (800) 482-9210</li>
              <li className="flex items-center gap-2"><Icon name="location_on" className="text-[14px] text-cyan-400" /> San Francisco &amp; London</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 Scalex Factor Agency Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Engagement</a>
            <Link to="/admin" className="text-cyan-400 hover:text-cyan-300">Staff Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
