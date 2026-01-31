'use client';

import HeroSection from '@/components/HeroSection';
import LoveMessageSection from '@/components/LoveMessageSection';
import CuteCharactersSection from '@/components/CuteCharactersSection';
import PromiseSection from '@/components/PromiseSection';
import ProposalSection from '@/components/ProposalSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <LoveMessageSection />
      <CuteCharactersSection />
      <PromiseSection />
      <ProposalSection />
    </main>
  );
}
