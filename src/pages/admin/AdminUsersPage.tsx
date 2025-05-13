
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mail, UserPlus } from "lucide-react";

// Sample user data
const usersData = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@toytown.com",
    role: "admin",
    registeredDate: "2025-01-15",
    orders: 27
  },
  {
    id: "2",
    name: "John Smith",
    email: "john@example.com",
    role: "user",
    registeredDate: "2025-03-22",
    orders: 8
  },
  {
    id: "3",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "user",
    registeredDate: "2025-04-10",
    orders: 12
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael@example.com",
    role: "user",
    registeredDate: "2025-04-18",
    orders: 3
  },
  {
    id: "5",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "user",
    registeredDate: "2025-05-01",
    orders: 5
  },
  {
    id: "6",
    name: "David Wilson",
    email: "david@example.com",
    role: "user",
    registeredDate: "2025-05-08",
    orders: 0
  }
];

const AdminUsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-indigo-800">User Management</h1>
        <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700">
          <UserPlus className="h-4 w-4" /> Add User
        </Button>
      </div>
      
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-indigo-400" />
        <Input
          placeholder="Search users..."
          className="pl-10 border-indigo-200 focus:border-indigo-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="rounded-md border border-indigo-200 overflow-hidden bg-white">
        <Table>
          <TableHeader className="bg-indigo-50">
            <TableRow>
              <TableHead className="text-indigo-900">Name</TableHead>
              <TableHead className="text-indigo-900">Email</TableHead>
              <TableHead className="text-indigo-900">Role</TableHead>
              <TableHead className="text-indigo-900">Registered Date</TableHead>
              <TableHead className="text-indigo-900">Orders</TableHead>
              <TableHead className="text-right text-indigo-900">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-indigo-50 transition-colors">
                  <TableCell className="font-medium text-indigo-700">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(user.registeredDate).toLocaleDateString()}</TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="sm" className="border-indigo-200 text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-indigo-700 hover:text-indigo-900 hover:bg-indigo-50">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4 text-indigo-500">
                  No users found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
