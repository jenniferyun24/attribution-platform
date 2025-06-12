import { NextApiRequest, NextApiResponse } from 'next';
import { generateMockData } from '@/lib/mockData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  const mockData = generateMockData();

  // Simulate API delay
  setTimeout(() => {
    switch (path?.[0]) {
      case 'dashboard':
        res.status(200).json(mockData);
        break;
      case 'channels':
        res.status(200).json(mockData.channelData);
        break;
      case 'trends':
        res.status(200).json(mockData.trendData);
        break;
      case 'journeys':
        res.status(200).json(mockData.customerJourney);
        break;
      default:
        res.status(404).json({ error: 'Not found' });
    }
  }, 500);
} 