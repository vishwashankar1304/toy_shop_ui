
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { manufacturers } from "@/data/manufacturers";
import ManufacturerCard from "@/components/ManufacturerCard";

const ManufacturersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredManufacturers = manufacturers.filter(manufacturer => 
    manufacturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    manufacturer.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Our Manufacturers</h1>
          <p className="text-gray-700">
            We partner with the best toy manufacturers from around the world to bring you quality products.
          </p>
        </div>
        
        <div className="relative w-full max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search manufacturers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredManufacturers.length > 0 ? (
            filteredManufacturers.map((manufacturer) => (
              <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No manufacturers found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManufacturersPage;
