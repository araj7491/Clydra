import { 
  Search, 
  Plus,
  Filter,
  Download,
  Edit,
  Trash,
  Eye,
  Tag
} from 'lucide-react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

const products = [
  {
    id: 1,
    name: 'Smart Sensor Pro',
    category: 'Sensors',
    stock: 245,
    price: 129.99,
    status: 'Active',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=50',
  },
  {
    id: 2,
    name: 'Connected Gateway',
    category: 'Gateways',
    stock: 78,
    price: 299.99,
    status: 'Active',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/163143/sackcloth-sackcloth-textured-laptop-notebook-163143.jpeg?auto=compress&cs=tinysrgb&w=50',
  },
  {
    id: 3,
    name: 'IoT Control Hub',
    category: 'Controllers',
    stock: 12,
    price: 349.99,
    status: 'Low Stock',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/4219528/pexels-photo-4219528.jpeg?auto=compress&cs=tinysrgb&w=50',
  },
  {
    id: 4,
    name: 'Industrial Tracker',
    category: 'Trackers',
    stock: 189,
    price: 199.99,
    status: 'Active',
    rating: 4.2,
    image: 'https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=50',
  },
  {
    id: 5,
    name: 'Smart Thermostat',
    category: 'Smart Home',
    stock: 0,
    price: 149.99,
    status: 'Out of Stock',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=50',
  },
];

const ProductsPage = () => {
  return (
    <div className="flex min-h-screen pt-16 bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <button className="btn-primary">
            <Plus size={18} className="mr-1" />
            Add Product
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
                placeholder="Search products..."
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
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-md object-cover" src={product.image} alt={product.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">ID: #{product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Tag size={16} className="text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{product.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.stock} units
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        product.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : product.status === 'Low Stock'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm text-gray-900 mr-1">{product.rating}</div>
                        <span className="text-yellow-400">★</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button className="text-gray-600 hover:text-gray-800">
                          <Eye size={18} />
                        </button>
                        <button className="text-primary-600 hover:text-primary-800">
                          <Edit size={18} />
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
              Showing <span className="font-medium">1</span> to <span className="font-medium">{products.length}</span> of <span className="font-medium">{products.length}</span> results
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

export default ProductsPage;