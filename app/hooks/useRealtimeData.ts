import { useState, useEffect, useCallback } from 'react';
import { DashboardData, Channel } from '../types';
import { simulateRealTimeUpdate } from '../lib/mockData';

export const useRealtimeData = (updateInterval: number = 5000) => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 초기 데이터 로드
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('/api/mock/dashboard');
      const dashboardData = await response.json();
      setData(dashboardData);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false);
    }
  }, []);

  // 실시간 업데이트 시뮬레이션
  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      setData(prevData => {
        if (!prevData) return null;
        
        return {
          ...prevData,
          channels: simulateRealTimeUpdate(prevData.channels),
          lastUpdated: new Date().toISOString()
        };
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [fetchData, updateInterval]);

  return { data, loading, error, refetch: fetchData };
};

// 채널별 상세 데이터 훅
interface ChannelDetail {
  id: string;
  name: string;
  hourlyData: {
    hour: number;
    impressions: number;
    clicks: number;
    conversions: number;
  }[];
  demographics: {
    age: {
      '18-24': number;
      '25-34': number;
      '35-44': number;
      '45+': number;
    };
    gender: {
      male: number;
      female: number;
    };
  };
}

export const useChannelDetail = (channelId: string) => {
  const [data, setData] = useState<ChannelDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChannelDetail = async () => {
      try {
        const response = await fetch(`/api/mock/channels/${channelId}`);
        const detailData = await response.json();
        setData(detailData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch channel detail');
        setLoading(false);
      }
    };

    fetchChannelDetail();
  }, [channelId]);

  return { data, loading, error };
}; 