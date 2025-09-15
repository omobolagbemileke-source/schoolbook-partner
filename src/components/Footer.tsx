import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="text-xl font-bold">EduBooks Publishing</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner in educational publishing and distribution. 
              Serving schools nationwide with quality textbooks and storybooks 
              from Kindergarten through High School.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link to="/catalog" className="hover:text-accent transition-colors">
                  Book Catalog
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-accent transition-colors">
                  Place Order
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Distribution Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>orders@edubooks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Education Ave, Learning City, LC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 EduBooks Publishing. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-4 md:mt-0">
              <Link 
                to="#" 
                className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="#" 
                className="text-primary-foreground/80 text-sm hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;