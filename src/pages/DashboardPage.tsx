import { 
  Users, 
  Package, 
  DollarSign, 
  Activity, 
  BarChart2, 
  Zap,
  AlertCircle,
  Clock,
  CheckCircle,
  FileText
} from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import StatCard from '../components/dashboard/StatCard';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen pt-16 bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Alex! Here's what's happening today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Customers" 
            value="2,567" 
            icon={<Users size={18} />} 
            change={{ value: 12.5, isPositive: true }}
            color="primary"
          />
          <StatCard 
            title="Products Managed" 
            value="347" 
            icon={<Package size={18} />}
            change={{ value: 8.1, isPositive: true }}
            color="secondary"
          />
          <StatCard 
            title="Revenue (MTD)" 
            value="$89,432" 
            icon={<DollarSign size={18} />}
            change={{ value: 15.3, isPositive: true }}
            color="accent"
          />
          <StatCard 
            title="Active Devices" 
            value="12,489" 
            icon={<Activity size={18} />}
            change={{ value: 3.2, isPositive: true }}
            color="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="card lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Revenue Overview</h2>
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
              <BarChart2 size={48} className="text-gray-400" />
              <span className="ml-2 text-gray-500">Revenue Chart Placeholder</span>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold mb-6">Customer Acquisition</h2>
            <div className="h-64 w-full bg-gray-100 rounded-lg flex items-center justify-center">
              <Users size={48} className="text-gray-400" />
              <span className="ml-2 text-gray-500">Customer Chart Placeholder</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {[
                { icon: <Users className="text-primary-600" />, text: "New customer: TechSolutions Inc.", time: "2 hours ago" },
                { icon: <Package className="text-secondary-600" />, text: "Product updated: Smart Sensor v2.1", time: "5 hours ago" },
                { icon: <DollarSign className="text-accent-600" />, text: "New invoice: #INV-2023-1042", time: "Yesterday" },
                { icon: <AlertCircle className="text-red-600" />, text: "Alert: Device offline - ID#8842", time: "Yesterday" },
                { icon: <CheckCircle className="text-green-600" />, text: "Task completed: Q3 Planning", time: "2 days ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 rounded-full bg-gray-100 mr-3">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{activity.text}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Upcoming Tasks</h2>
            <div className="space-y-4">
              {[
                { title: "Client Demo: NextGen Solutions", priority: "High", due: "Today, 2:00 PM" },
                { title: "Weekly Team Meeting", priority: "Medium", due: "Tomorrow, 10:00 AM" },
                { title: "Update Product Roadmap", priority: "High", due: "Jul 15, 2023" },
                { title: "Review Q3 Marketing Plan", priority: "Medium", due: "Jul 18, 2023" },
                { title: "New Product Launch Preparation", priority: "High", due: "Jul 22, 2023" },
              ].map((task, index) => (
                <div key={index} className="flex items-center p-3 border border-gray-200 rounded-lg">
                  <div className="mr-3">
                    <input type="checkbox" className="rounded text-primary-600 focus:ring-primary-500 h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{task.title}</p>
                    <div className="flex items-center text-sm">
                      <span className={`px-2 py-0.5 rounded-full text-xs ${
                        task.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      } mr-2`}>
                        {task.priority}
                      </span>
                      <span className="flex items-center text-gray-500">
                        <Clock size={14} className="mr-1" />
                        {task.due}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;