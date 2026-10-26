import { Building2, Globe2 } from 'lucide-react';
import Link from 'next/link';
import { developments } from '../../../lib/data';

export default function FooterSection() {
  return (
    <footer className="premium-footer">
      <div className="section-wrap footer-columns">
        <div className="footer-brand-column">
          <Link className="footer-logo" href="/">
            BOULEVARD<span>01</span>
            <small>Landmark of trust</small>
          </Link>
          <p>
            Modern residential and commercial spaces in Bahria Town Lahore. 9+
            years of on-time delivery and quality construction.
          </p>
          <div className="footer-socials">
            <Link href="/projects" aria-label="Boulevard projects">
              <Building2 size={17} />
            </Link>
            <Link href="/#location" aria-label="Boulevard location">
              <Globe2 size={18} />
            </Link>
          </div>
        </div>

        <div>
          <span className="footer-label">Projects</span>
          {developments.map((project) => (
            <Link
              className="footer-link"
              href={`/projects#${project.slug}`}
              key={project.name}
            >
              {project.name}
            </Link>
          ))}
        </div>

        <div>
          <span className="footer-label">Useful links</span>
          <Link className="footer-link" href="/projects">
            Our Projects
          </Link>
          <Link className="footer-link" href="/about">
            About Us
          </Link>
          <Link className="footer-link" href="/#inquiry">
            Contact Us
          </Link>
        </div>

        <div className="footer-contact">
          <span className="footer-label">Contact</span>
          <a className="footer-link" href="tel:+923379619747">
            +92 337 9619747
          </a>
          <a className="footer-link" href="https://wa.me/923234396956">
            +92 323 4396956
          </a>
          <a className="footer-link" href="mailto:Contact@boulevard01.com">
            Contact@boulevard01.com
          </a>
          <p>
            19A, 4th Floor, Gulmohar Commercial,
            <br />
            Sector C, Bahria Town Lahore.
          </p>
        </div>
      </div>

      <div className="section-wrap footer-legal">
        <span>© 2026 Boulevard01. All rights reserved.</span>
        <span>Bahria Town, Lahore · Pakistan</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
