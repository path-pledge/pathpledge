import React, { useRef } from 'react';
import TradingWithDataScience from "../../components/TradingWithDataScience";

import PhasesInPhone from '../../components/PhasesInPhone';
import WhoIsThisCourseForQA from '../../components/WhoIsThisCourseForQA';
import DifferentProgramSection from '../../components/DifferentProgramSection';
import InquirySection from '../../components/InquirySection';
import PremiumOfferSection from '../../components/PremiumOfferSection';
import { TestimonialSection } from '../../components/TestimonialSection';
import ContactSection from '../../components/ContactSection';

const Programs = () => {
  const contactRef = useRef(null); // 🔧 Step 1: Create ref

  return (
    <div>
      <TradingWithDataScience />
      <PhasesInPhone />
      <WhoIsThisCourseForQA />
      <DifferentProgramSection />
      <PremiumOfferSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default Programs;
