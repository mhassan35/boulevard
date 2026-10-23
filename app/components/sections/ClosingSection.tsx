import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';

export default function ClosingSection() {
  return (
    <>
      <section className="closing-section" id="contact">
        <div className="closing-mark" aria-hidden="true">
          BOULEVARD
        </div>
        <Reveal className="closing-content">
          <span className="eyebrow">09 / START YOUR JOURNEY</span>
          <h2>
            Ready to explore your
            <br />
            <em>next boulevard01 investment?</em>
          </h2>
          <p>
            Speak with boulevard01 today and get project details, availability,
            and investment opportunities tailored to your goals.
          </p>
          <div className="closing-actions">
            <a className="button button-light" href="#inquiry">
              Book Free Consultation <ArrowRight size={17} />
            </a>
            <a
              className="button button-glass"
              href="https://wa.me/923234396956"
            >
              WhatsApp +92 323 4396956 <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
