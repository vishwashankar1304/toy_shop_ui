
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Users, Package, DollarSign } from "lucide-react";
import AdminLayout from "./AdminLayout";

const AdminDashboardPage = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold text-indigo-800">Admin Dashboard</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-indigo-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-indigo-800">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-indigo-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-900">$45,231.89</div>
              <p className="text-xs text-indigo-500">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-800">
                New Orders
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">+573</div>
              <p className="text-xs text-blue-500">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-800">
                New Customers
              </CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">+124</div>
              <p className="text-xs text-green-500">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-amber-800">
                Inventory Count
              </CardTitle>
              <Package className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-900">1,234</div>
              <p className="text-xs text-amber-500">
                82 items low stock
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card className="border-indigo-100">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-t-lg">
              <CardTitle className="text-indigo-800">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-indigo-100">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-indigo-50 transition-colors">
                    <div>
                      <p className="font-medium text-indigo-900">Order #{10045 + i}</p>
                      <p className="text-sm text-indigo-600">May {13 - i}, 2025</p>
                    </div>
                    <div className="text-right">
                      <p className="text-indigo-900">${Math.floor(Math.random() * 1000) + 500}.00</p>
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
              <CardTitle className="text-blue-800">Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-blue-100">
                {[
                  "Educational Building Blocks",
                  "Wooden Train Set",
                  "Super Deluxe Board Game",
                  "Science Experiment Kit",
                  "Dinosaur Action Figure Set"
                ].map((product, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-blue-50 transition-colors">
                    <div>
                      <p className="font-medium text-blue-900">{product}</p>
                      <p className="text-sm text-blue-600">
                        {Math.floor(Math.random() * 300) + 200} units sold
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-900">${Math.floor(Math.random() * 30) + 10}.99</p>
                      <p className="text-xs text-green-600">
                        +{Math.floor(Math.random() * 20) + 5}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboardPage;
