import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import Reveal from '../Reveal';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { developments } from '../../../lib/data';

export default function InquirySection() {
  return (
    <section className="inquiry-section" id="inquiry">
      <div className="inquiry-decoration" aria-hidden="true">
        01
      </div>
      <Reveal className="inquiry-reveal">
        <Card className="inquiry-card">
          <CardHeader className="text-center">
            <span className="eyebrow">06 / RESERVE YOUR SPOT</span>
            <CardTitle className="mt-4 mb-[35px] text-[clamp(34px,5vw,55px)] leading-[1.02] tracking-[-0.04em] max-[640px]:mb-[26px] max-[640px]:text-4xl">
              Ready to explore
              <br />
              your next investment?
            </CardTitle>
          </CardHeader>
          <form
            action="mailto:Contact@boulevard01.com"
            method="post"
            encType="text/plain"
            className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1 max-[640px]:gap-[18px]"
          >
            <Label>
              Name
              <Input
                name="Name"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </Label>
            <Label>
              Phone
              <Input
                name="Phone"
                placeholder="+92 3XX XXXXXXX"
                autoComplete="tel"
                required
              />
            </Label>
            <Label>
              Interested project
              <Select name="Project" defaultValue="">
                <option value="" disabled>
                  Select project
                </option>
                {developments.map((project) => (
                  <option key={project.name}>{project.name}</option>
                ))}
              </Select>
            </Label>
            <Label>
              Unit type
              <Select name="Unit type" defaultValue="Any unit">
                <option>Any unit</option>
                <option>Studio</option>
                <option>1 Bed</option>
                <option>2 Bed</option>
                <option>3 Bed</option>
                <option>Commercial</option>
              </Select>
            </Label>
            <Label className="col-span-full max-[640px]:col-auto">
              Message (optional)
              <Textarea
                name="Message"
                placeholder="Tell us your budget or questions"
                rows={2}
              />
            </Label>
            <div className="col-span-full mt-3 flex items-center justify-between gap-[18px] max-[640px]:col-auto max-[640px]:flex-col max-[640px]:items-stretch">
              <div className="grid gap-3 max-[640px]:gap-[9px]">
                <a className="flex items-center gap-2 text-[10px] text-[#f5f2eb]/[0.68]" href="tel:+923379619747">
                  <Phone className="text-[#c4a46a]" size={14} />
                  +92 337 9619747
                </a>
                <a className="flex items-center gap-2 text-[10px] text-[#f5f2eb]/[0.68]" href="mailto:Contact@boulevard01.com">
                  <Mail className="text-[#c4a46a]" size={14} />
                  Contact@boulevard01.com
                </a>
              </div>
              <Button className="max-[640px]:w-full" type="submit">
                Transmit Details <ArrowUpRight className="text-[#c4a46a]" size={16} />
              </Button>
            </div>
          </form>
        </Card>
      </Reveal>
    </section>
  );
}
