import { Quote, Star } from 'lucide-react';
import Reveal from '../Reveal';
import { Card } from '../ui/card';
import { testimonials } from '../../../lib/data';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="stories">
      <div className="section-wrap">
        <Reveal className="testimonials-heading">
          <span className="eyebrow">08 / CLIENT STORIES</span>
          <h2>
            What our investors
            <br />
            <em>say about the journey.</em>
          </h2>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal
              className="testimonial-reveal"
              key={item.name}
              delay={index * 0.06}
            >
              <Card className="testimonial-card">
                <div className="testimonial-top">
                  <span className="stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </span>
                  <Quote size={20} />
                </div>
                <blockquote>{item.quote}</blockquote>
                <div className="testimonial-person">
                  <span>
                    {item.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>
                      {item.role} · {item.location}
                    </small>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
