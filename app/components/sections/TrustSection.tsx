import LoadingImage from '../LoadingImage';
import Reveal from '../Reveal';

const metrics = [
  ['9+', 'Years of excellence'],
  ['500+', 'Units delivered'],
  ['15', 'Successful projects'],
  ['100%', 'On-time delivery'],
];

export default function TrustSection() {
  return (
    <section className="trust-section section-wrap" id="about">
      <div className="founder-layout">
        <Reveal className="founder-photo-wrap">
          <LoadingImage
            className="founder-photo"
            src="https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/ceo.jpg"
            alt="Boulevard founder in a modern office"
            width={900}
            height={1100}
            sizes="(max-width: 760px) 90vw, 38vw"
            unoptimized
          />
          <span className="founder-photo-caption">
            A VISION BUILT ON TRUST <i>FOUNDER’S NOTE</i>
          </span>
        </Reveal>
        <Reveal className="founder-copy" delay={0.12}>
          <span className="eyebrow">01 / A CEO MESSAGE</span>
          <h2>
            Building trust.
            <br />
            <em>Creating boulevard01.</em>
          </h2>
          <p>
            Founded on the principles of integrity &amp; excellence, Boulevard01
            has transformed from a visionary startup to a leading authority in
            property development &amp; investment. Our journey is defined by
            successful projects &amp; lasting client relationships, driven by
            our unwavering commitment to delivering exceptional property
            solutions.
          </p>
          <p>
            With a focus on innovation &amp; customer satisfaction, we continue
            to empower clients with strategic advice, tailored investment
            opportunities, &amp; a seamless transaction process.
          </p>
          <div className="founder-signature">
            <strong>M. Hammad Shams</strong>
            <span>CEO &amp; Founder</span>
          </div>
        </Reveal>
      </div>
      <div className="trust-metrics" aria-label="Boulevard at a glance">
        {metrics.map(([value, label]) => (
          <Reveal className="metric-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
