
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  variant?: 'default' | 'blue' | 'red' | 'green' | 'orange';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, variant = 'default' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'blue':
        return 'bg-[#00a8ff] text-white'; // Light blue from screenshot
      case 'red':
        return 'bg-[#e74c3c] text-white'; // Red
      case 'green':
        return 'bg-[#27ae60] text-white'; // Green
      case 'orange':
        return 'bg-[#f39c12] text-white'; // Orange
      default:
        return 'bg-white text-slate-800 border-slate-200';
    }
  };

  const styles = getStyles();
  const isColored = variant !== 'default';

  return (
    <div className={`p-6 shadow-sm ${styles} ${isColored ? '' : 'border rounded-xl'} flex flex-col items-center justify-center text-center h-32`}>
      <div className="text-4xl font-bold mb-1 leading-tight">{value}</div>
      <h3 className={`text-sm font-medium ${isColored ? 'text-white/90' : 'text-slate-500'}`}>{title}</h3>
      {icon && <div className="mt-2 opacity-20">{icon}</div>}
    </div>
  );
};

export default StatCard;
