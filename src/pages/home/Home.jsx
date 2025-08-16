import React from 'react'

import WelcomeHero from '../../components/WelcomeHero';
import Features from '../../components/Features';
import DataScienceSection from '../../components/DataScienceSection';
// import WelcomeSection from '../../components/WelcomeSection';
// import StatsSection from '../../components/StatsSection';
import WhyChooseUs from '../../components/WhyChooseUs';

import { FAQSection } from '../../components/FAQSection';
import { OffshoreStaffSection } from '../../components/OffshoreStaffSection';
import {BrochureDownloadSection} from '../../components/BrochureDownloadSection';
import Leader from '../../components/Leader';
import PhasesInPhone from '../../components/PhasesInPhone';
import {TestimonialSection} from '../../components/TestimonialSection';





const Home = () => {
  return (
    <div>
    <WelcomeHero />
    <Features />
    <PhasesInPhone />
    <DataScienceSection />
    {/* <WelcomeSection /> */}
    <TestimonialSection />
  <BrochureDownloadSection />
    <WhyChooseUs />
    <OffshoreStaffSection />
    <FAQSection />
    
    </div>
  )
}

export default Home;
