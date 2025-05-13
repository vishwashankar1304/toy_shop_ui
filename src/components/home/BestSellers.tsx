
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../ProductCard";
import { bestSellerToys } from "@/data/toys";

const BestSellers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Best Sellers</h2>
          <Button variant="ghost" className="flex items-center">
            View All <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellerToys.map((toy) => (
            <ProductCard key={toy.id} product={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
