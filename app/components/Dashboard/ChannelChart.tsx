import React from 'react';
import useStore from '@/store/useStore';
import type { DashboardData, ChannelData, Channel } from '../../types';

const ChannelChart: React.FC = () => {
  const { dashboardData } = useStore() as { dashboardData: DashboardData | null };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Channel Performance</h2>
      <div className="space-y-4">
        {dashboardData?.channelData?.map((channel: ChannelData) => (
          <div key={channel.name} className="flex items-center justify-between">
            <span className="text-gray-600">{channel.name}</span>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                ROAS: {channel.roas}x
              </span>
              <span className="text-sm text-gray-500">
                Budget: ₩{channel.budget.toLocaleString()}
              </span>
              <div className="w-32 bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${channel.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelChart; 