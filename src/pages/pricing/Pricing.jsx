import React from 'react'
import PricingPage from '../../components/PricingPage'
import PremiumOfferSection from '../../components/PremiumOfferSection'
import InformationSection from '../../components/InformationSection'
import PlanSection from '../../components/PlanSection'
import ContactSection from '../../components/ContactSection'

const Pricing = () => {
  return (
  <div>
    <div className="mt-16" >
      <PricingPage />
    </div>
    <PlanSection />
    <PremiumOfferSection />
    <InformationSection />
    <ContactSection />
    
   </div>
  )
}

export default Pricing
