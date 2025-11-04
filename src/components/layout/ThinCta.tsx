// src/components/layout/ThinCta.tsx
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";

// --- CONTACT DETAILS ---
const PRIMARY_PHONE = "010 109 6211";
const WHATSAPP_NUMBER_LINK = "27823046926"; 

const ThinCta = () => {
  return (
    <section className="w-full bg-battery py-8"> {/* Full Bright Red background for maximum contrast */}
      
      <div className="container px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 text-white space-y-4 md:space-y-0">
        
        {/* --- SEO FIX: Added "in Alberton" --- */}
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center md:text-left">
          Emergency Battery Help in Alberton? Call Us Now.
        </h3>
        
         {/* Button Wrapper: Stacks on mobile, moves side-by-side on desktop */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full md:w-auto max-w-sm pt-4 md:pt-0">
          
          {/* Call Us Button (Full width on mobile) */}
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full">
            <a href={`tel:${PRIMARY_PHONE.replace(/ /g, '')}`} className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call: {PRIMARY_PHONE}</span> 
            </a>
          </Button>

          {/* WhatsApp Button (Full width on mobile) */}
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 w-full">
             <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
              <MessageSquare className="h-5 w-5" />
              <span>WhatsApp Now</span>
            </a>
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default ThinCta;