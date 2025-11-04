// src/app/products/type/performance/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "AGM & EFB Start/Stop Batteries in Alberton | Alberton Battery Mart",
  description: "Shop performance batteries in Alberton. We are experts in AGM & EFB batteries for Start/Stop vehicles. Free fitment and BMS calibration.",
};

// Filters for: Performance AGM/EFB
const PERFORMANCE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Performance AGM/EFB'
);

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(PERFORMANCE_PRODUCTS);

export default function PerformanceBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Performance</span> & Start/Stop Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                The specialized, high-capacity AGM/EFB solutions required for modern vehicles with Start/Stop systems. Longest warranties available.
            </p>
            <Separator className="pt-4" />
        </div>

        {/* --- MAIN LAYOUT: SIDEBAR + PRODUCT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Filtering Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Performance AGM/EFB"
                    allBrands={brands}
                    allSizes={sizes}
                    // This page will use the default car capacity filters, which is fine
                />
            </div>

            {/* Right Column: Product List */}
            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Performance & Start/Stop Batteries"
                    description={`Displaying ${PERFORMANCE_PRODUCTS.length} specialized EFB and AGM products ready for fitment.`}
                    products={PERFORMANCE_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}