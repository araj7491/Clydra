import { useState } from 'react';
import { 
  Search, 
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Edit,
  Trash,
  ExternalLink,
  CheckCircle,
  XCircle
} from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

const customers = [
  {
    id: 1,
    name: 'TechSolutions Inc.',
    contact: 'Sarah Johnson',
    email: 'sarah@techsolutions.com',
    phone: '(555) 123-4567',
    status: 'Active',
    type: 'Enterprise',
    location: 'New York, USA',
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    name: 'SmartDevices Ltd.',
    contact: 'Michael Chen',
    email: 'michael@smartdevices.com',
    phone: '(555) 234-5678',
    status: 'Active',
    type: 'Mid-Market',
    location: 'London, UK',
    lastActivity: '1 day ago',
  },
  {
    id: 3,
    name: 'Future Innovations',
    contact: 'Emily Davis',
    email: 'emily@futureinnovations.com',
    phone: '(555) 345-6789',
    status: 'Inactive',
    type: 'Enterprise',
    location: 'Singapore',
    lastActivity: '3 days ago',
  },
  {
    id: 4,
    name: 'Connected Home Systems',
    contact: 'James Wilson',
    email: 'james@connectedhome.com',
    phone: '(555) 456-7890',
    status: 'Active',
    type: 'SMB',
    location: 'Toronto, Canada',
    lastActivity: '5 hours ago',
  },
  {
    id: 5,
    name: 'Global IoT Solutions',
    contact: 'Samantha Lee',
    email: 'samantha@globaliot.com',
    phone: '(555) 567-8901',
    status: 'Active',
    type: 'Enterprise',
    location: 'Berlin, Germany',
    lastActivity: '1 week ago',
  },
];

const CustomersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen pt-16 bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Customers</h1>
          <button className="btn-primary">
            <Plus size={18} className="mr-1" />
            Add Customer
          </button>
        </div>

        <div className="card mb-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                className="input pl-10" 
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="btn-outline py-1.5">
                <Filter size={18} className="mr-1" />
                Filter
              </button>
              <button className="btn-outline py-1.5">
                <Download size={18} className="mr-1" />
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Activity
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.contact}</div>
                      <div className="text-sm text-gray-500">{customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                      }`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.lastActivity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-primary-600 hover:text-primary-800">
                          <Edit size={18} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-800">
                          <ExternalLink size={18} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredCustomers.length}</span> of <span className="font-medium">{customers.length}</span> results
            </div>
            <div className="flex gap-2">
              <button className="btn-outline py-1 px-3 text-sm disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="btn-outline py-1 px-3 text-sm">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomersPage;