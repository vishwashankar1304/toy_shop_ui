
import { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/ProductCard";
import { allToys } from "@/data/toys";
import { categories } from "@/data/categories";

const ToysPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  
  // Age groups used for filtering
  const ageGroups = ["0-2 years", "3-5 years", "6-8 years", "9-11 years", "12+ years"];

  // Filter toys based on all criteria
  const filteredToys = allToys.filter((toy) => {
    // Search query filter
    const matchesQuery = toy.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = !selectedCategory || toy.category === selectedCategory;
    
    // Price range filter
    const matchesPrice = 
      toy.price >= priceRange.min && 
      toy.price <= (priceRange.max || Number.MAX_SAFE_INTEGER);
    
    // Age group filter
    const matchesAge = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(toy.ageGroup);
    
    // Stock filter
    const matchesStock = !inStockOnly || toy.quantity > 0;
    
    return matchesQuery && matchesCategory && matchesPrice && matchesAge && matchesStock;
  });

  const toggleAgeGroup = (ageGroup: string) => {
    setSelectedAgeGroups(prev => 
      prev.includes(ageGroup)
        ? prev.filter(age => age !== ageGroup)
        : [...prev, ageGroup]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Our Toys</h1>
      
      {/* Search and filters bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search toys..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {/* Category dropdown */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={undefined}>All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          {/* Filters dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Price Range</DropdownMenuLabel>
              <div className="p-2 grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="min-price" className="text-xs">Min ($)</Label>
                  <Input 
                    id="min-price" 
                    type="number" 
                    placeholder="0" 
                    className="h-8" 
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <Label htmlFor="max-price" className="text-xs">Max ($)</Label>
                  <Input 
                    id="max-price" 
                    type="number" 
                    placeholder="1000" 
                    className="h-8" 
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                  />
                </div>
              </div>
              
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Age Group</DropdownMenuLabel>
              
              {ageGroups.map((ageGroup) => (
                <DropdownMenuCheckboxItem
                  key={ageGroup}
                  checked={selectedAgeGroups.includes(ageGroup)}
                  onCheckedChange={() => toggleAgeGroup(ageGroup)}
                >
                  {ageGroup}
                </DropdownMenuCheckboxItem>
              ))}
              
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Availability</DropdownMenuLabel>
              <div className="p-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="in-stock" 
                    checked={inStockOnly}
                    onCheckedChange={(checked) => setInStockOnly(checked === true)}
                  />
                  <Label htmlFor="in-stock">In Stock Only</Label>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button onClick={() => {
            setSearchQuery("");
            setSelectedCategory(undefined);
            setPriceRange({ min: 0, max: 1000 });
            setSelectedAgeGroups([]);
            setInStockOnly(false);
          }}>
            Reset
          </Button>
        </div>
      </div>
      
      {/* Products grid */}
      {filteredToys.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredToys.map((toy) => (
            <ProductCard key={toy.id} product={toy} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-lg text-gray-500 mb-4">No toys found matching your criteria.</p>
            <Button onClick={() => {
              setSearchQuery("");
              setSelectedCategory(undefined);
              setPriceRange({ min: 0, max: 1000 });
              setSelectedAgeGroups([]);
            }}>
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ToysPage;
