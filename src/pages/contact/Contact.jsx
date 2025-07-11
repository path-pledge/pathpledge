import React from 'react'
import ContactSection  from '../../components/ContactSection'
import ContactEnhancementsSection from '../../components/ContactEnhancementsSection';
import ContactHero from '../../components/ContactHero';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <ContactEnhancementsSection />
    </div>
  )
}

export default Contact;
