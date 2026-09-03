// src/app/about/page.tsx
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import MeetTheStaff from "@/components/layout/MeetTheStaff";

export const metadata: Metadata = {
  title: "About Alberton Battery Mart | Meet the Staff",
  description:
    "Meet Shane and Alex, the Alberton workshop team. Local specialists offering honest advice, quality fitment, and a safety-first approach for Alberton drivers.",
};

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-12 max-w-5xl">
      
      {/* --- NEW: SEO-Optimized H1 & Subtitle --- */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-foreground">
          About <span className="text-battery">Alberton Battery Mart</span>
        </h1>
        <p className="text-2xl text-muted-foreground font-medium">
          Alberton's Independent, Multi-Brand Battery Specialists.
        </p>
      </div>
      
      <p className="text-xl text-foreground text-center max-w-3xl mx-auto">
        Founded on the principle of providing <strong>honest advice and reliable power</strong>, Alberton Battery Mart is not just another parts store. We are a dedicated, local business focused on solving your battery problems with the right solution, not just the most expensive one.
      </p>

      {/* --- NEW: Rewritten Content Blocks (SEO & Authority) --- */}
      <div className="grid md:grid-cols-2 gap-8 pt-8">
        
        {/* Our Mission: The "Local Specialist" Pillar */}
        <div className="space-y-4 bg-card border border-border p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <MapPin className="h-8 w-8 text-battery" />
            <h2 className="text-3xl font-bold text-foreground">Our Local Mission</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Our mission is simple: to be the <strong>#1 trusted battery expert in Alberton</strong>. We win by providing value that online-only stores and generic fitment chains can&apos;t match. We are physically here at <strong>28 St Columb Rd</strong>, ready to provide free on-site diagnostics, alternator testing, and professional fitment while you wait.
          </p>
        </div>

        {/* Our Advantage: The "Multi-Brand" Pillar */}
        <div className="space-y-4 bg-card border border-border p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-battery" />
            <h2 className="text-3xl font-bold text-foreground">Our Expert Advantage</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            We are not locked into one brand. As official stockists of <strong>Willard, Exide, and Enertec</strong>, our loyalty is to you, the customer. We provide unbiased, expert advice to ensure you get the <em>correct</em> battery for your specific vehicle (Car, Truck, or Motorcycle) and budget, all backed by a full manufacturer warranty.
          </p>
        </div>
      </div>

      <MeetTheStaff />

      <div className="pt-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Ready to Get the Right Battery, First Time?</h3>
        <Button asChild size="xl" variant="battery" className="shadow-lg">
          <Link href="/products">View Our Full Product Range</Link>
        </Button>
      </div>
    </div>
  );
}