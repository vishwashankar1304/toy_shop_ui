
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Check if user is admin, if not redirect
  if (user?.role !== "admin") {
    navigate("/login");
    toast({
      title: "Access denied",
      description: "You need admin privileges to access this page",
      variant: "destructive"
    });
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
  };

  const navItems = [
    { 
      name: "Dashboard", 
      path: "/admin/dashboard", 
      icon: <LayoutDashboard className="h-5 w-5" /> 
    },
    { 
      name: "Orders", 
      path: "/admin/orders", 
      icon: <ShoppingCart className="h-5 w-5" /> 
    },
    { 
      name: "Users", 
      path: "/admin/users", 
      icon: <Users className="h-5 w-5" /> 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen fixed">
          <div className="flex items-center justify-between p-4 border-b border-indigo-100">
            <h2 className="text-xl font-bold text-indigo-700">Admin Panel</h2>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-indigo-600 mb-6">Logged in as {user?.name}</p>
            
            <nav className="space-y-1">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-md transition-colors ${
                      isActive 
                        ? "bg-indigo-600 text-white" 
                        : "text-indigo-700 hover:bg-indigo-50"
                    }`
                  }
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </NavLink>
              ))}
              
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-3 mt-6 text-red-600 rounded-md hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-3">Logout</span>
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="ml-64 w-full">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
              <div className="ml-auto">
                <p className="text-sm font-medium text-indigo-700">Welcome, {user?.name}</p>
              </div>
            </div>
          </header>
          
          {/* Page content */}
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
