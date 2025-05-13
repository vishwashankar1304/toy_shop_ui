
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { offers } from "@/data/offers";
import OfferCard from "@/components/OfferCard";

const OffersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredOffers = offers.filter(offer => 
    offer.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Special Offers</h1>
        <p className="text-gray-700">
          Discover our current promotions, bulk discounts, and seasonal offers for wholesale buyers.
        </p>
        <div className="relative w-full max-w-md mx-auto mt-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search offers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-gray-500">No offers found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OffersPage;
