import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
}

const StatCard = ({ title, value, icon, change, color = 'primary' }: StatCardProps) => {
  const colorClasses = {
    primary: 'text-primary-600 bg-primary-50',
    secondary: 'text-secondary-600 bg-secondary-50',
    accent: 'text-accent-600 bg-accent-50',
    success: 'text-green-600 bg-green-50',
    warning: 'text-amber-600 bg-amber-50',
    danger: 'text-red-600 bg-red-50',
  };

  return (
    <div className="card hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className={`ml-2 text-sm ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change.isPositive ? '+' : ''}{change.value}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;