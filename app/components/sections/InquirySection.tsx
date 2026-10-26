import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Reveal from '../Reveal';
import { Card } from '../ui/card';
import { developments } from '../../../lib/data';

export default function InquirySection() {
  return (
    <section className="inquiry-section" id="inquiry">
      <div className="inquiry-decoration" aria-hidden="true">
        01
      </div>
      <Reveal className="inquiry-reveal">
        <Card className="inquiry-card">
          <div className="inquiry-heading">
            <span className="eyebrow">06 / RESERVE YOUR SPOT</span>
            <h2>
              Ready to explore
              <br />
              your next investment?
            </h2>
          </div>
          <form
            action="mailto:Contact@boulevard01.com"
            method="post"
            encType="text/plain"
            className="inquiry-form"
          >
            <label>
              Name
              <input
                name="Name"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </label>
            <label>
              Phone
              <input
                name="Phone"
                placeholder="+92 3XX XXXXXXX"
                autoComplete="tel"
                required
              />
            </label>
            <label>
              Interested project
              <select name="Project" defaultValue="">
                <option value="" disabled>
                  Select project
                </option>
                {developments.map((project) => (
                  <option key={project.name}>{project.name}</option>
                ))}
              </select>
            </label>
            <label>
              Unit type
              <select name="Unit type" defaultValue="Any unit">
                <option>Any unit</option>
                <option>Studio</option>
                <option>1 Bed</option>
                <option>2 Bed</option>
                <option>3 Bed</option>
                <option>Commercial</option>
              </select>
            </label>
            <label className="message-field">
              Message (optional)
              <textarea
                name="Message"
                placeholder="Tell us your budget or questions"
                rows={2}
              />
            </label>
            <div className="inquiry-submit">
              <div>
                <a href="tel:+923379619747">
                  <Phone size={14} />
                  +92 337 9619747
                </a>
                <a href="mailto:Contact@boulevard01.com">
                  <Mail size={14} />
                  Contact@boulevard01.com
                </a>
              </div>
              <button className="button button-light" type="submit">
                Transmit Details <ArrowUpRight size={16} />
              </button>
            </div>
          </form>
        </Card>
      </Reveal>
    </section>
  );
}
