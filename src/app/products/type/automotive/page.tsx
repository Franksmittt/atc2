// src/app/products/type/automotive/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"; 
import { Phone } from "lucide-react";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "Car Batteries in Alberton | Standard & AGM | Alberton Battery Mart",
  description: "Shop car batteries in Alberton. We stock Willard, Exide, & Enertec, including AGM/EFB batteries for Start/Stop vehicles. Free fitment & testing.",
};

const EMERGENCY_PHONE_DISPLAY = "010 109 6211";
const EMERGENCY_PHONE_LINK = "0101096211";

// Filters for: Standard Automotive 
const AUTOMOTIVE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Standard Automotive' || p.category === 'Performance AGM/EFB'
);

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(AUTOMOTIVE_PRODUCTS);

export default function StandardAutomotiveBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Car Battery</span> Catalog: Standard & Performance
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                All certified maintenance-free batteries for your vehicle, including specialized EFB/AGM required for Start/Stop systems.
            </p>
            <Separator className="pt-4" />
        </div>
        
        {/* Primary CTA Button on this page (Fixed number display) */}
        <div className="text-center">
            <Button asChild size="xl" variant="battery" className="shadow-lg">
                <a href={`tel:${EMERGENCY_PHONE_LINK}`} className="flex items-center space-x-3 mx-auto">
                    <Phone className="h-6 w-6" />
                    <span>Call Our Mobile Service Now: {EMERGENCY_PHONE_DISPLAY}</span>
                </a>
            </Button>
        </div>


        {/* --- MAIN LAYOUT: SIDEBAR + PRODUCT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Filtering Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Car Batteries"
                    allBrands={brands}
                    allSizes={sizes}
                    // Note: This page uses the default capacity filters, which is correct
                />
            </div>

            {/* Right Column: Product List */}
            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Automotive Batteries"
                    description={`Displaying ${AUTOMOTIVE_PRODUCTS.length} products ready for fitment.`}
                    products={AUTOMOTIVE_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}