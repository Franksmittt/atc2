// src/app/services/page.tsx
import { Phone, MapPin, Zap, ShieldCheck, Clock, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "Mobile Battery Replacement Service in Alberton | Alberton Battery Mart",
  description: "Fast mobile battery replacement and fitment in Alberton, New Redruth, & Meyersdal. We come to you. Free alternator testing with every callout.",
};

// --- FINAL VERIFIED CONTACT DETAILS & HOURS ---
const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";
const WHATSAPP_NUMBER_LINK = "27823046926";
const WEEKDAY_HOURS = "08:00 AM – 5:00 PM"; 
const SATURDAY_HOURS = "08:00 AM – 12:00 PM";

export default function ServicesPage() {
  return (
    <div className="container py-16 space-y-16">
      
      {/* SECTION 1: HERO & PRIMARY CTA (H1 Focus) */}
      <div className="text-center space-y-4 border-b border-border pb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
          Mobile Battery <span className="text-battery">Replacement</span> in Alberton
        </h1>
        {/* --- SYNTAX FIX WAS HERE --- */}
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          We are the local, certified experts providing complete battery solutions: Fitment, Diagnostics, and Convenient Mobile Service for all vehicle types.
        </p>
        {/* --- It was </pre>, now it's </p> --- */}
        <Button asChild size="xl" variant="battery" className="mt-6 shadow-lg">
          <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center space-x-3 mx-auto">
            <Phone className="h-6 w-6" />
            <span>Call Our Mobile Service Now: {EMERGENCY_PHONE_DISPLAY}</span> 
          </a>
        </Button>
      </div>

      {/* SECTION 2: MOBILE SERVICE LOGISTICS (Logistical USP) */}
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <Zap className="h-12 w-12 text-battery" />
          <h2 className="text-4xl font-bold text-foreground">
            Fast Mobile Battery Callout & Fitment
          </h2>
          <p className="text-lg text-muted-foreground">
            Our specialized callout service ensures minimal vehicle downtime. We bring the exact battery your vehicle requires, perform the swap, and get you back on the road—wherever you are in the Alberton area.
          </p>
          
          {/* FINAL CORRECTED HOURS LAYOUT */}
          <div className="space-y-2 pt-2 text-lg text-foreground">
              <h3 className="font-bold text-battery">Trading Hours & Availability</h3>
              <p className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                   <span>Mon – Fri: {WEEKDAY_HOURS}</span>
              </p>
              <p className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <span>Saturday: {SATURDAY_HOURS}</span>
              </p>
          </div>

          <div className="flex items-center space-x-3 text-lg font-semibold text-foreground">
            <MapPin className="h-5 w-5 text-battery" />
            <p>Focused Callout Zones: New Redruth, Meyersdal, Alberton Central.</p>
          </div>
          <Button asChild variant="secondary" className="mt-4 bg-green-600 hover:bg-green-700 text-white">
             <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer">
              WhatsApp Us for Quick Service Booking
            </a>
          </Button>
        </div>
        
        {/* Mobile Service Card Grid */}
        <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
              <h3 className="text-xl font-bold text-battery">On-Site Convenience</h3>
              <p className="text-sm text-muted-foreground mt-1">We eliminate towing fees and the inconvenience of waiting at a workshop. The full service is performed at your location.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
              <h3 className="text-xl font-bold text-battery">Convenient Service Window</h3>
              <p className="text-sm text-muted-foreground mt-1">We offer our callout service during our standard business hours for your convenience.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
              <h3 className="text-xl font-bold text-battery">Payment Simplicity</h3>
              <p className="text-sm text-muted-foreground mt-1">Accepting all major credit/debit cards on-site via mobile payment terminals.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md">
               <h3 className="text-xl font-bold text-battery">Multi-Brand Authority</h3>
              <p className="text-sm text-muted-foreground mt-1">We offer the full spectrum of products, from OEM Raylite alternatives to specialized LiFePO₄ solar solutions.</p>
            </div>
        </div>
      </div>

      <Separator className="bg-border" />

      {/* SECTION 3: DIAGNOSTICS & WARRANTY (Authority) */}
      <div className="grid lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-7 space-y-6">
          <ShieldCheck className="h-12 w-12 text-battery" />
          <h2 className="text-4xl font-bold text-foreground">
            Advanced Diagnostics & Guaranteed Warranty
          </h2>
          <p className="text-lg text-muted-foreground">
            A battery swap is only half the job. Our process includes comprehensive support to ensure the problem is solved completely, not temporarily.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Comprehensive Starting System Checks</h3>
            <ul className="space-y-2 text-lg text-foreground bg-card p-4 rounded-lg border border-border">
              <li className="flex items-start space-x-3">
                <Gauge className="h-5 w-5 text-battery mt-1 flex-shrink-0" />
                <span>Alternator Testing: This critical post-replacement alternator check is included to prevent underlying charging issues.</span>
              </li>
              <li className="flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-battery mt-1 flex-shrink-0" />
                <span>24 to 36-Month Warranty: Displayed prominently on every product. Professional fitment is required for manufacturer warranty adherence.</span>
              </li>
              <li className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-battery mt-1 flex-shrink-0" />
                <span>Battery Monitoring System (BMS) Recalibration: Essential for modern vehicles to ensure the new battery communicates correctly.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Image/Visual Placeholder */}
        <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full h-80 bg-secondary/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <p className="text-muted-foreground">Placeholder: Image of Technician Running Diagnostics</p>
            </div>
        </div>
      </div>
      
      {/* Final Conversion Funnel */}
      <div className="w-full text-center pt-10">
        <h3 className="text-3xl font-extrabold text-foreground mb-4">
          Don't Guess Your Battery Needs. Get Expert Help.
        </h3>
        <Button asChild size="xl" variant="battery" className="mt-4 shadow-xl">
          <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center justify-center space-x-3 mx-auto">
            <Phone className="h-6 w-6" />
            <span>Call Now: {EMERGENCY_PHONE_DISPLAY}</span>
          </a>
        </Button>
      </div>
    </div>
  );
}