
import { useState } from "react";
import { Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
  ageGroup?: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const addToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate a slight delay for better UX
    setTimeout(() => {
      // Get current cart from localStorage
      const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
      // Check if product already in cart
      const existingItem = currentCart.find((item: any) => item.id === product.id);
      
      if (existingItem) {
        // Update quantity if already in cart
        existingItem.quantity += 1;
      } else {
        // Add new item to cart
        currentCart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image
        });
      }
      
      // Save updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(currentCart));
      
      setIsAddingToCart(false);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }, 500);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className="aspect-square relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <Badge className="absolute top-2 right-2">New</Badge>
        )}
      </div>
      <CardContent className="pt-6">
        <h3 className="font-semibold text-lg truncate">{product.name}</h3>
        <div className="flex justify-between mt-2">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{product.quantity} in stock</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm text-gray-500">{product.category}</span>
          {product.ageGroup && (
            <span className="text-sm text-gray-500">{product.ageGroup}</span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={addToCart} 
          disabled={isAddingToCart || product.quantity <= 0}
          className="w-full flex items-center justify-center"
        >
          {isAddingToCart ? (
            "Adding..."
          ) : (
            <>
              <ShoppingCart size={16} className="mr-2" /> Add to Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
