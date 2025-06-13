import React from 'react';
import useStore from '@/store/useStore';

const KPICards: React.FC = () => {
  const { dashboardData } = useStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Impressions</h3>
        <p className="text-2xl font-bold">
          {dashboardData?.metrics.impressions?.toLocaleString() || '0'}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Clicks</h3>
        <p className="text-2xl font-bold">
          {dashboardData?.metrics.clicks?.toLocaleString() || '0'}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Conversions</h3>
        <p className="text-2xl font-bold">
          {dashboardData?.metrics.conversions?.toLocaleString() || '0'}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Revenue</h3>
        <p className="text-2xl font-bold">
          ₩{dashboardData?.metrics.revenue?.toLocaleString() || '0'}
        </p>
      </div>
    </div>
  );
};

export default KPICards; 