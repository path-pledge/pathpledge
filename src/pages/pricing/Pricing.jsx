import React from 'react'
import PricingPage from '../../components/PricingPage'
import PremiumOfferSection from '../../components/PremiumOfferSection'
import InformationSection from '../../components/InformationSection'
import PlanSection from '../../components/PlanSection'
import InquirySection from '../../components/InquirySection'

const Pricing = () => {
  return (
  <div>
    <div className="mt-16" >
      <PricingPage />
    </div>
    <PlanSection />
    <PremiumOfferSection />
    <InformationSection />
     <InquirySection />
   </div>
  )
}

export default Pricing
