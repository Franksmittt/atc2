// src/app/products/[id]/page.tsx
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ShieldCheck, Zap, Gauge, MapPin, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// --- CONTACT DETAILS ---
const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";
const WHATSAPP_NUMBER_LINK = "27823046926";

// This finds the product based on the URL's [id]
const getProductById = (id: string): ProductCardData | undefined => {
  return ALL_PRODUCTS.find(p => p.id.toString() === id);
};

// --- DOMINATION TRICK #1: DYNAMIC SEO METADATA ---
// This function creates a unique, perfect SEO title and description for EVERY product.
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return { title: "Product Not Found" };
  }

  const title = `Buy ${product.name} (${product.sku}) in Alberton | Alberton Battery Mart`;
  const description = `Get the ${product.name} ${product.seoSubtitle} at Alberton Battery Mart. ${product.popularFits ? `Fits: ${product.popularFits}.` : ''} Free fitment, testing, and 24-month warranty. Call 010 109 6211.`;

  return {
    title,
    description,
  };
}

// --- DOMINATION TRICK #2: STATIC PAGE GENERATION ---
// This tells Next.js to pre-build all 85 product pages as static, fast-loading HTML.
export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    id: product.id.toString(),
  }));
}

// --- THE PAGE COMPONENT ---
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound(); // If no product, show 404
  }

  // Create Specs List
  const specs = [
    { label: "SKU / Code", value: product.sku },
    { label: "Category", value: product.category },
    { label: "Brand", value: product.brandName },
    { label: "Capacity (Ah)", value: `${product.ahCapacity}Ah` },
    { label: "CCA", value: product.cca === 0 ? "N/A" : product.cca },
    { label: "Warranty", value: `${product.warrantyMonths} Months` },
  ];

  return (
    <div className="container py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* --- 1. PRODUCT IMAGE --- */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
          <div className="relative w-full h-80 bg-secondary/20 rounded">
            <Image 
              src={product.imagePath}
              // --- DOMINATION TRICK #3: PERFECT ALT TAG ---
              alt={`${product.name} - ${product.seoSubtitle}`} 
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="p-4"
              priority // Prioritize loading the main product image
            />
          </div>
        </div>

        {/* --- 2. PRODUCT DETAILS, SEO, & CONVERSION --- */}
        <div className="space-y-6">
          
          {/* --- H1 AND SEO SUBTITLE (FROM BLUEPRINT) --- */}
          <div>
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight">{product.name}</h1>
            <p className="text-2xl font-medium text-battery mt-2">{product.seoSubtitle}</p>
          </div>

          <Separator />

          {/* --- PRICE & PRICE WAR (FROM BLUEPRINT) --- */}
          <div>
            <span className="text-5xl font-extrabold text-foreground">{product.priceAnchor}</span>
            {product.isScrapPrice && (
              <span className="text-xl text-muted-foreground font-medium ml-2">(With Trade-In)</span>
            )}
            <p className="text-lg text-battery font-semibold mt-2">
              Price Includes FREE Fitment & Alternator Test
            </p>
          </div>

          {/* --- URGENT CTAs --- */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="xl" variant="battery" className="shadow-lg w-full">
              <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center space-x-2">
                <Phone className="h-6 w-6" />
                <span>Call Now: {EMERGENCY_PHONE_DISPLAY}</span>
              </a>
            </Button>
            <Button asChild size="xl" variant="secondary" className="bg-green-600 hover:bg-green-700 text-white shadow-lg w-full">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_LINK}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6" />
                <span>WhatsApp for Stock</span>
              </a>
            </Button>
          </div>

          <Separator />

          {/* --- POPULAR FITS (FROM BLUEPRINT) --- */}
          {product.popularFits && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground flex items-center"><Car className="h-5 w-5 mr-2 text-battery"/>Popular Vehicle Fits</h3>
              <p className="text-lg text-muted-foreground">{product.popularFits}</p>
            </div>
          )}

          {/* --- FULL SPECS TABLE --- */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">Specifications</h3>
            <div className="grid grid-cols-2 gap-4 bg-card p-4 rounded-lg border border-border">
              {specs.map(spec => (
                <div key={spec.label}>
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  <p className="text-lg font-semibold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}