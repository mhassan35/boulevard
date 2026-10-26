'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import LoadingImage from './LoadingImage';
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
      className={`site-header${open ? ' menu-open' : ''}`}
    >
      <Link
        className="brand"
        href="/"
        aria-label="Boulevard, home"
        onClick={closeNavigation}
      >
        <span className="brand-monogram">
          b<span>.</span>
        </span>
        <span className="brand-name">
          BOULEVARD
          <span>REAL ESTATE · PAKISTAN</span>
        </span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav
        className={`main-nav${open ? ' is-open' : ''}`}
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
                  className="projects-trigger-link nav-link text-[13px] xl:text-sm"
                  href={item.href}
                  onClick={closeNavigation}
                >
                  {item.label}
                </Link>
                <button
                  className="projects-trigger-toggle"
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
              className="nav-link text-[13px] xl:text-sm"
              key={item.href}
              href={item.href}
              onClick={closeNavigation}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              className="nav-link text-[13px] xl:text-sm"
              key={item.href}
              href={item.href}
              onClick={closeNavigation}
            >
              {item.label}
            </Link>
          ),
        )}
        <Link
          className="nav-cta text-[13px] xl:text-sm"
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
