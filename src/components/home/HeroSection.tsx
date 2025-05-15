import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Complete <span className="text-accent-400">Business Suite</span> in One Place
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              Clydra brings together everything your business needs - from documents and email to CRM and project management - in one integrated suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="btn-accent py-3 px-6 text-base">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="btn bg-white text-primary-800 hover:bg-gray-100 focus:ring-white py-3 px-6 text-base">
                View Pricing
              </Link>
            </div>
            <div className="text-sm text-gray-300">
              <p>No credit card required • 30-day free trial • Cancel anytime</p>
            </div>
          </div>
          <div className="relative w-full h-96 animate-slide-up">
            <img 
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaboration" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <p className="text-3xl font-bold text-accent-400">10M+</p>
            <p className="text-gray-300 mt-2">Active Users</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-accent-400">150+</p>
            <p className="text-gray-300 mt-2">Countries</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-accent-400">99.9%</p>
            <p className="text-gray-300 mt-2">Uptime</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-bold text-accent-400">50+</p>
            <p className="text-gray-300 mt-2">Integrations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;