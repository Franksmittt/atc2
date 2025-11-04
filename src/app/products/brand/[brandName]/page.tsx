// src/app/products/brand/[brandName]/page.tsx
import ProductListPage from "@/components/layout/ProductListPage";
import { ALL_PRODUCTS, ProductCardData } from "@/data/products";
import { notFound } from 'next/navigation';
import CategoryFilterSidebar from "@/components/layout/CategoryFilterSidebar";
import { Separator } from "@/components/ui/separator";
import { Metadata, ResolvingMetadata } from 'next';

// This function tells Next.js which brands to pre-build
export function generateStaticParams() {
  const brands = Array.from(new Set(ALL_PRODUCTS.map(p => p.brandName)));
  return brands.map(brand => ({
    brandName: brand.toLowerCase(),
  }));
}

// Props interface for the dynamic page
interface BrandPageProps {
  params: {
    brandName: string; // This comes from the folder name [brandName]
  };
}

// --- NEW: Dynamic Metadata for SEO ---
export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const brandName = params.brandName.charAt(0).toUpperCase() + params.brandName.slice(1);
  return {
    title: `${brandName} Batteries in Alberton | Alberton Battery Mart`,
    description: `Shop our full range of ${brandName} batteries in Alberton. We stock car, truck, and motorcycle batteries, all with free fitment and testing.`,
  };
}

// Helper to filter products and capitalize the brand name
const getBrandData = (brandSlug: string) => {
    const products = ALL_PRODUCTS.filter(p => 
        p.brandName.toLowerCase() === brandSlug.toLowerCase()
    );
    const brandName = products.length > 0 ? products[0].brandName : brandSlug;
    
    // --- NEW: Get filters based on *these* products ---
    const brands = Array.from(new Set(products.map(p => p.brandName)));
    const sizes = Array.from(new Set(products.map(p => p.sku)));
    
    return { products, brandName, brands, sizes };
};

// --- NEW: Universal Capacity Filters (can be customized) ---
const allCapacityFilters = [
    { label: "Small (Under 20 Ah)", min: 0, max: 20 },
    { label: "Medium (20-75 Ah)", min: 20, max: 75 },
    { label: "Large (75-100 Ah)", min: 75, max: 100 },
    { label: "Heavy Duty (100 Ah+)", min: 100, max: 9999 },
];

// The new page component
export default function BrandPage({ params }: BrandPageProps) {
  const { brandName: brandSlug } = params;
  const { products, brandName, brands, sizes } = getBrandData(brandSlug);

  if (products.length === 0) {
    notFound(); // Show 404 if the brand doesn't exist
  }

  return (
    <div className="container py-16 space-y-12">
        
        {/* --- NEW: Page Header --- */}
        <div className="text-center space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground">
                <span className="text-battery">{brandName}</span> Batteries
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Browse our complete catalog of {brandName} batteries. All products include free fitment and testing.
            </p>
            <Separator className="pt-4" />
        </div>

        {/* --- NEW: Sidebar + Product Grid Layout --- */}
        <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Filtering Sidebar */}
            <div className="lg:w-64 lg:flex-shrink-0">
                <CategoryFilterSidebar
                    currentCategory={`${brandName} Batteries`}
                    allBrands={brands} // Will only show this brand
                    allSizes={sizes}
                    capacityFilters={allCapacityFilters}
                />
            </div>

            {/* Right Column: Product List */}
            <div className="lg:flex-grow">
                <ProductListPage
                    title={`${brandName} Catalog`}
                    description={`Displaying all ${products.length} ${brandName} products in stock.`}
                    products={products}
                />
            </div>

        </div>
    </div>
  );
}