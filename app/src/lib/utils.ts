export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num);
};

export const formatDate = (date: string | Date): string => {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const calculateROAS = (revenue: number, cost: number): number => {
  if (cost === 0) return 0;
  return Number((revenue / cost).toFixed(2));
};

export const calculateCTR = (clicks: number, impressions: number): number => {
  if (impressions === 0) return 0;
  return Number(((clicks / impressions) * 100).toFixed(2));
};

export const calculateCVR = (conversions: number, clicks: number): number => {
  if (clicks === 0) return 0;
  return Number(((conversions / clicks) * 100).toFixed(2));
}; 