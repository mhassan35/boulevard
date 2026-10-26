'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import LoadingImage from './LoadingImage';
import { buttonVariants } from './ui/button';
import { navigation, properties } from '../../lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!projectsOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setProjectsOpen(false);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!projectsRef.current?.contains(event.target as Node)) {
        setProjectsOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [projectsOpen]);

  const closeNavigation = () => {
    setProjectsOpen(false);
    setOpen(false);
  };

  return (
    <header
      className={`fixed left-1/2 top-[18px] z-20 flex h-[72px] w-[min(1240px,calc(100%-64px))] -translate-x-1/2 items-center justify-between rounded-[14px] border border-[#cddaf0]/20 bg-[rgba(8,10,15,0.72)] px-[27px] text-[#f5f2eb] shadow-[0_12px_42px_rgba(16,27,46,0.12)] backdrop-blur-[20px] transition-[background,border-color,box-shadow,color] duration-[350ms] max-[680px]:top-[10px] max-[680px]:h-[62px] max-[680px]:w-[calc(100%-22px)] max-[680px]:rounded-[11px] max-[680px]:px-[15px]${open ? ' menu-open' : ''}`}
    >
      <Link
        className="flex items-center gap-[11px] max-[680px]:gap-2"
        href="/"
        aria-label="Boulevard, home"
        onClick={closeNavigation}
      >
        <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-current pr-[3px] font-serif text-[25px] leading-none tracking-[-0.1em] max-[680px]:h-[31px] max-[680px]:w-[31px] max-[680px]:text-[22px]">
          b<span>.</span>
        </span>
        <span className="text-xs font-bold tracking-[0.2em] max-[680px]:text-[10px] min-[670px]:max-[740px]:hidden">
          BOULEVARD
          <span className="mt-1 block text-[7px] font-medium tracking-[0.2em] opacity-[0.72] max-[680px]:text-[6px]">REAL ESTATE &middot; PAKISTAN</span>
        </span>
      </Link>

      <button
        className="hidden border-0 bg-transparent p-2 max-[680px]:block"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav
        className={`flex items-center gap-[clamp(20px,2vw,34px)] text-[13px] max-[900px]:gap-5 max-[680px]:absolute max-[680px]:right-[-1px] max-[680px]:top-[55px] max-[680px]:left-[-1px] max-[680px]:hidden max-[680px]:flex-col max-[680px]:items-stretch max-[680px]:gap-0 min-[1440px]:gap-[38px] max-[680px]:rounded-b-[11px] max-[680px]:border max-[680px]:border-[#cddaf0]/20 max-[680px]:border-t-0 max-[680px]:bg-[rgba(8,10,15,0.97)] max-[680px]:px-4 max-[680px]:pb-4 max-[680px]:pt-2 max-[680px]:text-[#f5f2eb] max-[680px]:shadow-[0_14px_30px_rgba(16,27,46,0.13)] max-[680px]:backdrop-blur-[22px] ${open ? 'is-open max-[680px]:flex' : ''}`}
        aria-label="Main navigation"
      >
        {navigation.map((item) =>
          item.label === 'All Projects' ? (
            <div
              className={`projects-menu${projectsOpen ? ' is-open' : ''}`}
              key={item.label}
              ref={projectsRef}
              onPointerEnter={(event) => {
                const enteredProjectsTrigger =
                  event.target instanceof Element &&
                  event.target.closest('.projects-trigger-row');

                if (event.pointerType === 'mouse' && enteredProjectsTrigger) {
                  setProjectsOpen(true);
                }
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === 'mouse') setProjectsOpen(false);
              }}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(event.relatedTarget as Node)
                ) {
                  setProjectsOpen(false);
                }
              }}
            >
              <div className="projects-trigger-row">
                <Link
                  className="projects-trigger-link relative inline-flex min-h-[38px] items-center text-[13px] font-medium tracking-[0.005em] after:absolute after:bottom-[-6px] after:left-0 after:right-full after:h-px after:bg-[#c4a46a] after:transition-[right] after:duration-[250ms] hover:after:right-0 focus-visible:after:right-0 max-[680px]:py-[14px] max-[680px]:px-[2px] min-[1440px]:text-sm"
                  href={item.href}
                  onClick={closeNavigation}
                >
                  {item.label}
                </Link>
                <button
                  className="grid h-9 w-8 place-items-center rounded-[7px] bg-transparent p-0 opacity-[0.78] transition-[background,opacity] duration-[180ms] hover:bg-[#c4a46a]/15 hover:opacity-100"
                  type="button"
                  aria-label={
                    projectsOpen ? 'Close projects menu' : 'Open projects menu'
                  }
                  aria-expanded={projectsOpen}
                  aria-controls="projects-dropdown"
                  onClick={(event) => {
                    const isMouseClick =
                      event.detail > 0 &&
                      window.matchMedia('(hover: hover) and (pointer: fine)')
                        .matches;
                    setProjectsOpen((isOpen) => isMouseClick || !isOpen);
                  }}
                >
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
              </div>
              <AnimatePresence>
                {projectsOpen && (
                  <motion.div
                    id="projects-dropdown"
                    className="projects-dropdown"
                    role="region"
                    aria-label="All projects"
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 10, scale: 0.985 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 8, scale: 0.985 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="projects-dropdown-heading">
                      <div>
                        <span>Our projects</span>
                        <small>
                          Find your place in the Boulevard collection.
                        </small>
                      </div>
                      <Link href="/projects" onClick={closeNavigation}>
                        View all <ArrowRight size={15} />
                      </Link>
                    </div>
                    <div className="projects-dropdown-grid">
                      {properties.map((property) => (
                        <Link
                          className="project-menu-card"
                          href={`/projects#${property.slug}`}
                          key={property.name}
                          onClick={closeNavigation}
                        >
                          <LoadingImage
                            shellClassName="project-menu-image-shell"
                            className="project-menu-image"
                            src={property.image}
                            alt={property.alt}
                            width={600}
                            height={400}
                            sizes="220px"
                            unoptimized
                          />
                          <span className="project-menu-card-copy">
                            <strong>{property.name}</strong>
                            <small>{property.location}</small>
                          </span>
                          <ArrowRight
                            className="project-menu-arrow"
                            size={16}
                          />
                        </Link>
                      ))}
                    </div>
                    <div className="projects-dropdown-footer">
                      <span>Thoughtful spaces. Considered investments.</span>
                      <Link href="/#inquiry" onClick={closeNavigation}>
                        Speak with our team <ArrowDownRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : item.label === 'Contact' ? (
            <Link
              className="relative inline-flex min-h-[38px] items-center text-[13px] font-medium tracking-[0.005em] opacity-[0.87] transition-opacity duration-200 hover:opacity-100 after:absolute after:bottom-[-6px] after:left-0 after:right-full after:h-px after:bg-current after:transition-[right] after:duration-[250ms] hover:after:right-0 focus-visible:after:right-0 max-[680px]:py-[14px] max-[680px]:px-[2px] max-[680px]:text-sm max-[680px]:after:hidden max-[680px]:border-b max-[680px]:border-[#cddaf0]/15 min-[1440px]:text-sm"
              key={item.href}
              href={item.href}
              onClick={closeNavigation}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              className="relative inline-flex min-h-[38px] items-center text-[13px] font-medium tracking-[0.005em] opacity-[0.87] transition-opacity duration-200 hover:opacity-100 after:absolute after:bottom-[-6px] after:left-0 after:right-full after:h-px after:bg-current after:transition-[right] after:duration-[250ms] hover:after:right-0 focus-visible:after:right-0 max-[680px]:py-[14px] max-[680px]:px-[2px] max-[680px]:text-sm max-[680px]:after:hidden max-[680px]:border-b max-[680px]:border-[#cddaf0]/15 min-[1440px]:text-sm"
              key={item.href}
              href={item.href}
              onClick={closeNavigation}
            >
              {item.label}
            </Link>
          ),
        )}
        <Link
          className={buttonVariants({ variant: 'nav', size: 'nav', className: 'max-[680px]:mt-3 max-[680px]:min-h-11 max-[680px]:justify-between max-[680px]:text-[13px] max-[680px]:border-button-nav-mobile-border min-[1440px]:min-h-12 min-[1440px]:px-[22px] min-[1440px]:text-sm' })}
          href="/#inquiry"
          onClick={closeNavigation}
        >
          Book a Tour
          <ArrowDownRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
