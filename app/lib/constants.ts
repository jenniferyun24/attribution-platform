export const CHANNELS = [
  'Google Analytics',
  'Facebook Ads',
  'Google Ads',
  'Naver Ads',
  'Instagram Business',
  'YouTube Analytics',
] as const;

export const METRICS = {
  impressions: 'Impressions',
  clicks: 'Clicks',
  conversions: 'Conversions',
  revenue: 'Revenue',
  roas: 'ROAS',
} as const;

export const RECOMMENDATION_IMPACT = {
  high: 'High',
  medium: 'Medium',
  low: 'Low',
} as const;

export const RECOMMENDATION_CATEGORY = {
  budget: 'Budget Optimization',
  creative: 'Creative Improvement',
  targeting: 'Audience Targeting',
  bidding: 'Bidding Strategy',
} as const; 