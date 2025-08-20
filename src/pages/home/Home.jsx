import React from 'react'

import HeroSlider from '../../components/HeroSlider'; 
import Features from '../../components/Features';
import DataScienceSection from '../../components/DataScienceSection';
import WhyChooseUs from '../../components/WhyChooseUs';
import { FAQSection } from '../../components/FAQSection';
import { OffshoreStaffSection } from '../../components/OffshoreStaffSection';
import { BrochureDownloadSection } from '../../components/BrochureDownloadSection';
import Leader from '../../components/Leader';
import PhasesInPhone from '../../components/PhasesInPhone';
import { TestimonialSection } from '../../components/TestimonialSection';

const Home = () => {
  return (
    <div className="mt-25">
      <HeroSlider />
      <Features />
      <PhasesInPhone />
      <DataScienceSection />
      <TestimonialSection />
      <BrochureDownloadSection />
      <WhyChooseUs />
      <OffshoreStaffSection />
      <FAQSection />
    </div>
  )
}

export default Home;
