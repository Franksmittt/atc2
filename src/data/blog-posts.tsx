// src/data/blog-posts.tsx
import { Metadata } from 'next';
import React from 'react'; // <-- THIS IS THE FIX

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'Local Problem' | 'Technical Guide';
  // This is where you will write the article content
  content: React.ReactNode; 
}

// --- THIS IS YOUR NEW BLOG POST LIST ---
export const ALL_POSTS: BlogPost[] = [
  {
    slug: 'stuck-with-a-dead-car-battery-in-alberton',
    title: 'Stuck with a Dead Car Battery in Alberton? A 5-Step Guide',
    description: 'Battery dead? Don\'t panic. Here is a 5-step guide for fast help in Alberton, New Redruth, and Meyersdal. We offer mobile battery replacement.',
    date: '2025-11-04',
    category: 'Local Problem',
    content: (
      <>
        <p className="text-xl">
          It’s the worst feeling. You turn the key, and all you get is a "click, click, click." You're stranded in Alberton with a dead battery. Don't panic. Here is your 5-step guide to getting back on the road fast.
        </p>
        
        <h2 className="text-3xl font-bold">1. Stay Safe & Check Your Terminals</h2>
        <p>
          First, ensure you are in a safe location. If you're in a busy area like Voortrekker Road, turn on your hazard lights. Sometimes, the problem is just corrosion. Open your bonnet and look at the battery terminals. If you see a white, crusty buildup, that could be the problem.
        </p>
        
        <h2 className="text-3xl font-bold">2. Don't Just Jumpstart (The Common Mistake)</h2>
        <p>
          Getting a jumpstart seems like the quick fix, but it's often a temporary one. A jumpstart will get your engine running, but it won't fix a battery that can no longer hold a charge. If your battery is more than 3 years old, a jumpstart is just delaying the inevitable.
        </p>

        <blockquote className="border-l-4 border-battery bg-card p-4 italic text-foreground">
          "A jumpstart doesn't fix a bad battery. It just gives you enough power to get to the side of the road. You need to know if the battery is dead or if your alternator is faulty."
        </blockquote>

        <h2 className="text-3xl font-bold">3. Call for a Mobile Diagnostic Test</h2>
        <p>
          Instead of guessing, get an expert to come to you. Our mobile teams in Alberton are equipped with digital diagnostic tools. We will come to your location (at home in Meyersdal, at work in New Redruth, or stuck in Alrode) and test your entire starting system for FREE.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Battery Health Test:</strong> We check if your battery can still hold a charge.</li>
          <li><strong>Alternator Test:</strong> We check if your alternator is correctly recharging the battery. This is critical—you don't want to replace a good battery when the alternator was the real problem.</li>
        </ul>
        
        <h2 className="text-3xl font-bold">4. Get a Professional On-Site Fitment</h2>
        <p>
          If the test confirms your battery is dead, we carry all common sizes (like the 619, 652, and 646) in our van. We will perform a professional fitment on the spot.
        </p>
        
        <h2 className="text-3xl font-bold">5. The "No-Brainer" Solution for Alberton</h2>
        <p>
          Don't waste time with call-out fees or towing. Alberton Battery Mart offers a full-service mobile battery replacement. We come to you, test your system for free, and install a brand-new, warrantied battery.
        </p>
      </>
    ),
  },
  {
    slug: 'agm-vs-efb-batteries-alberton-guide',
    title: 'AGM vs. EFB Batteries: An Expert Guide for Alberton Motorists',
    description: 'Do you need an AGM or EFB battery for your Start/Stop car? Alberton Battery Mart explains the difference and why it matters for your warranty.',
    date: '2025-11-03',
    category: 'Technical Guide',
    content: (
      <>
        <p className="text-xl">
          If you drive a modern car with a Start/Stop system (your engine cuts off at a red light), you cannot use a normal car battery. You need a specialized **EFB (Enhanced Flooded Battery)** or **AGM (Absorbent Glass Mat)** battery.
        </p>
        <p>
          Using the wrong battery will not only fail in a few months, but it will also **void your vehicle's warranty**. As Alberton's battery experts, here is what you need to know.
        </p>
        
        <h2 className="text-3xl font-bold">What is an EFB (Enhanced Flooded Battery)?</h2>
        <p>
          Think of an EFB as a heavy-duty "wet" battery. It's the entry-level solution for vehicles with a *basic* Start/Stop system. It's designed to handle more charging cycles than a standard battery.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Common In:</strong> VW Polo Vivo, Toyota Vitz, Suzuki Swift.</li>
          <li><strong>Lifespan:</strong> Good (Around 2-3x a standard battery).</li>
          <li><strong>Best For:</strong> Basic Start/Stop systems without regenerative braking.</li>
        </ul>

        <h2 className="text-3xl font-bold">What is an AGM (Absorbent Glass Mat) Battery?</h2>
        <p>
          This is the highest-performance battery you can buy. The acid is absorbed in fiberglass mats, making it spill-proof and extremely vibration-resistant. It is **mandatory** for high-end vehicles.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Common In:</strong> BMW, Mercedes-Benz, Audi, modern Ford Rangers, vehicles with regenerative braking.</li>
          <li><strong>Lifespan:</strong> Excellent (Around 3-5x a standard battery).</li>
          <li><strong>Best For:</strong> Advanced Start/Stop, high electrical loads (heated seats, big screens), and regenerative braking.</li>
        </ul>

        <blockquote className="border-l-4 border-battery bg-card p-4 italic text-foreground">
          "The most common mistake we see is a customer with a BMW replacing their R4,500 AGM battery with a R1,500 standard battery. That new battery will be destroyed by the car's charging system in less than six months."
        </blockquote>
        
        <h2 className="text-3xl font-bold">The Verdict for Alberton Drivers</h2>
        <p>
          You cannot "upgrade" from an EFB to an AGM (or downgrade) without professional advice. The car's Battery Monitoring System (BMS) is calibrated for a specific technology.
        </p>
        <p>
          At Alberton Battery Mart, we don't just sell you a box. We test your vehicle's requirements and ensure you get the **correct, warrantied battery** (like the Willard 658 AGM or Exide 646AGM) and calibrate your car's BMS to accept it.
        </p>
      </>
    ),
  },
  // --- ADD YOUR NEXT 18+ BLOG POSTS HERE ---
];