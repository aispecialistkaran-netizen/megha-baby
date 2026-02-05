'use client';

import HeroSection from '@/components/HeroSection';
import LoveMessageSection from '@/components/LoveMessageSection';
import CuteCharactersSection from '@/components/CuteCharactersSection';
import PromiseSection from '@/components/PromiseSection';
import ProposalSection from '@/components/ProposalSection';
import BackgroundMusic from '@/components/BackgroundMusic';
import LoveLetterButton from '@/components/LoveLetterButton';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <BackgroundMusic />
      <HeroSection />
      <LoveMessageSection />
      <LoveLetterButton />
      <CuteCharactersSection />
      <PromiseSection />
      <ProposalSection />
    </main>
  );
}
