import { ArrowLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BRAND_NAME, BRAND_SUFFIX } from '../data/constants';

type SiteFooterProps = {
  variant?: 'landing' | 'suite';
};

export default function SiteFooter({ variant = 'landing' }: SiteFooterProps) {
  const navigate = useNavigate();

  return (
    <footer
      className={`bg-[#1f2a1d] text-white/70 px-6 sm:px-12 border-t border-white/10 text-xs ${
        variant === 'suite' ? 'py-10 mt-auto w-full' : 'py-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-semibold tracking-tight text-white block mb-1">
            {BRAND_NAME}
            <span className="font-light text-[#85AB8B]">{BRAND_SUFFIX}</span>
          </span>
          <p className="text-white/50 text-[11px]">
            © {new Date().getFullYear()} Aura Resort & Spa. All rights reserved.
          </p>
        </div>

        {variant === 'suite' ? (
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/15 cursor-pointer transition-all hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-[#85AB8B]" />
            <span className="font-medium text-xs">Return to Resort Landing Page</span>
          </button>
        ) : (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full border border-white/15 cursor-pointer"
          >
            <span className="font-medium text-xs">Back to Top</span>
            <ChevronRight className="w-4 h-4 -rotate-90 text-[#85AB8B]" />
          </button>
        )}
      </div>
    </footer>
  );
}
