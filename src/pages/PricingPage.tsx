import { Check, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started with IoT.',
    price: '49',
    features: [
      'Up to 5 users',
      '1,000 IoT device connections',
      'Basic analytics',
      'Email support',
      'Standard security',
      '5GB data storage',
      'API access (100 calls/day)',
    ],
    recommended: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies scaling their IoT infrastructure.',
    price: '99',
    features: [
      'Up to 20 users',
      '10,000 IoT device connections',
      'Advanced analytics',
      'Priority email & chat support',
      'Enhanced security',
      '25GB data storage',
      'API access (1,000 calls/day)',
      'Custom integrations',
      'Automated workflows',
    ],
    recommended: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations with complex needs.',
    price: 'Custom',
    features: [
      'Unlimited users',
      'Unlimited IoT device connections',
      'Enterprise analytics & reporting',
      '24/7 dedicated support',
      'Advanced security & compliance',
      'Unlimited data storage',
      'Unlimited API access',
      'Custom development',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    recommended: false,
    cta: 'Contact Sales',
  },
];

const PricingPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your IoT business needs
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-md inline-flex">
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-gray-700 font-medium">
              Annual (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.recommended 
                  ? 'border-2 border-primary-500 shadow-xl relative' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <div className="bg-primary-600 text-white text-center text-sm font-medium py-1">
                  Recommended
                </div>
              )}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>
                <Link
                  to={plan.price === 'Custom' ? '/contact' : '/register'}
                  className={`block text-center py-3 rounded-lg font-medium ${
                    plan.recommended
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="p-8 bg-gray-50 border-t border-gray-200">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our pricing and features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What happens if I exceed my device limit?</h3>
              <p className="text-gray-600">
                You'll receive a notification when you reach 80% of your limit. If you exceed your limit, you can either upgrade your plan or pay for additional devices at a prorated cost.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Do you offer a free trial?</h3>
              <p className="text-gray-600">
                Yes, all plans come with a 14-day free trial with full access to all features. No credit card required to start.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What kind of support is included?</h3>
              <p className="text-gray-600">
                All plans include email support. Professional plans add chat support, while Enterprise customers get 24/7 phone support and a dedicated account manager.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to help you find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary py-3 px-8">
              Contact Sales
            </Link>
            <Link to="/support" className="btn-outline py-3 px-8">
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;