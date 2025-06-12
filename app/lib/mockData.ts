import { Channel, TrendData, DashboardData, CustomerJourney } from '../types';

const CHANNEL_NAMES = ['Instagram', 'TikTok', 'Naver Search', 'Musinsa', 'Own Store', 'Google Ads', 'Facebook Ads'];
const CATEGORIES = ['Brand Awareness', 'Interest Generation', 'Purchase Conversion'] as const;

// 채널 데이터 생성
export const generateChannelData = (): Channel[] => {
  return CHANNEL_NAMES.map((name, index) => ({
    id: `channel-${index}`,
    name,
    score: Math.floor(Math.random() * 30) + 70,
    budget: Math.floor(Math.random() * 100000) + 100000,
    roas: Number((Math.random() * 5 + 2).toFixed(1)),
    impressions: Math.floor(Math.random() * 1000000) + 500000,
    clicks: Math.floor(Math.random() * 50000) + 10000,
    conversions: Math.floor(Math.random() * 5000) + 1000,
    category: CATEGORIES[index % 3]
  }));
};

// 트렌드 데이터 생성 (최근 30일)
export const generateTrendData = (): TrendData[] => {
  const trends: TrendData[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const channelScores: { [key: string]: number } = {};
    CHANNEL_NAMES.forEach(channel => {
      channelScores[channel] = Math.floor(Math.random() * 30) + 70;
    });
    
    trends.push({
      date: date.toISOString().split('T')[0],
      attribution: Math.floor(Math.random() * 15) + 75,
      channels: channelScores
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
        channel: CHANNEL_NAMES[Math.floor(Math.random() * CHANNEL_NAMES.length)],
        timestamp: timestamp.toISOString(),
        action: ['view', 'click', 'search', 'purchase'][Math.floor(Math.random() * 4)] as any,
        value: j === touchpointCount - 1 ? Math.floor(Math.random() * 500000) + 50000 : undefined
      });
    }
    
    const converted = Math.random() > 0.3;
    
    journeys.push({
      id: `journey-${i}`,
      customerId: `customer-${Math.floor(Math.random() * 1000)}`,
      touchpoints,
      converted,
      revenue: converted ? Math.floor(Math.random() * 500000) + 50000 : undefined
    });
  }
  
  return journeys;
};

// 실시간 데이터 변동 시뮬레이션
export const simulateRealTimeUpdate = (currentData: Channel[]): Channel[] => {
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
  const channels = generateChannelData();
  const trends = generateTrendData();
  
  const totalBudget = channels.reduce((sum, channel) => sum + channel.budget, 0);
  const averageROAS = channels.reduce((sum, channel) => sum + channel.roas, 0) / channels.length;
  const attributionScore = Math.floor(Math.random() * 15) + 75;
  
  return {
    channels,
    trends,
    totalBudget,
    averageROAS,
    attributionScore,
    lastUpdated: new Date().toISOString()
  };
}; 