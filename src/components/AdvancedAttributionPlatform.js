import React, { useState, useEffect } from 'react';
import { useAttributionData } from '../hooks/useAttributionData';
import { format } from 'date-fns';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import {
  Menu, Bell, Download, TrendingUp, TrendingDown,
  Eye, MousePointer, Brain, AlertCircle, ArrowRight
} from 'lucide-react';

const AdvancedAttributionPlatform = () => {
  const { data, loading, realTimeMetrics } = useAttributionData();
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 7 days');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCompetitors, setSelectedCompetitors] = useState(['Nike', 'Adidas']);
  const [notifications, setNotifications] = useState([]);

  // 로딩 상태 처리
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading attribution data...</p>
        </div>
      </div>
    );
  }

  // 데이터 구조 검증
  if (!data || !data.journeys || data.journeys.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error: Invalid data structure</p>
        </div>
      </div>
    );
  }

  const { 
    journeys, 
    timeSeriesData, 
    competitorData, 
    attributionResults, 
    aiInsights,
    summary 
  } = data;

  // 채널 성과 데이터 준비
  const channelPerformance = timeSeriesData
    .filter(d => d.date === format(new Date(), 'yyyy-MM-dd'))
    .map(d => ({
      channel: d.channel,
      spend: d.spend,
      impressions: d.impressions,
      clicks: d.clicks,
      conversions: d.conversions,
      roas: d.roas.toFixed(1),
      trend: Math.random() * 20 - 10,
      icon: {
        'TikTok': '🎵',
        'Instagram': '📱',
        'YouTube': '📹',
        'Google': '🔍',
        'Meta': '👥',
        'Pinterest': '📌'
      }[d.channel]
    }));

  // 어트리뷰션 모델 비교 데이터
  const attributionModels = Object.entries(attributionResults).map(([model, results]) => {
    const totalRevenue = Object.values(results).reduce((sum, val) => sum + val, 0);
    return {
      model: model.replace(/([A-Z])/g, ' $1').trim(),
      sergio: (totalRevenue / 1000000).toFixed(1),
      industry: (totalRevenue / 1000000 * 0.8).toFixed(1)
    };
  });

  // Sidebar Component
  const Sidebar = () => (
    <div className={`bg-gray-900 text-white w-64 min-h-screen transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Attribution Platform</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-800 rounded">
            <Menu size={20} />
          </button>
        </div>
      </div>
      <nav className="p-4">
        <button
          onClick={() => setCurrentView('dashboard')}
          className={`w-full text-left p-2 rounded mb-2 ${currentView === 'dashboard' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentView('cross-channel')}
          className={`w-full text-left p-2 rounded mb-2 ${currentView === 'cross-channel' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
        >
          Cross-Channel Analysis
        </button>
        <button
          onClick={() => setCurrentView('ai-insights')}
          className={`w-full text-left p-2 rounded mb-2 ${currentView === 'ai-insights' ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
        >
          AI Insights
        </button>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <div>
            <p className="text-sm font-medium">Sergio Tacchini</p>
            <p className="text-xs text-gray-400">Premium Account</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Header Component
  const Header = () => (
    <div className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {currentView.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h2>
          <p className="text-sm text-gray-500">Last updated: {format(new Date(), 'MMM d, yyyy HH:mm')}</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="border rounded px-3 py-1"
          >
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Custom Range</option>
          </select>
          <button className="relative p-2 hover:bg-gray-100 rounded">
            <Bell size={20} />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>
      {realTimeMetrics && (
        <div className="flex items-center space-x-4 text-sm mt-2">
          <span className="text-gray-500">Live:</span>
          {realTimeMetrics.metrics.slice(0, 3).map(metric => (
            <span key={metric.channel} className="flex items-center space-x-1">
              <span className="font-medium">{metric.channel}:</span>
              <span className="text-green-600">
                {metric.conversions} conversions
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  );

  // Dashboard View
  const DashboardView = () => (
    <div className="p-6">
      {/* Real-time Metrics */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Total Spend</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">${summary.totalCustomers.toLocaleString()}</p>
            <span className="text-green-500 flex items-center">
              <TrendingUp size={16} />
              <span className="ml-1">+12%</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Impressions</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">2.4M</p>
            <span className="text-green-500 flex items-center">
              <TrendingUp size={16} />
              <span className="ml-1">+8%</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Conversions</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">12.5K</p>
            <span className="text-red-500 flex items-center">
              <TrendingDown size={16} />
              <span className="ml-1">-3%</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Average ROAS</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">3.2x</p>
            <span className="text-green-500 flex items-center">
              <TrendingUp size={16} />
              <span className="ml-1">+15%</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Active Alerts</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">5</p>
            <span className="text-yellow-500 flex items-center">
              <AlertCircle size={16} />
            </span>
          </div>
        </div>
      </div>

      {/* Channel Performance Matrix */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Channel Performance Matrix</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Channel</th>
                <th className="px-4 py-2 text-right">Spend</th>
                <th className="px-4 py-2 text-right">Impressions</th>
                <th className="px-4 py-2 text-right">Clicks</th>
                <th className="px-4 py-2 text-right">Conversions</th>
                <th className="px-4 py-2 text-right">ROAS</th>
                <th className="px-4 py-2 text-right">Trend</th>
              </tr>
            </thead>
            <tbody>
              {channelPerformance.map((channel) => (
                <tr key={channel.channel} className="border-t">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span>{channel.icon}</span>
                      <span>{channel.channel}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-right">${channel.spend.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right">{(channel.impressions / 1000000).toFixed(1)}M</td>
                  <td className="px-4 py-2 text-right">{(channel.clicks / 1000).toFixed(1)}K</td>
                  <td className="px-4 py-2 text-right">{channel.conversions.toLocaleString()}</td>
                  <td className="px-4 py-2 text-right">{channel.roas}x</td>
                  <td className="px-4 py-2 text-right">
                    <span className={`flex items-center justify-end ${channel.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {channel.trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      <span className="ml-1">{Math.abs(channel.trend).toFixed(1)}%</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Attribution Model Performance</h3>
          <BarChart width={500} height={300} data={attributionModels}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sergio" fill="#3B82F6" name="Sergio Tacchini" />
            <Bar dataKey="industry" fill="#9CA3AF" name="Industry Average" />
          </BarChart>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Customer Journey by Channel</h3>
          <AreaChart width={500} height={300} data={timeSeriesData.slice(-30)}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="conversions" stroke="#3B82F6" fill="#93C5FD" />
          </AreaChart>
        </div>
      </div>

      {/* AI Insights Preview */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Brain className="mr-2" />
            AI-Powered Insights
          </h3>
          <button
            onClick={() => setCurrentView('ai-insights')}
            className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded"
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {aiInsights.slice(0, 3).map((insight, index) => (
            <div key={index} className="bg-white/10 rounded p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  insight.priority === 'high' ? 'bg-red-500' :
                  insight.priority === 'medium' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}>
                  {insight.priority}
                </span>
                <span className="text-sm text-blue-200">{insight.type}</span>
              </div>
              <h4 className="font-medium mb-2">{insight.title}</h4>
              <p className="text-sm text-blue-100 mb-2">{insight.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span>Impact: {insight.impact}</span>
                <span>Confidence: {insight.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Cross-Channel View
  const CrossChannelView = () => (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Cross-Channel Customer Journey</h3>
          <div className="h-96 flex items-center justify-center text-gray-500">
            Interactive Sankey Diagram Placeholder
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Channel Synergy Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Channel Combination</th>
                  <th className="px-4 py-2 text-right">Correlation Score</th>
                  <th className="px-4 py-2 text-right">Conversion Lift</th>
                  <th className="px-4 py-2 text-right">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(calculateChannelCorrelation(timeSeriesData)).map(([channel1, correlations]) => (
                  Object.entries(correlations).map(([channel2, correlation]) => {
                    if (channel1 !== channel2 && correlation > 0.7) {
                      return (
                        <tr key={`${channel1}-${channel2}`} className="border-t">
                          <td className="px-4 py-2">{channel1} + {channel2}</td>
                          <td className="px-4 py-2 text-right">{(correlation * 100).toFixed(1)}%</td>
                          <td className="px-4 py-2 text-right">+{(correlation * 30).toFixed(1)}%</td>
                          <td className="px-4 py-2 text-right text-blue-600">Increase cross-promotion</td>
                        </tr>
                      );
                    }
                    return null;
                  })
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Multi-Touch Attribution Visualization</h3>
          <RadarChart width={500} height={300} data={[
            { touchpoint: 'First', value: 40 },
            { touchpoint: 'Second', value: 20 },
            { touchpoint: 'Third', value: 15 },
            { touchpoint: 'Fourth', value: 15 },
            { touchpoint: 'Last', value: 10 }
          ]}>
            <PolarGrid />
            <PolarAngleAxis dataKey="touchpoint" />
            <PolarRadiusAxis />
            <Radar name="Attribution" dataKey="value" stroke="#3B82F6" fill="#93C5FD" fillOpacity={0.6} />
          </RadarChart>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Channel Interaction Heatmap</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Heatmap Visualization Placeholder
          </div>
        </div>
      </div>
    </div>
  );

  // AI Insights View
  const AIInsightsView = () => (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Active Insights</h3>
          <p className="text-2xl font-bold">{aiInsights.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Potential Impact</h3>
          <p className="text-2xl font-bold">${(aiInsights.reduce((sum, i) => sum + parseFloat(i.impact.replace(/[^0-9.-]+/g, '')), 0) * 1000).toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Average Confidence</h3>
          <p className="text-2xl font-bold">
            {Math.round(aiInsights.reduce((sum, i) => sum + i.confidence, 0) / aiInsights.length)}%
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 mb-1">Actions Taken</h3>
          <p className="text-2xl font-bold">18</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">AI-Generated Insights</h2>
        </div>
        <div className="divide-y">
          {aiInsights.map((insight, index) => (
            <div key={index} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      insight.priority === 'high' ? 'bg-red-500 text-white' :
                      insight.priority === 'medium' ? 'bg-yellow-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {insight.priority}
                    </span>
                    <span className="text-sm text-gray-500">{insight.type}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-500">Impact: {insight.impact}</span>
                    <span className="text-gray-500">Action: {insight.action}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="mb-2">
                    <div className="text-sm text-gray-500 mb-1">Confidence</div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${insight.confidence}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm mt-1">{insight.confidence}%</div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Take Action
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">AI Model Performance</h3>
          <LineChart width={500} height={300} data={[
            { month: 'Jan', accuracy: 78 },
            { month: 'Feb', accuracy: 82 },
            { month: 'Mar', accuracy: 85 },
            { month: 'Apr', accuracy: 88 },
            { month: 'May', accuracy: 91 },
            { month: 'Jun', accuracy: 93 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#3B82F6" name="Prediction Accuracy" />
          </LineChart>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Insight Categories</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full border-8 border-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">35%</div>
                    <div className="text-sm text-gray-500">Opportunities</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full border-8 border-green-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">28%</div>
                    <div className="text-sm text-gray-500">Optimizations</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full border-8 border-yellow-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">22%</div>
                    <div className="text-sm text-gray-500">Anomalies</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full border-8 border-purple-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15%</div>
                    <div className="text-sm text-gray-500">Predictions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'cross-channel' && <CrossChannelView />}
        {currentView === 'ai-insights' && <AIInsightsView />}
      </div>
    </div>
  );
};

export default AdvancedAttributionPlatform; 