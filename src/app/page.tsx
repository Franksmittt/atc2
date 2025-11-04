// src/app/page.tsx
import dynamic from 'next/dynamic';
import HeroSection from "@/components/layout/HeroSection"; // Keep this one static

// Lazy-load all components below the fold
const TrustAuthoritySection = dynamic(() => import('@/components/layout/TrustAuthoritySection'));
const ServiceGrid = dynamic(() => import('@/components/layout/ServiceGrid'));
const ProductSpotlight = dynamic(() => import('@/components/content/ProductSpotlight'));
const StorefrontCTA = dynamic(() => import('@/components/layout/StorefrontCTA'));
const TestimonialSection = dynamic(() => import('@/components/layout/TestimonialSection'));
const FaqSection = dynamic(() => import('@/components/layout/FaqSection'));
const ContactForm = dynamic(() => import('@/components/content/ContactForm'));
const ThinCta = dynamic(() => import('@/components/layout/ThinCta'));

export default function Home() {
  return (
    <main>
      
      {/* 1. HERO: Grabs immediate attention & captures urgent leads. */}
      <HeroSection />
      
      {/* 2. TRUST & AUTHORITY: Instantly builds trust and authority. Answers "Why you?" */}
      <TrustAuthoritySection />

      {/* 3. CORE SERVICES: Shows what you do. (Car, Truck, Solar, etc.) */}
      <ServiceGrid /> 
      
      {/* 4. PRODUCT SPOTLIGHT: Shows what you sell. (FIXED to 3 products) */}
      <ProductSpotlight count={3} /> 
      
      {/* 5. LOCAL SEO & PHYSICAL PROOF: Cements your local presence. "We are a real store." */}
      <StorefrontCTA />
      
      {/* 6. SOCIAL PROOF: Builds trust with user reviews. */}
      <TestimonialSection /> 

      {/* 7. EXPERTISE & FAQ: Overcomes customer objections and builds expert status. */}
      <FaqSection />

      {/* 8. DIRECT LEAD CAPTURE: A full contact form for non-urgent/bulk inquiries. */}
      <section className="container py-16 max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
            <h2 className="text-4xl font-extrabold text-foreground">
              Have a Specific Inquiry?
            </h2>
            <p className="text-xl text-muted-foreground">
              For bulk orders, solar quotes, or non-urgent questions, send us a message.
            </p>
        </div>
        <ContactForm />
      </section>

      {/* 9. FINAL CTA: The final, unmissable call to action. */}
      <ThinCta />
      
    </main>
  );
}