import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDownRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import DevelopmentsSection from '../components/sections/DevelopmentsSection';
import FooterSection from '../components/sections/FooterSection';

export const metadata: Metadata = {
  title: 'Projects | Boulevard01',
  description:
    'Explore Boulevard01 residential and commercial developments in Bahria Town Lahore.',
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <CustomCursor />
      <Navbar variant="light" />
      <header className="projects-page-hero">
        <div className="section-wrap">
          <span className="eyebrow">THE BOULEVARD COLLECTION</span>
          <h1>
            Spaces for living.
            <br />
            <em>Places to appreciate.</em>
          </h1>
          <p>
            Explore distinctive residential and commercial destinations shaped
            around modern city life and lasting value.
          </p>
          <Link href="/#inquiry" className="button button-dark">
            Plan a private tour <ArrowDownRight size={16} />
          </Link>
        </div>
      </header>
      <DevelopmentsSection />
      <FooterSection />
    </main>
  );
}
