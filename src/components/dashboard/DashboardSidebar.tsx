import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Package, 
  ClipboardList, 
  BarChart2, 
  Settings, 
  MessageSquare, 
  HelpCircle, 
  LogOut
} from 'lucide-react';

const DashboardSidebar = () => {
  const navItems = [
    { name: 'Overview', icon: <Home size={20} />, path: '/dashboard' },
    { name: 'Customers', icon: <Users size={20} />, path: '/customers' },
    { name: 'Products', icon: <Package size={20} />, path: '/products' },
    { name: 'Projects', icon: <ClipboardList size={20} />, path: '/projects' },
    { name: 'Analytics', icon: <BarChart2 size={20} />, path: '/analytics' },
    { name: 'Messages', icon: <MessageSquare size={20} />, path: '/messages' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-md bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold">C</div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-800 to-secondary-600 bg-clip-text text-transparent">
            Clydra
          </span>
        </NavLink>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              end
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-gray-200">
        <NavLink
          to="/help"
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors mb-3"
        >
          <HelpCircle size={20} />
          <span>Help & Support</span>
        </NavLink>
        <button
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 w-full text-left rounded-md transition-colors"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;