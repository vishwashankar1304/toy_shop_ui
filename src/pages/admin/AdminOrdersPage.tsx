
import { useState } from "react";
import AdminLayout from "./AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Sample data for orders
const ordersData = [
  {
    id: "ORD-001",
    customer: "John Smith",
    date: "2025-05-12",
    total: 459.99,
    status: "Completed",
    items: 5
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    date: "2025-05-11",
    total: 289.50,
    status: "Processing",
    items: 3
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    date: "2025-05-10",
    total: 749.99,
    status: "Shipped",
    items: 8
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    date: "2025-05-10",
    total: 189.95,
    status: "Processing",
    items: 2
  },
  {
    id: "ORD-005",
    customer: "Robert Wilson",
    date: "2025-05-09",
    total: 1299.99,
    status: "Completed",
    items: 12
  },
  {
    id: "ORD-006",
    customer: "Lisa Anderson",
    date: "2025-05-08",
    total: 579.50,
    status: "Shipped",
    items: 6
  },
  {
    id: "ORD-007",
    customer: "David Thompson",
    date: "2025-05-07",
    total: 349.99,
    status: "Completed",
    items: 4
  },
  {
    id: "ORD-008",
    customer: "Jennifer Martinez",
    date: "2025-05-06",
    total: 219.95,
    status: "Processing",
    items: 3
  }
];

const AdminOrdersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const filteredOrders = ordersData
    .filter(order => 
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(order => 
      statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase()
    );
    
  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6 text-indigo-800">Order Management</h1>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-indigo-400" />
          <Input
            placeholder="Search orders..."
            className="pl-10 border-indigo-200 focus:border-indigo-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="border-indigo-200">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border border-indigo-200 overflow-hidden bg-white">
        <Table>
          <TableHeader className="bg-indigo-50">
            <TableRow>
              <TableHead className="text-indigo-900">Order ID</TableHead>
              <TableHead className="text-indigo-900">Customer</TableHead>
              <TableHead className="text-indigo-900">Date</TableHead>
              <TableHead className="text-indigo-900">Items</TableHead>
              <TableHead className="text-indigo-900">Total</TableHead>
              <TableHead className="text-indigo-900">Status</TableHead>
              <TableHead className="text-right text-indigo-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <TableRow key={order.id} className="hover:bg-indigo-50 transition-colors">
                  <TableCell className="font-medium text-indigo-700">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50">View</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-indigo-500">
                  No orders found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminOrdersPage;
