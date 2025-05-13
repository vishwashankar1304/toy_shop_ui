
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { manufacturers, Manufacturer } from "@/data/manufacturers";
import { toast } from "@/hooks/use-toast";

const AdminPage = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [manufacturersList, setManufacturersList] = useState<Manufacturer[]>([]);
  const [newManufacturer, setNewManufacturer] = useState<Omit<Manufacturer, "id">>({
    name: "",
    logo: "",
    country: "",
    productTypes: [],
    established: new Date().getFullYear(),
  });
  const [productType, setProductType] = useState("");

  useEffect(() => {
    // Check if user is admin, if not redirect to home
    if (!isAdmin()) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page",
        variant: "destructive",
      });
      navigate("/");
      return;
    }
    
    // Load manufacturers from localStorage or use default from data file
    const storedManufacturers = localStorage.getItem("manufacturers");
    if (storedManufacturers) {
      setManufacturersList(JSON.parse(storedManufacturers));
    } else {
      setManufacturersList(manufacturers);
      localStorage.setItem("manufacturers", JSON.stringify(manufacturers));
    }
  }, [isAdmin, navigate]);

  const handleAddProductType = () => {
    if (productType.trim() === "") return;
    
    setNewManufacturer({
      ...newManufacturer,
      productTypes: [...newManufacturer.productTypes, productType.trim()]
    });
    setProductType("");
  };

  const removeProductType = (index: number) => {
    setNewManufacturer({
      ...newManufacturer,
      productTypes: newManufacturer.productTypes.filter((_, i) => i !== index)
    });
  };

  const handleAddManufacturer = () => {
    // Validate fields
    if (!newManufacturer.name || !newManufacturer.country || !newManufacturer.logo) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newManufacturerWithId: Manufacturer = {
      ...newManufacturer,
      id: `m${manufacturersList.length + 1}`
    };

    const updatedManufacturers = [...manufacturersList, newManufacturerWithId];
    setManufacturersList(updatedManufacturers);
    localStorage.setItem("manufacturers", JSON.stringify(updatedManufacturers));
    
    // Reset form
    setNewManufacturer({
      name: "",
      logo: "",
      country: "",
      productTypes: [],
      established: new Date().getFullYear(),
    });
    
    toast({
      title: "Manufacturer Added",
      description: `${newManufacturerWithId.name} has been successfully added`,
    });
  };

  const handleDeleteManufacturer = (id: string) => {
    const updatedManufacturers = manufacturersList.filter(m => m.id !== id);
    setManufacturersList(updatedManufacturers);
    localStorage.setItem("manufacturers", JSON.stringify(updatedManufacturers));
    
    toast({
      title: "Manufacturer Deleted",
      description: "The manufacturer has been removed",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-lg">
            Welcome, <span className="font-semibold">{user?.name}</span>
          </p>
          <p className="text-sm text-gray-600">Role: Administrator</p>
        </div>
      </div>
      
      <Tabs defaultValue="manage" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="manage">Manage Manufacturers</TabsTrigger>
          <TabsTrigger value="add">Add Manufacturer</TabsTrigger>
        </TabsList>
        
        <TabsContent value="manage">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturersList.map((manufacturer) => (
              <Card key={manufacturer.id} className="overflow-hidden">
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
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => handleDeleteManufacturer(manufacturer.id)}
                      className="mt-2"
                    >
                      Delete Manufacturer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Manufacturer</CardTitle>
              <CardDescription>Fill in the details to add a new toy manufacturer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Manufacturer Name</label>
                  <Input 
                    placeholder="Enter manufacturer name" 
                    value={newManufacturer.name}
                    onChange={(e) => setNewManufacturer({...newManufacturer, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Logo URL</label>
                  <Input 
                    placeholder="Enter logo URL" 
                    value={newManufacturer.logo}
                    onChange={(e) => setNewManufacturer({...newManufacturer, logo: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Country</label>
                  <Input 
                    placeholder="Country of origin" 
                    value={newManufacturer.country}
                    onChange={(e) => setNewManufacturer({...newManufacturer, country: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Established Year</label>
                  <Input 
                    type="number" 
                    placeholder="Year established" 
                    value={newManufacturer.established}
                    onChange={(e) => setNewManufacturer({...newManufacturer, established: parseInt(e.target.value) || new Date().getFullYear()})}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Product Types</label>
                  <div className="flex gap-2 mb-2">
                    <Input 
                      placeholder="e.g. Educational Toys" 
                      value={productType}
                      onChange={(e) => setProductType(e.target.value)}
                    />
                    <Button type="button" onClick={handleAddProductType} className="whitespace-nowrap">
                      Add Type
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {newManufacturer.productTypes.map((type, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        <span>{type}</span>
                        <button 
                          type="button" 
                          onClick={() => removeProductType(index)}
                          className="text-gray-500 hover:text-red-500 text-xs"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button onClick={handleAddManufacturer} className="w-full">
                  Add Manufacturer
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;
