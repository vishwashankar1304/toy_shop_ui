
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Toy Town Emporium</h2>
            <p className="text-sm mb-4">
              Your trusted wholesale partner for quality toys and games. Serving retailers since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/toys" className="text-sm hover:underline">Our Toys</Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-sm hover:underline">Manufacturers</Link>
              </li>
              <li>
                <Link to="/offers" className="text-sm hover:underline">Special Offers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:underline">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">Educational Toys</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Action Figures</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Board Games</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Soft Toys</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">Outdoor Toys</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-md font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <MapPin size={16} className="mr-2" /> 
                123 Toy Avenue, Toyland, TY 12345
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2" /> 
                (555) 123-4567
              </li>
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2" /> 
                info@toytown.example
              </li>
              <li className="flex items-center text-sm">
                <Clock size={16} className="mr-2" /> 
                Mon-Fri: 9am-5pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Toy Town Emporium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
