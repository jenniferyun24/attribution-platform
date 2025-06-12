export interface Channel {
  id: string;
  name: string;
  score: number;
  budget: number;
  roas: number;
  impressions: number;
  clicks: number;
  conversions: number;
  category: 'Brand Awareness' | 'Interest Generation' | 'Purchase Conversion';
}

export interface TrendData {
  date: string;
  attribution: number;
  channels: {
    [key: string]: number;
  };
}

export interface DashboardData {
  channels: Channel[];
  trends: TrendData[];
  totalBudget: number;
  averageROAS: number;
  attributionScore: number;
  lastUpdated: string;
}

export interface CustomerJourney {
  id: string;
  customerId: string;
  touchpoints: {
    channel: string;
    timestamp: string;
    action: 'view' | 'click' | 'search' | 'purchase';
    value?: number;
  }[];
  converted: boolean;
  revenue?: number;
} 