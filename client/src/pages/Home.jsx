import { useCallback } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import WhatIsThis from '../components/home/WhatIsThis';
import WhoShouldApply from '../components/home/WhoShouldApply';
import WhatYouGet from '../components/home/WhatYouGet';
import HowItWorks from '../components/home/HowItWorks';
import FAQ from '../components/home/FAQ';
import ApplicationForm from '../components/home/ApplicationForm';
import { useFormStage } from '../hooks/useFormStage';
import ScrollFab from '../components/ui/ScrollFab';

export default function Home() {
  const { selectedStage, setSelectedStage, applyWithStage } = useFormStage();

  const handleApply = useCallback(
    (stageValue) => {
      applyWithStage(stageValue);
    },
    [applyWithStage]
  );

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontFamily: 'Inter, sans-serif', fontSize: '14px' },
          success: { iconTheme: { primary: '#6B8F3E', secondary: '#fff' } },
        }}
      />
      <Navbar />
      <main>
        <Hero onApply={handleApply} />
        <StatsBar />
        <WhatIsThis />
        <WhoShouldApply onApply={handleApply} />
        <WhatYouGet />
        <HowItWorks />
        <FAQ />
        <ApplicationForm
          selectedStage={selectedStage}
          onStageChange={setSelectedStage}
        />
      </main>
      <Footer />
      <ScrollFab />
    </>
  );
}
