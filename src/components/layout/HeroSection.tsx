// src/components/layout/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, MapPin, Clock, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

// --- FINAL VERIFIED CONTACT DETAILS & FORMATTING ---
const EMERGENCY_PHONE = "010 109 6211"; // Formatted for display
const WHATSAPP_NUMBER_LINK = "27823046926";
const WEEKDAY_HOURS = "08:00 AM – 5:00 PM";
const SATURDAY_HOURS = "08:00 AM – 12:00 PM";

const HeroSection = () => {
  // H1 Headline
  const coreHeadline = (
    <>
      <span className="text-battery">Mobile</span> Battery Replacement:
      <span className="text-battery"> Guaranteed Testing</span> &
      <span className="text-battery"> Fitment</span> On-Site.
    </>
  );

  // --- SEO FIX: Injected local keywords directly into the sub-headline ---
  const calloutWording = "Don't get stuck. Our dedicated mobile team brings the right battery to you fast in Alberton, New Redruth, and Meyersdal. Get an immediate assessment and quote now.";

  return (
    <section className="relative w-full overflow-hidden min-h-screen bg-background flex items-center justify-center">
      <div className="container px-4 md:px-6 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline and Callout CTAs */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">

            {/* Primary Urgent Headline: White and Bright Red Mix */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              {coreHeadline}
            </h1>

            {/* Secondary Assurance & Callout CTA */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {calloutWording}
            </p>

            {/* Primary CTAs: Immediate Contact */}
            <div className="flex flex-col items-center md:flex-row md:justify-start space-y-4 md:space-y-0 md:space-x-4 pt-2">

              {/* Call Us Button */}
              <Button 
                asChild 
                size="xl" 
                variant="battery" 
                className="shadow-lg w-full max-w-xs" 
              >
                {/* NOTE: The tel: link uses the number without spaces for dialer compatibility */}
                <a href={`tel:${EMERGENCY_PHONE.replace(/ /g, '')}`} className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-lg font-bold">Call Us Now</span>
                 </a>
              </Button>

              {/* WhatsApp Button */}
              <Button 
                asChild 
                variant="secondary" 
                size="xl" 
                className="bg-green-600 hover:bg-green-700 text-white w-full max-w-xs" 
              >
                <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span className="text-lg font-bold">WhatsApp Us</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Key Trust & Service Card */}
          <div className="lg:col-span-5 flex justify-center">
             <Card className="bg-card border-battery shadow-2xl shadow-battery/20 w-full max-w-sm">
              <CardContent className="p-6 space-y-6">

                {/* Urgent Service Card Title */}
                <div className="flex items-center space-x-3 text-2xl font-bold text-battery">
                  <Clock className="h-6 w-6" />
                   <span>The Alberton Service Guarantee</span>
                </div>

                {/* Trust Factor List */}
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start space-x-3">
                     <Zap className="h-5 w-5 text-battery mt-1" />
                    <span className="text-lg">
                      Convenient Mobile Service available during trading hours.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-battery mt-1" />
                    <span className="text-lg">
                       Fast local service guaranteed in high-value suburbs: New Redruth, Meyersdal, & Alberton Central.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-battery mt-1" />
                    <span className="text-lg">
                       Professional Diagnostics: Alternator check done on-site after fitment.
                    </span>
                  </li>
                </ul>

                {/* Secondary CTA: Quote Request for Solar/B2B */}
                <Button asChild variant="outline" className="w-full mt-4 border-2 border-primary hover:bg-secondary">
                  <Link href="/quote">Request Solar/Inverter Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background element for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
    </section>
  );
};

export default HeroSection;