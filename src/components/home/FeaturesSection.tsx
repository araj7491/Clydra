import { FileText, Mail, Calendar, Database, BookOpen, Users, BarChart3, Globe, Briefcase, FileSpreadsheet, Presentation as PresentationScreen, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Documents',
    description: 'Create, edit and collaborate on documents with real-time co-editing capabilities.',
    icon: <FileText className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Mail & Calendar',
    description: 'Professional email hosting with integrated calendar and scheduling features.',
    icon: <Mail className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Spreadsheets',
    description: 'Powerful spreadsheet software with advanced formulas and data analysis tools.',
    icon: <FileSpreadsheet className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Presentations',
    description: 'Create stunning presentations with professional templates and animations.',
    icon: <PresentationScreen className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'CRM',
    description: 'Manage customer relationships and sales pipeline with advanced automation.',
    icon: <Users className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Projects',
    description: 'Plan, track, and collaborate on projects with integrated task management.',
    icon: <Briefcase className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Analytics',
    description: 'Gain insights with powerful business intelligence and reporting tools.',
    icon: <BarChart3 className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    title: 'Collaboration',
    description: 'Team chat, video meetings, and collaborative workspaces in one place.',
    icon: <MessageSquare className="w-6 h-6 text-primary-600" />,
    image: 'https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Complete Business Suite</h2>
          <p className="text-lg text-gray-600">
            Everything your business needs to work smarter, better, and faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="rounded-full bg-primary-50 w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;