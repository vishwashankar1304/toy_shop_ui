
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Manufacturer {
  id: string;
  name: string;
  logo: string;
  country: string;
  productTypes: string[];
  established: number;
}

interface ManufacturerCardProps {
  manufacturer: Manufacturer;
}

const ManufacturerCard = ({ manufacturer }: ManufacturerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <CardContent className="p-0">
        <div className="h-40 bg-gray-50 flex items-center justify-center p-4">
          <img 
            src={manufacturer.logo} 
            alt={manufacturer.name} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-1">{manufacturer.name}</h3>
          <p className="text-sm text-gray-500 mb-3">
            {manufacturer.country} • Est. {manufacturer.established}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {manufacturer.productTypes.map((type) => (
              <span 
                key={type} 
                className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full flex items-center justify-center">
          View Products <ArrowRight className="ml-2" size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ManufacturerCard;
