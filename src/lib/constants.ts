export const CHANNELS = [
  'Instagram',
  'TikTok',
  'Naver Search',
  'Musinsa',
  'Own Store',
] as const;

export const METRICS = {
  IMPRESSIONS: 'impressions',
  CLICKS: 'clicks',
  CONVERSIONS: 'conversions',
  REVENUE: 'revenue',
  ROAS: 'roas',
  CTR: 'ctr',
  CVR: 'cvr',
} as const;

export const DATE_RANGES = [
  { label: 'Last 7 days', value: '7d' },
  { label: 'Last 30 days', value: '30d' },
  { label: 'Last 90 days', value: '90d' },
  { label: 'This month', value: 'thisMonth' },
  { label: 'Last month', value: 'lastMonth' },
] as const;

export const API_ENDPOINTS = {
  DASHBOARD: '/api/mock/dashboard',
  CHANNELS: '/api/mock/channels',
  TRENDS: '/api/mock/trends',
  JOURNEYS: '/api/mock/journeys',
} as const;

export const RECOMMENDATION_IMPACT = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;

export const RECOMMENDATION_CATEGORY = {
  BUDGET: 'budget',
  CHANNEL: 'channel',
  CREATIVE: 'creative',
} as const; 