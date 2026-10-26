import { ArrowRight } from 'lucide-react';
import Reveal from '../Reveal';
import { Card } from '../ui/card';
import { reasons } from '../../../lib/data';

export default function WhyBoulevardSection() {
  return (
    <section className="why-section" id="why-boulevard">
      <div className="why-backdrop" aria-hidden="true">
        B/01
      </div>
      <div className="section-wrap why-inner">
        <Reveal className="why-heading">
          <span className="eyebrow">03 / WHY BOULEVARD01</span>
          <h2>
            Engineered
            <br />
            for <em>returns.</em>
          </h2>
          <p>
            Built on local knowledge, delivered with care, and designed to hold
            value for generations.
          </p>
          <a className="button button-light" href="#inquiry">
            See the numbers for yourself <ArrowRight size={16} />
          </a>
        </Reveal>
        <div className="reason-grid">
          {reasons.map((reason, index) => (
            <Reveal
              className="reason-reveal"
              key={reason.title}
              delay={index * 0.06}
            >
              <Card className="reason-card">
                <span>0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
