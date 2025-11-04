// src/components/content/ProductCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Gauge, Shield, Tag, Phone, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import { ProductCardData } from "@/data/products";

interface ProductCardProps {
  product: ProductCardData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isHighPerformance = product.isAGM || product.warrantyMonths >= 36;
  const EMERGENCY_PHONE = "0101096211";

  // Specs array for easy display
  const specs = [
    { icon: Zap, label: "CCA", value: `${product.cca}`, unit: 'CCA' },
    { icon: Gauge, label: "Capacity", value: `${product.ahCapacity}`, unit: 'Ah' },
    { icon: Shield, label: "Warranty", value: `${product.warrantyMonths}`, unit: 'Months' },
    { icon: Car, label: "Popular Fits", value: product.popularFits || 'N/A', unit: '' }
  ];

  return (
    <Card className="flex flex-col overflow-hidden bg-card border-border shadow-lg hover:shadow-battery/30 transition-shadow h-full">
      
      {/* --- WRAPPED HEADER AND CONTENT IN A LINK --- */}
      <Link href={`/products/${product.id}`} className="flex flex-col flex-grow">
        <CardHeader className="p-0 relative">
          <div className="w-full h-48 bg-secondary/20 flex items-center justify-center relative">
            <Image 
              src={product.imagePath}
              alt={`${product.name} - ${product.seoSubtitle}`} 
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="p-4"
            />
          </div>
          
          {isHighPerformance && (
            <div className="absolute top-3 left-3 bg-battery text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
               PREMIUM {product.warrantyMonths}M WARRANTY
            </div>
          )}
        </CardHeader>

        <CardContent className="p-6 flex-grow space-y-4">
          {/* --- SEO & TITLE FIX --- */}
          <div className="min-h-[4.5rem]"> {/* Increased min-height for subtitle */}
            <CardTitle className="text-xl font-extrabold text-foreground tracking-tight">
              {product.name}
            </CardTitle>
            {/* --- NEW: Local SEO Subtitle --- */}
            <p className="text-sm font-medium text-battery pt-1">
              {product.seoSubtitle}
            </p>
          </div>
          {/* --- END SEO & TITLE FIX --- */}
          
          {/* Technical Specs Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-2">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-center space-x-2">
                {/* --- FIX: Don't show CCA icon if value is 0 (for bikes) --- */}
                {spec.label === "CCA" && product.cca === 0 ? (
                  <Zap className="h-4 w-4 text-muted flex-shrink-0" />
                ) : (
                  <spec.icon className="h-4 w-4 text-battery flex-shrink-0" />
                )}
                 <div className="text-sm">
                  <p className="font-bold text-foreground leading-none truncate" title={spec.value}>
                    {/* --- FIX: Show N/A for 0 CCA --- */}
                    {spec.label === "CCA" && product.cca === 0 ? 'N/A' : `${spec.value}${spec.unit}`}
                  </p> 
                  <p className="text-xs text-muted-foreground">{spec.label}</p>
                </div>
              </div>
             ))}
          </div>
        </CardContent>
      </Link>
      {/* --- END OF LINK WRAPPER --- */}
      
      {/* --- FOOTER IS *OUTSIDE* THE LINK --- */}
      <CardFooter className="p-4 border-t border-border flex flex-col items-start space-y-3">
        {/* --- Price --- */}
        <div className="w-full flex justify-between items-baseline">
          <span className="text-2xl font-extrabold text-foreground">
            {product.priceAnchor}
          </span>
          {product.isScrapPrice && (
            <span className="text-xs text-muted-foreground font-medium">
              (With Trade-In)
            </span>
          )}
        </div>
        
        <p className="text-xs text-muted-foreground -mt-2">
          Price includes FREE Fitment & Alternator Test
        </p>

        <Button asChild variant="battery" className="w-full">
          <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Call for Quote & Fitment</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;