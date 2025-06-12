import React from 'react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'budget' | 'channel' | 'creative';
}

const mockRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Increase Instagram Budget',
    description: 'Instagram is showing strong ROAS. Consider increasing budget by 20%.',
    impact: 'high',
    category: 'budget'
  },
  {
    id: '2',
    title: 'Optimize TikTok Ads',
    description: 'TikTok CTR is below average. Review ad creative and targeting.',
    impact: 'medium',
    category: 'creative'
  },
  {
    id: '3',
    title: 'Expand Naver Search',
    description: 'High conversion rate on Naver Search. Consider expanding keywords.',
    impact: 'high',
    category: 'channel'
  }
];

const AIRecommendations: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">AI Recommendations</h2>
      <div className="space-y-4">
        {mockRecommendations.map((rec) => (
          <div key={rec.id} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium">{rec.title}</h3>
            <p className="text-gray-600 text-sm mt-1">{rec.description}</p>
            <div className="flex items-center mt-2 space-x-2">
              <span className={`text-xs px-2 py-1 rounded ${
                rec.impact === 'high' ? 'bg-red-100 text-red-800' :
                rec.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {rec.impact.toUpperCase()}
              </span>
              <span className="text-xs text-gray-500">{rec.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations; 