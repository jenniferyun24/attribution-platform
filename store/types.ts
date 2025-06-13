export interface User {
  id: string;
  email: string;
  name: string;
}

export interface DashboardData {
  // Add your dashboard data structure here
  metrics: {
    [key: string]: number;
  };
  lastUpdated: string;
} 