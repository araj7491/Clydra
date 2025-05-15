import { Link } from 'react-router-dom';
import { CircuitBoard, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <CircuitBoard className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">Clydra</span>
            </Link>
            <p className="text-sm">
              Revolutionizing customer relationship management for IoT and hardware companies expanding globally.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-sm hover:text-white transition-colors">Integrations</Link></li>
              <li><Link to="#" className="text-sm hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-sm hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="#" className="text-sm hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@clydra.com" className="text-sm hover:text-white transition-colors">info@clydra.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+11234567890" className="text-sm hover:text-white transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm">123 Innovation Drive, Tech Valley, CA 94043, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; {currentYear} Clydra. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="text-sm hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;