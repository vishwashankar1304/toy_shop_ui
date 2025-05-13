
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/categories";

const FilterSidebar = () => {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <h3 className="font-bold text-lg mb-4">Filter Toys</h3>

      {/* Category filter */}
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`} className="text-sm">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price range filter */}
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-2">Price Range</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="min-price" className="text-xs">Min ($)</Label>
            <Input id="min-price" type="number" placeholder="0" className="h-8" />
          </div>
          <div>
            <Label htmlFor="max-price" className="text-xs">Max ($)</Label>
            <Input id="max-price" type="number" placeholder="1000" className="h-8" />
          </div>
        </div>
      </div>

      {/* Age group filter */}
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-2">Age Group</h4>
        <div className="space-y-2">
          {["0-2 years", "3-5 years", "6-8 years", "9-11 years", "12+ years"].map((age) => (
            <div key={age} className="flex items-center space-x-2">
              <Checkbox id={`age-${age}`} />
              <Label htmlFor={`age-${age}`} className="text-sm">{age}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability filter */}
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-2">Availability</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm">In Stock</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pre-order" />
            <Label htmlFor="pre-order" className="text-sm">Pre-Order</Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full">Reset Filters</Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
