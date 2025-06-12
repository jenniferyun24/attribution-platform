import { CHANNELS, METRICS, RECOMMENDATION_IMPACT, RECOMMENDATION_CATEGORY } from '../lib/constants';
// If the above import fails, try './lib/constants' instead.

export type Channel = typeof CHANNELS[number];
export type Metric = typeof METRICS[keyof typeof METRICS];
export type RecommendationImpact = typeof RECOMMENDATION_IMPACT[keyof typeof RECOMMENDATION_IMPACT];
export type RecommendationCategory = typeof RECOMMENDATION_CATEGORY[keyof typeof RECOMMENDATION_CATEGORY];

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface ChannelData {
  name: Channel;
  score: number;
  budget: number;
  roas: number;
  impressions: number;
  clicks: number;
  conversions: number;
}

export interface TrendData {
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
  revenue: number;
}

export interface CustomerJourney {
  touchpoints: {
    channel: Channel;
    timestamp: string;
    type: 'impression' | 'click' | 'conversion';
  }[];
  conversionValue: number;
  conversionTime: string;
  converted: boolean;
}

export interface DashboardData {
  channelData: ChannelData[];
  trendData: TrendData[];
  customerJourney: CustomerJourney[];
  metrics: {
    [key in Metric]?: number;
  };
  lastUpdated: string;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: RecommendationImpact;
  category: RecommendationCategory;
} 