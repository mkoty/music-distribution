import { LandingHeader } from '@/components/landing/LandingHeader';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { CTA } from '@/components/landing/CTA';
import { LandingFooter } from '@/components/landing/LandingFooter';

export default function HomePage() {
  return (
    <>
      <LandingHeader />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <LandingFooter />
    </>
  );
}
