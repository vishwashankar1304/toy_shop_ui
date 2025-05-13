
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  expiryDate: string;
  isLimited: boolean;
  minOrder: number;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard = ({ offer }: OfferCardProps) => {
  // Calculate days remaining
  const expiryDate = new Date(offer.expiryDate);
  const today = new Date();
  const daysRemaining = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 3600 * 24));

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className="relative">
        <img 
          src={offer.image} 
          alt={offer.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
          <Badge variant="secondary" className="font-bold text-lg">
            {offer.discount}
          </Badge>
        </div>
        {offer.isLimited && (
          <Badge className="absolute top-2 right-2 bg-red-500">Limited Time</Badge>
        )}
      </div>
      <CardContent className="pt-6">
        <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
        <p className="text-sm text-gray-700 mb-4">{offer.description}</p>
        <div className="flex justify-between text-sm">
          <span>Min. Order: {offer.minOrder} units</span>
          <span className={daysRemaining <= 5 ? "text-red-500 font-medium" : ""}>
            {daysRemaining > 0 ? `${daysRemaining} days left` : "Expired"}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full flex items-center justify-center">
          Get This Offer <ArrowRight className="ml-2" size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OfferCard;
