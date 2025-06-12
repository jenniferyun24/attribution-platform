import { ChannelData, TrendData, DashboardData, CustomerJourney } from '../types';

const CHANNEL_NAMES = ['Instagram', 'TikTok', 'Naver Search', 'Musinsa', 'Own Store', 'Google Ads', 'Facebook Ads'];
const CATEGORIES = ['Brand Awareness', 'Interest Generation', 'Purchase Conversion'] as const;

// 채널 데이터 생성
export const generateChannelData = (): ChannelData[] => {
  return CHANNEL_NAMES.map((name, index) => ({
    name: name as any,
    score: Math.floor(Math.random() * 30) + 70,
    budget: Math.floor(Math.random() * 100000) + 100000,
    roas: Number((Math.random() * 5 + 2).toFixed(1)),
    impressions: Math.floor(Math.random() * 1000000) + 500000,
    clicks: Math.floor(Math.random() * 50000) + 10000,
    conversions: Math.floor(Math.random() * 5000) + 1000,
  }));
};

// 트렌드 데이터 생성 (최근 30일)
export const generateTrendData = (): TrendData[] => {
  const trends: TrendData[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    trends.push({
      date: date.toISOString().split('T')[0],
      impressions: Math.floor(Math.random() * 1000000) + 500000,
      clicks: Math.floor(Math.random() * 50000) + 10000,
      conversions: Math.floor(Math.random() * 5000) + 1000,
      revenue: Math.floor(Math.random() * 10000000) + 1000000,
    });
  }
  return trends;
};

// 고객 여정 데이터 생성
export const generateCustomerJourneys = (count: number = 100): CustomerJourney[] => {
  const journeys: CustomerJourney[] = [];
  for (let i = 0; i < count; i++) {
    const touchpointCount = Math.floor(Math.random() * 5) + 2;
    const touchpoints = [];
    const startTime = new Date();
    startTime.setHours(startTime.getHours() - Math.floor(Math.random() * 72));
    for (let j = 0; j < touchpointCount; j++) {
      const timestamp = new Date(startTime);
      timestamp.setHours(timestamp.getHours() + j * Math.floor(Math.random() * 12));
      touchpoints.push({
        channel: CHANNEL_NAMES[Math.floor(Math.random() * CHANNEL_NAMES.length)] as any,
        timestamp: timestamp.toISOString(),
        type: ['impression', 'click', 'conversion'][Math.floor(Math.random() * 3)] as any,
      });
    }
    const converted = Math.random() > 0.3;
    journeys.push({
      touchpoints,
      conversionValue: converted ? Math.floor(Math.random() * 500000) + 50000 : 0,
      conversionTime: new Date().toISOString(),
      converted,
    });
  }
  return journeys;
};

// 실시간 데이터 변동 시뮬레이션
export const simulateRealTimeUpdate = (currentData: ChannelData[]): ChannelData[] => {
  return currentData.map(channel => ({
    ...channel,
    impressions: channel.impressions + Math.floor(Math.random() * 1000) - 500,
    clicks: channel.clicks + Math.floor(Math.random() * 50) - 25,
    conversions: channel.conversions + Math.floor(Math.random() * 10) - 5,
    score: Math.max(0, Math.min(100, channel.score + (Math.random() * 4) - 2)),
    roas: Number((channel.roas + (Math.random() * 0.4) - 0.2).toFixed(1))
  }));
};

// 대시보드 데이터 생성
export const generateDashboardData = (): DashboardData => {
  const channelData = generateChannelData();
  const trendData = generateTrendData();
  const customerJourney = generateCustomerJourneys(30);
  const metrics = {
    impressions: channelData.reduce((sum, c) => sum + c.impressions, 0),
    clicks: channelData.reduce((sum, c) => sum + c.clicks, 0),
    conversions: channelData.reduce((sum, c) => sum + c.conversions, 0),
    revenue: Math.floor(Math.random() * 10000000) + 1000000,
    roas: Number((channelData.reduce((sum, c) => sum + c.roas, 0) / channelData.length).toFixed(1)),
  };
  return {
    channelData,
    trendData,
    customerJourney,
    metrics,
    lastUpdated: new Date().toISOString(),
  };
}; 