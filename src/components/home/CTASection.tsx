import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    'Free 14-day trial with full features',
    'No credit card required to start',
    'Dedicated onboarding specialist',
    '24/7 technical support',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Ready to Transform Your Hardware Business?</h2>
            <p className="text-lg text-gray-200 max-w-xl">
              Join hundreds of IoT companies that have accelerated their growth with Clydra's powerful CRM platform.
            </p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Link 
                to="/register" 
                className="btn-accent py-3 px-6 text-base inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/20">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  placeholder="Enter your name" 
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">
                  Business Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                  placeholder="you@company.com" 
                />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-medium">
                  Company Size
                </label>
                <select className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent">
                  <option value="" className="bg-secondary-800">Select company size</option>
                  <option value="1-10" className="bg-secondary-800">1-10 employees</option>
                  <option value="11-50" className="bg-secondary-800">11-50 employees</option>
                  <option value="51-200" className="bg-secondary-800">51-200 employees</option>
                  <option value="201-500" className="bg-secondary-800">201-500 employees</option>
                  <option value="501+" className="bg-secondary-800">501+ employees</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-accent py-3 text-base font-medium"
              >
                Request Demo
              </button>
              
              <p className="text-center text-sm text-gray-300">
                By signing up, you agree to our 
                <a href="#" className="text-accent-400 hover:text-accent-300 ml-1">
                  Terms
                </a> and 
                <a href="#" className="text-accent-400 hover:text-accent-300 ml-1">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;