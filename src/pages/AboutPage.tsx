import { CheckCircle, CircuitBoard, Award, Users, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    position: 'Chief Executive Officer',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Former IoT division leader at a Fortune 500 tech company with 15+ years of industry experience.'
  },
  {
    name: 'Michael Chen',
    position: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Hardware engineering expert with multiple patents in IoT sensor technology.'
  },
  {
    name: 'Elena Rodriguez',
    position: 'Chief Operating Officer',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Operations specialist with extensive experience scaling global technology companies.'
  },
  {
    name: 'David Williams',
    position: 'VP of Product',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    bio: 'Former product lead who has launched over 20 successful hardware and software products.'
  },
];

const timeline = [
  {
    year: '2018',
    title: 'Company Founding',
    description: 'Clydra was founded with a mission to revolutionize how hardware companies connect with their customers.'
  },
  {
    year: '2019',
    title: 'First Major Product Launch',
    description: 'Released our core CRM platform specifically designed for IoT hardware companies.'
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Asia to better serve our growing international customer base.'
  },
  {
    year: '2021',
    title: 'Series A Funding',
    description: 'Secured $25M in Series A funding to accelerate product development and market expansion.'
  },
  {
    year: '2022',
    title: 'Enterprise Solution Launch',
    description: 'Introduced our enterprise-grade solution for large-scale IoT deployments.'
  },
  {
    year: '2023',
    title: 'Strategic Partnerships',
    description: 'Formed partnerships with leading hardware manufacturers and cloud service providers.'
  },
];

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-700 mb-8">
              At Clydra, we're on a mission to revolutionize how hardware companies connect with their customers, manage their operations, and scale their businesses globally.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded by a team of IoT and hardware industry veterans, we understand the unique challenges faced by companies in this space. Our platform is built from the ground up to address these challenges with elegance and efficiency.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary py-3 px-6">
                Contact Us
              </Link>
              <Link to="/careers" className="btn-outline py-3 px-6">
                Join Our Team
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team collaboration" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <CircuitBoard className="w-6 h-6 text-primary-600" />
                <span className="text-lg font-bold text-primary-800">
                  Since 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do at Clydra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary-50 w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Success</h3>
              <p className="text-gray-600">
                We measure our success by our customers' success. Their growth is our growth, and we're committed to providing the tools they need to thrive.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary-50 w-14 h-14 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to excellence in everything we do, from product design and development to customer support and company culture.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary-50 w-14 h-14 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, both within our company and with our customers and partners, to solve complex challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary-50 w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-600">
                We're building solutions that enable companies to expand globally and create positive impacts across borders and cultures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary-50 w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies, constantly seeking better ways to solve our customers' most pressing challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="rounded-full bg-primary-50 w-14 h-14 flex items-center justify-center mb-6">
                <CircuitBoard className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                We're built by and for the hardware industry, with deep expertise in IoT, manufacturing, and global supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-lg text-gray-600">
            Industry veterans with deep expertise in IoT, hardware, and enterprise software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              The key milestones that have shaped Clydra's growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold z-10 mb-4 md:mb-0">
                    {item.year.substring(2)}
                  </div>
                  
                  <div className={`md:w-5/12 p-6 bg-white rounded-lg shadow-sm ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="text-primary-600 font-bold mb-1">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <div className="bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to transform your hardware business with our CRM platform or join our team, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white py-3 px-8"
            >
              Get Started
            </Link>
            <Link 
              to="/careers" 
              className="btn bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white py-3 px-8"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;