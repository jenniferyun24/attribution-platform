interface ChannelData {
  name: string;
  score: number;
  budget: number;
  roas: number;
  impressions: number;
  clicks: number;
  conversions: number;
}

interface TrendData {
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
}

interface CustomerJourney {
  touchpoints: {
    channel: string;
    timestamp: string;
    type: 'impression' | 'click' | 'conversion';
  }[];
  conversionValue: number;
  conversionTime: string;
}

const generateTrendData = (): TrendData[] => {
  const data: TrendData[] = [];
  const today = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      impressions: Math.floor(Math.random() * 1000000),
      clicks: Math.floor(Math.random() * 50000),
      conversions: Math.floor(Math.random() * 5000),
      revenue: Math.floor(Math.random() * 10000000)
    });
  }
  
  return data;
};

const generateCustomerJourney = (): CustomerJourney[] => {
  const channels = ['Instagram', 'TikTok', 'Naver Search', 'Musinsa', 'Own Store'];
  const journeys: CustomerJourney[] = [];
  
  for (let i = 0; i < 50; i++) {
    const touchpoints: CustomerJourney['touchpoints'] = [];
    const numTouchpoints = Math.floor(Math.random() * 5) + 1;
    const startTime = new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000);
    
    for (let j = 0; j < numTouchpoints; j++) {
      const timestamp = new Date(startTime.getTime() + j * 24 * 60 * 60 * 1000);
      const type: 'impression' | 'click' | 'conversion' = 
        j === numTouchpoints - 1 ? 'conversion' : Math.random() > 0.5 ? 'click' : 'impression';
      
      touchpoints.push({
        channel: channels[Math.floor(Math.random() * channels.length)],
        timestamp: timestamp.toISOString(),
        type
      });
    }
    
    journeys.push({
      touchpoints,
      conversionValue: Math.floor(Math.random() * 1000000),
      conversionTime: touchpoints[touchpoints.length - 1].timestamp
    });
  }
  
  return journeys;
};

export const generateMockData = () => {
  const channels = ['Instagram', 'TikTok', 'Naver Search', 'Musinsa', 'Own Store'];
  
  return {
    channelData: channels.map(name => ({
      name,
      score: Math.floor(Math.random() * 30) + 70,
      budget: Math.floor(Math.random() * 100000) + 100000,
      roas: Number((Math.random() * 5 + 2).toFixed(1)),
      impressions: Math.floor(Math.random() * 1000000),
      clicks: Math.floor(Math.random() * 50000),
      conversions: Math.floor(Math.random() * 5000)
    })),
    trendData: generateTrendData(),
    customerJourney: generateCustomerJourney()
  };
}; 