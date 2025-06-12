import React from 'react';
import { useRouter } from 'next/router';
import useStore from '@/store/useStore';
import KPICards from '@/components/Dashboard/KPICards';
import ChannelChart from '@/components/Dashboard/ChannelChart';
import AIRecommendations from '@/components/Dashboard/AIRecommendations';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const { user } = useStore();

  React.useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="space-y-6">
                <KPICards />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ChannelChart />
                  <AIRecommendations />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 