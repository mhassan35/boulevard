import LoadingImage from '../LoadingImage';
import Reveal from '../Reveal';
import { Card } from '../ui/card';

const metrics = [
  ['9+', 'Years of excellence'],
  ['500+', 'Units delivered'],
  ['15', 'Successful projects'],
  ['100%', 'On-time delivery'],
];

export default function TrustSection() {
  return (
    <section className="mx-auto w-[min(1240px,calc(100%-48px))] bg-black py-[80px] pb-[120px] text-[#f5f2eb] max-[640px]:w-[calc(100%-44px)]" id="about">
      <div className="grid grid-cols-[0.82fr_1.18fr] items-center gap-[clamp(40px,8vw,115px)] max-[900px]:gap-[38px] max-[640px]:grid-cols-1 max-[640px]:gap-[30px]">
        <Reveal className="relative min-h-[520px] overflow-hidden rounded-[18px_18px_90px_18px] bg-[#101b2e] max-[900px]:min-h-[440px] max-[640px]:min-h-[390px] max-[640px]:max-h-[470px]">
          <LoadingImage
            shellClassName="absolute inset-0"
            className="h-full w-full min-h-[520px] object-cover object-[center_25%] max-[900px]:min-h-[440px] max-[640px]:min-h-[390px] max-[640px]:max-h-[470px]"
            src="https://boulevard01.com/new-design/wp-content/themes/boulevard01/public/images/ceo.jpg"
            alt="Boulevard founder in a modern office"
            width={900}
            height={1100}
            sizes="(max-width: 760px) 90vw, 38vw"
            unoptimized
          />
          <span className="absolute inset-x-0 bottom-0 flex justify-between bg-[linear-gradient(transparent,rgba(16,27,46,0.8))] p-[18px] text-[9px] tracking-[0.13em] text-white">
            A VISION BUILT ON TRUST <i className="not-italic text-[#c4a46a]">FOUNDER’S NOTE</i>
          </span>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="eyebrow">01 / A CEO MESSAGE</span>
          <h2 className="my-[18px_0_14px] text-[clamp(42px,5vw,68px)] leading-[1.02] tracking-[-0.045em] text-[#f5f2eb] max-[640px]:text-[43px]">
            Building trust.
            <br />
            <em className="not-italic text-[#c4a46a]">Creating boulevard01.</em>
          </h2>
          <p className="my-5 max-w-[680px] text-[15px] leading-[1.85] text-[rgba(245,242,235,0.68)] max-[640px]:text-[13px]">
            Founded on the principles of integrity &amp; excellence, Boulevard01
            has transformed from a visionary startup to a leading authority in
            property development &amp; investment. Our journey is defined by
            successful projects &amp; lasting client relationships, driven by
            our unwavering commitment to delivering exceptional property
            solutions.
          </p>
          <p className="my-5 max-w-[680px] text-[15px] leading-[1.85] text-[rgba(245,242,235,0.68)] max-[640px]:text-[13px]">
            With a focus on innovation &amp; customer satisfaction, we continue
            to empower clients with strategic advice, tailored investment
            opportunities, &amp; a seamless transaction process.
          </p>
          <div className="mt-7 grid gap-[5px] border-l-2 border-[#c4a46a] pl-[15px]">
            <strong className="text-[18px] font-medium text-[#f5f2eb]">M. Hammad Shams</strong>
            <span className="text-[11px] tracking-[0.08em] text-[rgba(245,242,235,0.56)] uppercase">CEO &amp; Founder</span>
          </div>
        </Reveal>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-[clamp(12px,1.5vw,20px)] max-[900px]:mt-16 max-[640px]:mt-[50px] max-[640px]:grid-cols-2 max-[640px]:gap-[9px]" aria-label="Boulevard at a glance">
        {metrics.map(([value, label]) => (
          <Reveal className="metric-reveal" key={label}>
            <Card className="relative grid min-h-[166px] content-center justify-items-center gap-3 overflow-hidden p-[25px_12px] transition-[transform,border-color,box-shadow] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] before:absolute before:left-[24%] before:top-0 before:h-px before:w-[52%] before:bg-[linear-gradient(90deg,transparent,rgba(196,164,106,0.72),transparent)] hover:-translate-y-[5px] max-[760px]:min-h-[136px] max-[760px]:gap-[9px] max-[640px]:p-[18px_8px] motion-reduce:transition-none motion-reduce:hover:transform-none">
              <strong className="text-[clamp(42px,5vw,64px)] font-medium leading-none tracking-[-0.075em] text-[#c4a46a]">{value}</strong>
              <span className="text-[9px] font-semibold tracking-[0.14em] text-[rgba(245,242,235,0.68)] text-center uppercase max-[760px]:text-[8px] max-[760px]:tracking-[0.1em]">{label}</span>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
