// src/app/products/type/motorcycle/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "Motorcycle & Powersport Batteries in Alberton | Alberton Battery Mart",
  description: "Shop motorcycle, scooter, and ATV batteries in Alberton. We stock high-performance AGM batteries from Enertec. Call for a quote.",
};

const MOTORCYCLE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Motorcycle'
);

const motorcycleCapacityFilters = [
    { label: "Small (Under 10 Ah)", min: 0, max: 10 },
    { label: "Medium (10-20 Ah)", min: 10, max: 20 },
    { label: "Large (20 Ah+)", min: 20, max: 9999 },
];

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(MOTORCYCLE_PRODUCTS);

export default function MotorcycleBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Motorcycle</span> & Powersport Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Dedicated AGM batteries for motorcycles, scooters, ATVs, and all powersport vehicles.
            </p>
            <Separator className="pt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Motorcycle / Powersport"
                    allBrands={brands}
                    allSizes={sizes}
                    capacityFilters={motorcycleCapacityFilters}
                />
            </div>

            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Motorcycle & Powersport Batteries"
                    description={`Displaying ${MOTORCYCLE_PRODUCTS.length} specialized products.`}
                    products={MOTORCYCLE_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}