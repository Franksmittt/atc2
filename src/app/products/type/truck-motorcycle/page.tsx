// src/app/products/type/truck-motorcycle/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";

// Filters for: Truck/Powersport
const TRUCK_MOTORCYCLE_PRODUCTS = ALL_PRODUCTS.filter((p: ProductCardData) => 
  p.category === 'Truck/Powersport'
);

// Helper function to extract unique brands and SKUs/sizes (Necessary for the Sidebar)
const getFilterOptions = (products: ProductCardData[]) => {
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    return { brands, sizes };
};
const { brands, sizes } = getFilterOptions(TRUCK_MOTORCYCLE_PRODUCTS);


export default function TruckMotorcycleBatteriesPage() {
  return (
    <div className="container py-16 space-y-12">
        
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">Commercial</span> & Powersport Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Specialized high-CCA commercial batteries for trucks, lorries, buses, and dedicated motorcycle/ATV batteries.
            </p>
            <Separator className="pt-4" />
        </div>

        {/* --- MAIN LAYOUT: SIDEBAR + PRODUCT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Filtering Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory="Truck & Powersport"
                    allBrands={brands}
                    allSizes={sizes}
                />
            </div>

            {/* Right Column: Product List */}
            <div className="lg:flex-grow">
                <ProductListPage
                    title="All Commercial & Powersport Batteries"
                    description={`Displaying ${TRUCK_MOTORCYCLE_PRODUCTS.length} products ready for heavy-duty and light-sport applications.`}
                    products={TRUCK_MOTORCYCLE_PRODUCTS}
                />
            </div>

        </div>
    </div>
  );
}