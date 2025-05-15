import { 
  Search, 
  Plus,
  Filter,
  Clock, 
  CheckSquare,
  User,
  Calendar,
  MoreHorizontal
} from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

const projects = [
  {
    id: 1,
    name: 'Smart City Integration',
    client: 'Metro City Council',
    team: [
      { name: 'John D.', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Sarah L.', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Mike P.', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50' },
    ],
    deadline: 'Oct 15, 2023',
    status: 'In Progress',
    completion: 65,
    priority: 'High',
  },
  {
    id: 2,
    name: 'Industrial IoT Deployment',
    client: 'TechManufacturing Inc.',
    team: [
      { name: 'Emily R.', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'David K.', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=50' },
    ],
    deadline: 'Sep 30, 2023',
    status: 'In Progress',
    completion: 42,
    priority: 'Medium',
  },
  {
    id: 3,
    name: 'Healthcare Monitoring System',
    client: 'National Hospital Group',
    team: [
      { name: 'Jessica T.', avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Robert B.', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Linda S.', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50' },
    ],
    deadline: 'Dec 1, 2023',
    status: 'Planning',
    completion: 15,
    priority: 'High',
  },
  {
    id: 4,
    name: 'Smart Agriculture Platform',
    client: 'FarmTech Solutions',
    team: [
      { name: 'Andrew J.', avatar: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Michelle W.', avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=50' },
    ],
    deadline: 'Nov 15, 2023',
    status: 'Completed',
    completion: 100,
    priority: 'Medium',
  },
  {
    id: 5,
    name: 'Retail Analytics Solution',
    client: 'Global Retail Group',
    team: [
      { name: 'Ryan M.', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Lisa P.', avatar: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=50' },
      { name: 'Kevin Y.', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50' },
    ],
    deadline: 'Jan 20, 2024',
    status: 'On Hold',
    completion: 30,
    priority: 'Low',
  },
];

const ProjectsPage = () => {
  return (
    <div className="flex min-h-screen pt-16 bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button className="btn-primary">
            <Plus size={18} className="mr-1" />
            New Project
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button className="btn-primary py-1.5 px-3">All</button>
            <button className="btn-outline py-1.5 px-3">In Progress</button>
            <button className="btn-outline py-1.5 px-3">Completed</button>
            <button className="btn-outline py-1.5 px-3">On Hold</button>
          </div>
          <div className="flex gap-2">
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                className="input pl-10" 
                placeholder="Search projects..."
              />
            </div>
            <button className="btn-outline py-1.5">
              <Filter size={18} className="mr-1" />
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.name}</h3>
                      <p className="text-sm text-gray-600">Client: {project.client}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <div className="flex -space-x-2">
                        {project.team.map((member, index) => (
                          <img 
                            key={index}
                            src={member.avatar}
                            alt={member.name}
                            title={member.name}
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                        {project.team.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                            +{project.team.length - 3}
                          </div>
                        )}
                      </div>
                      <button className="ml-2 text-gray-400 hover:text-gray-600">
                        <User size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm font-medium">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-green-500' 
                            : project.status === 'On Hold'
                              ? 'bg-amber-500'
                              : 'bg-primary-600'
                        }`}
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap md:flex-nowrap items-center gap-4 mt-4 md:mt-0">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <Clock size={16} className="text-gray-400 mr-1.5" />
                      <span className="text-sm text-gray-700">{project.deadline}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <CheckSquare size={16} className="text-gray-400 mr-1.5" />
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : project.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
                            : project.status === 'On Hold'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-purple-100 text-purple-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        project.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : project.priority === 'Medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-green-100 text-green-800'
                      }`}>
                        {project.priority}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="btn-outline py-1.5 px-3">View</button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;