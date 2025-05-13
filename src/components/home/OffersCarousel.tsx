
import { useEffect, useState } from "react";
import { offers } from "@/data/offers";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OffersCarousel = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<any>();
  
  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);
  
  return (
    <section className="py-8 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {offers.map((offer) => (
              <CarouselItem key={offer.id} className="md:basis-2/3 lg:basis-1/2">
                <div className="h-full p-1">
                  <div className="flex flex-col md:flex-row overflow-hidden rounded-xl bg-white shadow-lg h-full">
                    <div className="md:w-1/2 relative">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="h-48 md:h-full w-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 m-2 rounded-full font-bold">
                        {offer.discount}
                      </div>
                    </div>
                    <div className="p-6 md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xl mb-2">{offer.title}</h3>
                        <p className="text-gray-600 mb-4">{offer.description}</p>
                        <div className="text-sm text-gray-500">
                          {offer.isLimited && <p className="text-red-500 font-medium">Limited Time Offer!</p>}
                          <p>Min. Order: {offer.minOrder} units</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => navigate('/offers')} 
                        className="mt-4 flex items-center justify-center"
                      >
                        Get This Offer <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default OffersCarousel;
