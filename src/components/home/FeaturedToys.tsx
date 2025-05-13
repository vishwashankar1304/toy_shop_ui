
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "../ProductCard";
import { featuredToys } from "@/data/toys";

const FeaturedToys = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Toys</h2>
          <Button variant="ghost" className="flex items-center">
            View All <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredToys.map((toy) => (
            <ProductCard key={toy.id} product={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedToys;
