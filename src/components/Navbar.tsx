
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, User, LogOut, LayoutDashboard, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  // Get cart items count from localStorage
  const getCartItemsCount = () => {
    const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]') : [];
    return cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  };
  
  const cartItemsCount = getCartItemsCount();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-indigo-600">Toy Town Emporium</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!isAdmin() && (
              <>
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors">
                  Home
                </Link>
                <Link to="/toys" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors">
                  Toys
                </Link>
                <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors">
                  Contact
                </Link>
                <Link to="/offers" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors">
                  Offers
                </Link>
              </>
            )}
            
            {isAdmin() && (
              <>
                <Link to="/admin/dashboard" className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
                  <LayoutDashboard className="h-4 w-4 mr-1" />
                  Dashboard
                </Link>
                <Link to="/admin/orders" className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
                  <Package className="h-4 w-4 mr-1" />
                  Orders
                </Link>
                <Link to="/admin/users" className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-indigo-600 hover:bg-indigo-100 transition-colors">
                  <Users className="h-4 w-4 mr-1" />
                  Users
                </Link>
              </>
            )}

            {!isAdmin() && (
              <Link to="/cart" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
            )}
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-indigo-600">{user.name}</span>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild className="text-indigo-600 hover:bg-indigo-100">
                  <Link to="/login">
                    <User className="h-4 w-4 mr-1" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
          <div className="flex md:hidden items-center space-x-4">
            {!isAdmin() && (
              <Link to="/cart" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                    {cartItemsCount}
                  </Badge>
                )}
              </Link>
            )}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-indigo-500 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {!isAdmin() && (
              <>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/toys"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  Toys
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link
                  to="/offers"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  Offers
                </Link>
              </>
            )}
            
            {isAdmin() && (
              <>
                <Link
                  to="/admin/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center">
                    <LayoutDashboard className="h-5 w-5 mr-2" />
                    Dashboard
                  </div>
                </Link>
                <Link
                  to="/admin/orders"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Orders
                  </div>
                </Link>
                <Link
                  to="/admin/users"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Users
                  </div>
                </Link>
              </>
            )}
            
            {user ? (
              <>
                <div className="px-3 py-2 text-base font-medium text-indigo-600">
                  Signed in as: {user.name}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-red-50 text-red-500 flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-100 flex items-center"
                  onClick={toggleMenu}
                >
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700 m-2 p-2 text-center rounded"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
