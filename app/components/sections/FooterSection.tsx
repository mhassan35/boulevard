import { Building2, Globe2 } from 'lucide-react';
import Link from 'next/link';
import { developments } from '../../../lib/data';

export default function FooterSection() {
  return (
    <footer className="bg-black pt-[70px] pb-5 text-[#f5f2eb] max-[640px]:pt-[50px]">
      <div className="mx-auto grid w-[min(1240px,calc(100%-48px))] grid-cols-[1.5fr_0.8fr_0.8fr_1fr] gap-[45px] pb-[55px] max-[900px]:grid-cols-2 max-[640px]:w-[calc(100%-44px)] max-[640px]:gap-[35px_20px] max-[640px]:pb-[38px]">
        <div className="footer-brand-column max-[640px]:col-span-full">
          <Link className="relative inline-block text-[22px] font-bold tracking-[0.08em] text-white" href="/">
            BOULEVARD<span className="ml-[5px] text-[12px] text-[#c4a46a]">01</span>
            <small className="mt-1 block text-center text-[8px] font-normal tracking-[0.2em] text-[rgba(245,242,235,0.55)]">Landmark of trust</small>
          </Link>
          <p className="max-w-[300px] text-[11px] leading-[1.8] text-[rgba(245,242,235,0.58)]">
            Modern residential and commercial spaces in Bahria Town Lahore. 9+
            years of on-time delivery and quality construction.
          </p>
          <div className="mt-[19px] flex gap-3">
            <Link className="grid size-[34px] place-items-center rounded-full border border-[rgba(245,242,235,0.18)] text-[#c4a46a]" href="/projects" aria-label="Boulevard projects">
              <Building2 size={17} />
            </Link>
            <Link className="grid size-[34px] place-items-center rounded-full border border-[rgba(245,242,235,0.18)] text-[#c4a46a]" href="/#location" aria-label="Boulevard location">
              <Globe2 size={18} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[14px]">
          <span className="mb-[5px] text-[9px] tracking-[0.18em] text-[#c4a46a] uppercase">Projects</span>
          {developments.map((project) => (
            <Link
              className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white"
              href={`/projects#${project.slug}`}
              key={project.name}
            >
              {project.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-start gap-[14px]">
          <span className="mb-[5px] text-[9px] tracking-[0.18em] text-[#c4a46a] uppercase">Useful links</span>
          <Link className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white" href="/projects">
            Our Projects
          </Link>
          <Link className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white" href="/about">
            About Us
          </Link>
          <Link className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white" href="/#inquiry">
            Contact Us
          </Link>
        </div>

        <div className="footer-contact flex flex-col items-start gap-[14px]">
          <span className="mb-[5px] text-[9px] tracking-[0.18em] text-[#c4a46a] uppercase">Contact</span>
          <a className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white" href="tel:+923379619747">
            +92 337 9619747
          </a>
          <a className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white" href="https://wa.me/923234396956">
            +92 323 4396956
          </a>
          <a className="text-[10px] text-[rgba(245,242,235,0.62)] transition-colors duration-200 hover:text-white" href="mailto:Contact@boulevard01.com">
            Contact@boulevard01.com
          </a>
          <p className="m-0 max-w-[300px] text-[11px] leading-[1.8] text-[rgba(245,242,235,0.58)]">
            19A, 4th Floor, Gulmohar Commercial,
            <br />
            Sector C, Bahria Town Lahore.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-[min(1240px,calc(100%-48px))] justify-between gap-[15px] border-t border-[rgba(245,242,235,0.13)] pt-[18px] text-[9px] text-[rgba(245,242,235,0.5)] max-[640px]:w-[calc(100%-44px)] max-[640px]:flex-wrap max-[640px]:text-[8px] [&>span:nth-child(2)]:max-[640px]:order-3 [&>span:nth-child(2)]:max-[640px]:w-full">
        <span>© 2026 Boulevard01. All rights reserved.</span>
        <span>Bahria Town, Lahore · Pakistan</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
