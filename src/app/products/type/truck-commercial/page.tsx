// src/app/products/type/truck-commercial/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

// --- NEW: Page-Specific Metadata for SEO ---
export const metadata: Metadata = {
  title: "Truck & Commercial Batteries in Alberton | Alberton Battery Mart",
  description: "Shop heavy-duty truck batteries in Alberton. We stock high-CCA commercial batteries for lorries, buses, and heavy-duty vehicles.",
};

const TRUCK_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Truck & Commercial'
);

const truckCapacityFilters = [
    { label: "Heavy Duty (90-115 Ah)", min: 90, max: 115 },
    { label: "Super Heavy Duty (115Ah+)", min: 115, max: 9999 },
];

const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(TRUCK_PRODUCTS);

export default function TruckBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Truck & Commercial</span> Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Specialized high-CCA commercial batteries for trucks, lorries, buses, and heavy-duty applications.
            </p>
            <Separator className="pt-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Truck & Commercial"
                    allBrands={brands}
                    allSizes={sizes}
                    capacityFilters={truckCapacityFilters}
                />
            </div>

            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Commercial & Truck Batteries"
                    description={`Displaying ${TRUCK_PRODUCTS.length} heavy-duty products.`}
                    products={TRUCK_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}