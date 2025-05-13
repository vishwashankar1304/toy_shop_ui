
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeaturedToys from "@/components/home/FeaturedToys";
import BestSellers from "@/components/home/BestSellers";
import Categories from "@/components/home/Categories";
import OffersCarousel from "@/components/home/OffersCarousel";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Offers Carousel - Will auto-slide every 5 seconds */}
      <OffersCarousel />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Toy Town Emporium</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700">
                Your trusted wholesale partner for quality toys and games. 
                Discover our wide range of products from top manufacturers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex items-center">
                  Shop Now <ArrowRight className="ml-2" size={16} />
                </Button>
                <Button size="lg" variant="outline" className="flex items-center">
                  See Offers <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088" 
                alt="Toy Shop" 
                className="rounded-lg shadow-lg w-full object-cover h-[400px]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with more details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">About Toy Town</h2>
            <p className="text-gray-700 mb-6">
              Since 1995, Toy Town Emporium has been providing quality toys and games to retailers nationwide. 
              We partner with the best manufacturers from around the world to bring you a wide selection of 
              educational, fun, and innovative products for children of all ages.
            </p>
            <p className="text-gray-700 mb-6">
              Our mission is to inspire creativity, learning, and joy through play. We carefully curate our 
              collection to ensure that each toy meets our high standards for quality, safety, and educational value.
            </p>
            <p className="text-gray-700">
              As a wholesale partner, we offer competitive pricing, flexible ordering options, and excellent 
              customer service. Join thousands of retailers who trust Toy Town Emporium for their toy supply needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Categories />

      {/* Featured Toys Section */}
      <FeaturedToys />

      {/* Best Sellers Section */}
      <BestSellers />
    </div>
  );
};

export default Index;
