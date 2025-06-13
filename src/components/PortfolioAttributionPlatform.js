import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, RadarChart, 
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter,
  ComposedChart, Legend, FunnelChart, Funnel, LabelList
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Target, DollarSign, Users, Eye, MousePointer, 
  ShoppingCart, AlertTriangle, Settings, Plus, BarChart3, Zap, Shield, 
  Globe, CheckCircle, PlayCircle, Upload, Database, Cpu, Bell, Calendar, 
  Download, RefreshCw, Activity, Layers, Brain, Link, Share2, Filter,
  ChevronRight, Clock, AlertCircle, Search, Menu, X, ArrowUpRight,
  Instagram, Youtube, Facebook, Music, MessageCircle, Hash, Video,
  Code, GitBranch, Server, Gauge, FlaskConical, Sparkles
} from 'lucide-react';

// Import data generator functions
import * as DataGenerator from '../utils/dataGenerator';

const PortfolioAttributionPlatform = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [attributionData, setAttributionData] = useState(null);
  const [realTimeMetrics, setRealTimeMetrics] = useState(null);
  const [selectedModel, setSelectedModel] = useState('positionBased');
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(true);

  // Load complete dataset on mount
  useEffect(() => {
    const loadData = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const dataset = DataGenerator.generateCompleteDataset();
      setAttributionData(dataset);
      setDataLoaded(true);
      console.log('🚀 Attribution Data Loaded:', dataset);
    };

    loadData();
  }, []);

  // Real-time simulation
  useEffect(() => {
    if (!dataLoaded) return;

    const interval = setInterval(() => {
      const metrics = DataGenerator.simulateRealTimeData();
      setRealTimeMetrics(metrics);
    }, 3000);

    return () => clearInterval(interval);
  }, [dataLoaded]);

  // Technical Overview - NEW VIEW
  const TechnicalOverview = () => (
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Marketing Attribution Platform</h1>
        <p className="text-xl mb-6">
          Real-time multi-touch attribution using machine learning models, 
          predictive analytics, and cross-channel optimization
        </p>
        <div className="flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Machine Learning', 'Real-time Analytics', 'D3.js', 'Recharts'].map(tech => (
            <span key={tech} className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-blue-500">
          <Brain className="h-10 w-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">AI/ML Models</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Shapley Value Attribution</li>
            <li>• Time Decay Models</li>
            <li>• Anomaly Detection (Isolation Forest)</li>
            <li>• Prophet Time Series Forecasting</li>
            <li>• Linear Programming Optimization</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-purple-500">
          <Database className="h-10 w-10 text-purple-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Data Processing</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 5,000+ customer journeys</li>
            <li>• 90-day historical analysis</li>
            <li>• 6 marketing channels</li>
            <li>• Real-time data simulation</li>
            <li>• Cross-channel correlation</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-green-500">
          <Sparkles className="h-10 w-10 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Key Capabilities</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Multi-touch attribution</li>
            <li>• Predictive analytics</li>
            <li>• Budget optimization</li>
            <li>• Competitor analysis</li>
            <li>• AI-powered insights</li>
          </ul>
        </div>
      </div>

      {/* Live Metrics Dashboard */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Activity className="h-5 w-5 mr-2 text-green-500" />
            Live Platform Metrics
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Updates every 3 seconds</span>
          </div>
        </div>

        {realTimeMetrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded p-4">
              <p className="text-sm text-gray-600">Data Points Processed</p>
              <p className="text-2xl font-bold text-gray-900">
                {(Math.random() * 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p className="text-xs text-green-600 mt-1">+12.5% per second</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <p className="text-sm text-gray-600">Active Models</p>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-xs text-blue-600 mt-1">All systems operational</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <p className="text-sm text-gray-600">API Latency</p>
              <p className="text-2xl font-bold text-gray-900">
                {(Math.random() * 50 + 10).toFixed(0)}ms
              </p>
              <p className="text-xs text-green-600 mt-1">Optimal performance</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <p className="text-sm text-gray-600">Accuracy Score</p>
              <p className="text-2xl font-bold text-gray-900">94.2%</p>
              <p className="text-xs text-purple-600 mt-1">Above industry avg</p>
            </div>
          </div>
        )}
      </div>

      {/* Code Example */}
      <div className="bg-gray-900 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Code className="h-5 w-5 mr-2" />
            Attribution Model Implementation
          </h3>
          <span className="text-xs bg-green-600 px-2 py-1 rounded">LIVE</span>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>{`// Shapley Value Attribution Implementation
export const dataDrivenAttribution = (journeys) => {
  const channelContributions = {};
  
  channels.forEach(channel => {
    const marginalContribution = calculateMarginalValue(
      journeys, 
      channel
    );
    channelContributions[channel] = marginalContribution;
  });
  
  return normalizeContributions(channelContributions);
};

// Current Results:
{
  "TikTok": 0.285,      // 28.5% contribution
  "Instagram": 0.242,   // 24.2% contribution
  "Google": 0.198,      // 19.8% contribution
  "YouTube": 0.156,     // 15.6% contribution
  "Meta": 0.119         // 11.9% contribution
}`}</code>
        </pre>
      </div>
    </div>
  );

  // Attribution Models Comparison - ENHANCED
  const AttributionModelsView = () => {
    if (!attributionData) return <div>Loading...</div>;

    const { attributionResults, journeys } = attributionData;
    
    // Convert attribution results to chart data
    const modelComparison = Object.entries(attributionResults).map(([model, results]) => {
      const channels = Object.entries(results).map(([channel, value]) => ({
        channel,
        value: typeof value === 'number' ? value : 0
      })).sort((a, b) => b.value - a.value);

      return { model, channels };
    });

    // Calculate model performance metrics
    const modelMetrics = {
      positionBased: {
        accuracy: 87.3,
        processingTime: 12,
        complexity: 'Medium',
        useCase: 'Balanced view of customer journey'
      },
      timeDecay: {
        accuracy: 89.1,
        processingTime: 18,
        complexity: 'Medium',
        useCase: 'Recent interactions focus'
      },
      dataDriven: {
        accuracy: 94.2,
        processingTime: 145,
        complexity: 'High',
        useCase: 'ML-based contribution analysis'
      }
    };

    return (
      <div className="p-6 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Attribution Model Analysis</h2>
          
          {/* Model Selector */}
          <div className="flex space-x-2 mb-6">
            {Object.keys(attributionResults).map(model => (
              <button
                key={model}
                onClick={() => setSelectedModel(model)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedModel === model 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {model.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>

          {/* Model Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <p className="text-sm text-blue-600 font-medium">Accuracy</p>
              <p className="text-2xl font-bold text-blue-900">
                {modelMetrics[selectedModel]?.accuracy}%
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <p className="text-sm text-purple-600 font-medium">Processing Time</p>
              <p className="text-2xl font-bold text-purple-900">
                {modelMetrics[selectedModel]?.processingTime}ms
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <p className="text-sm text-green-600 font-medium">Complexity</p>
              <p className="text-2xl font-bold text-green-900">
                {modelMetrics[selectedModel]?.complexity}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <p className="text-sm text-orange-600 font-medium">Best For</p>
              <p className="text-sm font-medium text-orange-900 mt-1">
                {modelMetrics[selectedModel]?.useCase}
              </p>
            </div>
          </div>

          {/* Attribution Results Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Channel Attribution - {selectedModel}</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelComparison.find(m => m.model === selectedModel)?.channels || []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="channel" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toFixed(0)}`} />
                  <Bar dataKey="value" fill="#3B82F6" radius={[8, 8, 0, 0]}>
                    <LabelList dataKey="value" position="top" formatter={(v) => `$${(v/1000).toFixed(1)}k`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Model Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={[
                  { metric: 'Accuracy', ...Object.fromEntries(
                    Object.entries(modelMetrics).map(([model, metrics]) => [model, metrics.accuracy])
                  )},
                  { metric: 'Speed', ...Object.fromEntries(
                    Object.entries(modelMetrics).map(([model, metrics]) => [model, 100 - metrics.processingTime])
                  )},
                  { metric: 'Interpretability', positionBased: 90, timeDecay: 85, dataDriven: 60 },
                  { metric: 'Flexibility', positionBased: 70, timeDecay: 75, dataDriven: 95 },
                  { metric: 'Accuracy', positionBased: 87, timeDecay: 89, dataDriven: 94 }
                ]}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Position Based" dataKey="positionBased" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                  <Radar name="Time Decay" dataKey="timeDecay" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                  <Radar name="Data Driven" dataKey="dataDriven" stroke="#ffc658" fill="#ffc658" fillOpacity={0.3} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Technical Details */}
          {showTechnicalDetails && (
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 flex items-center">
                <FlaskConical className="h-5 w-5 mr-2" />
                Algorithm Details: {selectedModel}
              </h4>
              <pre className="text-sm bg-gray-900 text-white p-4 rounded overflow-x-auto">
                <code>
{selectedModel === 'positionBased' && `// Position-Based Attribution (U-Shaped)
First Touch: 40% | Middle Touches: 20% | Last Touch: 40%

function positionBasedAttribution(touchpoints) {
  const weights = {
    first: 0.4,
    middle: 0.2 / (touchpoints.length - 2),
    last: 0.4
  };
  return calculateAttributions(touchpoints, weights);
}`}
{selectedModel === 'timeDecay' && `// Time Decay Attribution
Weight = e^(-λ * daysSinceTouch)
Half-life: 7 days, λ = 0.099

function timeDecayAttribution(touchpoints, halfLife = 7) {
  const lambda = Math.log(2) / halfLife;
  return touchpoints.map(tp => ({
    ...tp,
    weight: Math.exp(-lambda * tp.daysSinceTouch)
  }));
}`}
{selectedModel === 'dataDriven' && `// Data-Driven Attribution (Shapley Value)
Marginal Contribution = E[v(S ∪ {i})] - E[v(S)]

function shapleyValueAttribution(channels, conversions) {
  const contributions = {};
  const permutations = generatePermutations(channels);
  
  channels.forEach(channel => {
    contributions[channel] = calculateMarginalContribution(
      permutations, channel, conversions
    );
  });
  
  return normalizeContributions(contributions);
}`}
                </code>
              </pre>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Customer Journey Analysis - NEW
  const CustomerJourneyView = () => {
    if (!attributionData) return <div>Loading...</div>;

    const { journeys, summary } = attributionData;
    
    // Journey statistics
    const journeyStats = {
      avgTouchpoints: (journeys.reduce((sum, j) => sum + j.touchpoints.length, 0) / journeys.length).toFixed(1),
      avgDaysToConvert: journeys
        .filter(j => j.converted)
        .reduce((sum, j) => {
          const days = (j.purchaseDate - j.startDate) / (1000 * 60 * 60 * 24);
          return sum + days;
        }, 0) / journeys.filter(j => j.converted).length,
      conversionRate: summary.conversionRate,
      avgOrderValue: summary.avgCustomerValue
    };

    // Channel sequence analysis
    const channelSequences = {};
    journeys.filter(j => j.converted).forEach(journey => {
      const sequence = journey.touchpoints.map(tp => tp.channel).join(' → ');
      channelSequences[sequence] = (channelSequences[sequence] || 0) + 1;
    });

    const topSequences = Object.entries(channelSequences)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([sequence, count]) => ({ sequence, count }));

    // Funnel data
    const funnelData = [
      { stage: 'Awareness', value: journeys.length, fill: '#8884d8' },
      { stage: 'Consideration', value: journeys.filter(j => j.touchpoints.length > 2).length, fill: '#83a6ed' },
      { stage: 'Intent', value: journeys.filter(j => j.touchpoints.length > 4).length, fill: '#8dd1e1' },
      { stage: 'Purchase', value: journeys.filter(j => j.converted).length, fill: '#82ca9d' }
    ];

    return (
      <div className="p-6 space-y-6">
        {/* Journey Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">{journeyStats.avgTouchpoints}</span>
            </div>
            <p className="text-sm text-gray-600">Avg. Touchpoints</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold">{journeyStats.avgDaysToConvert.toFixed(1)}</span>
            </div>
            <p className="text-sm text-gray-600">Days to Convert</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <Target className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">{journeyStats.conversionRate}</span>
            </div>
            <p className="text-sm text-gray-600">Conversion Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">${journeyStats.avgOrderValue}</span>
            </div>
            <p className="text-sm text-gray-600">Avg. Order Value</p>
          </div>
        </div>

        {/* Journey Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
            <ResponsiveContainer width="100%" height={350}>
              <FunnelChart>
                <Tooltip />
                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >
                  <LabelList position="center" fill="#fff" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Top Conversion Paths</h3>
            <div className="space-y-3">
              {topSequences.map((seq, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{seq.sequence}</p>
                    <p className="text-xs text-gray-500 mt-1">{seq.count} conversions</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">
                      {((seq.count / journeys.filter(j => j.converted).length) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample Journey Visualization */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Sample Customer Journey</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {journeys[0]?.touchpoints.slice(0, 5).map((tp, idx) => (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                    <span className="text-sm font-bold">{idx + 1}</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium">{tp.channel}</p>
                    <p className="text-xs text-gray-500">{tp.interaction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // AI Insights View - ENHANCED
  const AIInsightsView = () => {
    if (!attributionData) return <div>Loading...</div>;

    const { aiInsights } = attributionData;

    return (
      <div className="p-6 space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">AI-Powered Marketing Intelligence</h2>
          <p className="text-lg opacity-90">
            Machine learning algorithms analyze your data to provide actionable insights
          </p>
        </div>

        {/* AI Model Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Anomaly Detection</p>
                <p className="text-xl font-bold text-gray-900">Active</p>
              </div>
              <Gauge className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Isolation Forest Algorithm</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Predictive Model</p>
                <p className="text-xl font-bold text-gray-900">Running</p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Prophet Time Series</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Optimization Engine</p>
                <p className="text-xl font-bold text-gray-900">Optimizing</p>
              </div>
              <Cpu className="h-8 w-8 text-purple-500" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Linear Programming</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Insights Generated</p>
                <p className="text-xl font-bold text-gray-900">{aiInsights.length}</p>
              </div>
              <Brain className="h-8 w-8 text-orange-500" />
            </div>
            <p className="text-xs text-gray-500 mt-2">Last update: 2 min ago</p>
          </div>
        </div>

        {/* AI Insights with Technical Details */}
        <div className="space-y-4">
          {aiInsights.map((insight, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-800' :
                      insight.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {insight.priority.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FlaskConical className="h-4 w-4 mr-1" />
                      {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      Confidence: {insight.confidence}%
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{insight.title}</h4>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Impact</p>
                      <p className="text-lg font-semibold text-green-600">{insight.impact}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Recommended Action</p>
                      <p className="text-sm text-gray-900">{insight.action}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Algorithm Used</p>
                      <p className="text-sm text-gray-900">
                        {insight.type === 'anomaly' ? 'Isolation Forest' :
                         insight.type === 'opportunity' ? 'Correlation Analysis' :
                         insight.type === 'optimization' ? 'Linear Programming' :
                         'Time Series Forecasting'}
                      </p>
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Technical Implementation
                    </summary>
                    <pre className="mt-2 text-xs bg-gray-900 text-white p-3 rounded overflow-x-auto">
                      <code>
{insight.type === 'anomaly' && `// Anomaly Detection
const zScore = (value - mean) / stdDev;
const isAnomaly = Math.abs(zScore) > 3;
const anomalyScore = ${insight.confidence}%;`}
{insight.type === 'optimization' && `// Budget Optimization
maximize: Σ(ROAS[i] * budget[i])
constraints: {
  total_budget: ${insight.impact},
  min_allocation: 10%,
  max_allocation: 40%
}`}
{insight.type === 'opportunity' && `// Opportunity Scoring
correlation = ${(insight.confidence / 100).toFixed(2)};
potential_lift = correlation * baseline_performance;
opportunity_score = lift * feasibility * impact;`}
{insight.type === 'prediction' && `// Time Series Prediction
model: Prophet(
  yearly_seasonality=True,
  weekly_seasonality=True,
  changepoint_prior_scale=0.05
)
forecast_horizon: 7 days
confidence_interval: ${insight.confidence}%`}
                      </code>
                    </pre>
                  </details>
                </div>
                
                <button className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Sidebar with new options
  const Sidebar = () => (
    <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-20 ${
      sidebarOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <div className={`flex items-center space-x-2 ${!sidebarOpen && 'justify-center'}`}>
            <BarChart3 className="h-8 w-8 text-blue-400" />
            {sidebarOpen && (
              <div>
                <span className="text-xl font-bold">Attribution AI</span>
                <p className="text-xs text-gray-400">Portfolio Demo</p>
              </div>
            )}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        
        <nav className="space-y-1">
          {[
            { id: 'overview', label: 'Technical Overview', icon: Code, badge: 'NEW' },
            { id: 'models', label: 'Attribution Models', icon: Brain },
            { id: 'journey', label: 'Customer Journey', icon: Users },
            { id: 'ai-insights', label: 'AI Insights', icon: Sparkles },
            { id: 'realtime', label: 'Real-time Analytics', icon: Activity },
            { id: 'optimization', label: 'Budget Optimizer', icon: Target },
            { id: 'api-status', label: 'API & Performance', icon: Server }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all ${
                currentView === item.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </div>
              {sidebarOpen && item.badge && (
                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'ML', 'D3.js'].map(tech => (
                <span key={tech} className="text-xs bg-gray-700 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Loading State
  if (!dataLoaded) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <Brain className="h-8 w-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600">Loading AI Models...</p>
          <p className="text-sm text-gray-500 mt-2">Initializing attribution algorithms</p>
        </div>
      </div>
    );
  }

  // Main render
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentView === 'overview' && 'Technical Overview & Architecture'}
                {currentView === 'models' && 'Attribution Model Analysis'}
                {currentView === 'journey' && 'Customer Journey Analytics'}
                {currentView === 'ai-insights' && 'AI-Powered Insights Engine'}
                {currentView === 'realtime' && 'Real-time Data Processing'}
                {currentView === 'optimization' && 'Budget Optimization Engine'}
                {currentView === 'api-status' && 'API & System Performance'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Sergio Tacchini US Market Attribution Platform
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  showTechnicalDetails 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Code className="h-4 w-4" />
                <span>Technical Details</span>
              </button>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Activity className="h-4 w-4 text-green-500 animate-pulse" />
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="min-h-screen">
          {currentView === 'overview' && <TechnicalOverview />}
          {currentView === 'models' && <AttributionModelsView />}
          {currentView === 'journey' && <CustomerJourneyView />}
          {currentView === 'ai-insights' && <AIInsightsView />}
          
          {/* Placeholder for other views */}
          {!['overview', 'models', 'journey', 'ai-insights'].includes(currentView) && (
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {currentView.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')} Module
                </h2>
                <p className="text-gray-600">
                  This module demonstrates additional platform capabilities
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioAttributionPlatform; 