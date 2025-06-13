import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, LabelList
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Target, DollarSign, Users, Eye, MousePointer, 
  ShoppingCart, AlertTriangle, Settings, Plus, BarChart3, Zap, Shield, 
  Globe, CheckCircle, PlayCircle, Upload, Database, Cpu, Bell, Calendar, 
  Download, RefreshCw, Activity, Layers, Brain, Link, Share2, Filter,
  ChevronRight, Clock, AlertCircle, Search, Menu, X, ArrowUpRight,
  Instagram, Youtube, Facebook, Music, MessageCircle, Hash, Video,
  Code, GitBranch, Server, Gauge, FlaskConical, Sparkles, LogOut,
  Building2, CreditCard, FileText, HelpCircle, PlusCircle, Wallet,
  AlertOctagon, Info, CheckCircle2, XCircle, Lightbulb, TrendingUpIcon,
  ArrowRight, DollarSignIcon
} from 'lucide-react';

const SaaSAttributionPlatform = () => {
  // Core states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('landing');
  const [dashboardView, setDashboardView] = useState('overview');
  const [userCompanyData, setUserCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Demo accounts
  const demoAccounts = {
    'demo@sergiotacchini.com': {
      password: 'demo123',
      company: 'Sergio Tacchini USA',
      industry: 'Tennis Apparel',
      monthlyBudget: 500000,
      isPremium: true
    },
    'demo@startup.com': {
      password: 'demo123',
      company: 'TechStartup Inc.',
      industry: 'SaaS',
      monthlyBudget: 50000,
      isPremium: false
    }
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AttributionAI</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#customers" className="text-gray-600 hover:text-gray-900">Customers</a>
            <button 
              onClick={() => setCurrentView('login')}
              className="btn-primary"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Marketing Attribution
            <br />
            <span className="text-blue-600">For Every Business</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Track, analyze, and optimize your marketing spend across all channels. 
            Get AI-powered insights to maximize ROI and outperform competitors.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                setCurrentUser(demoAccounts['demo@startup.com']);
                setIsAuthenticated(true);
                setCurrentView('dashboard');
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => {
                setCurrentUser(demoAccounts['demo@sergiotacchini.com']);
                setIsAuthenticated(true);
                setCurrentView('dashboard');
              }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Demo (Sergio Tacchini)
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Login Page Component
  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      
      if (demoAccounts[email] && demoAccounts[email].password === password) {
        setCurrentUser(demoAccounts[email]);
        setIsAuthenticated(true);
        setCurrentView('dashboard');
      } else {
        setError('Invalid email or password');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Sign in to AttributionAI</h2>
          </div>

          <div className="card">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="your@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full py-3"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Demo Accounts</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Sergio Tacchini (Premium)</p>
                  <p className="text-xs text-blue-700">demo@sergiotacchini.com / demo123</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">TechStartup (Starter)</p>
                  <p className="text-xs text-gray-700">demo@startup.com / demo123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Enhanced Dashboard Components Start ---

  const OverviewDashboard = ({ timeRange }) => {
    const metrics = {
      totalSpend: 45000,
      spendChange: -5.2,
      conversions: 1250,
      conversionChange: 15.4,
      avgROAS: 3.2,
      roasTarget: 3.0,
      revenue: 144000,
      revenueChange: 12.3
    };
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back! Here's your marketing performance snapshot
          </h2>
          <p className="text-gray-600">
            Based on your last {timeRange === '7d' ? '7 days' : '30 days'} of data, 
            we've identified <span className="font-semibold text-blue-600">3 critical actions</span> to improve your ROI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* KPI Cards */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-600">Total Spend</h3>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900">${metrics.totalSpend.toLocaleString()}</p>
            <div className="mt-2 flex items-center">
              {metrics.spendChange < 0 ? (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              ) : (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              )}
              <span className={metrics.spendChange < 0 ? 'text-red-600' : 'text-green-600'}>
                {Math.abs(metrics.spendChange)}%
              </span>
              <span className="text-gray-500 text-sm ml-1">vs last period</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              💡 Your spend decreased but conversions increased - good efficiency!
            </p>
          </div>
          {/* ... 나머지 KPI 카드 3개도 예시 코드와 동일하게 추가 ... */}
          {/* ... (ShoppingCart, Target, DollarSignIcon) ... */}
        </div>
        {/* Priority Actions Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Priority Actions</h3>
            <span className="text-sm text-gray-500">Based on AI analysis</span>
          </div>
          <div className="space-y-4">
            <ActionCard
              priority="high"
              title="Increase Google Ads Budget by 20%"
              reason="Google Ads is showing 4.2x ROAS (above your 3x target) with room to scale"
              impact="+$8,400 monthly revenue"
              effort="Low"
              confidence={92}
              steps={[
                "Increase daily budget from $833 to $1,000",
                "Focus on top 3 performing keywords",
                "Monitor performance daily for first week"
              ]}
            />
            <ActionCard
              priority="medium"
              title="Launch TikTok Advertising"
              reason="Your target audience (22-35) shows 3x higher engagement on TikTok vs Facebook"
              impact="+30% reach, +$12,000 potential revenue"
              effort="Medium"
              confidence={78}
              steps={[
                "Start with $5,000 test budget",
                "Create 3-5 short video ads",
                "Target interests: SaaS, productivity, startups"
              ]}
            />
            <ActionCard
              priority="low"
              title="Pause LinkedIn Campaigns"
              reason="LinkedIn showing 1.2x ROAS (below profitable threshold) for 3 consecutive weeks"
              impact="Save $5,000/month to reallocate"
              effort="Low"
              confidence={85}
              steps={[
                "Export audience data for retargeting",
                "Pause all active campaigns",
                "Reallocate budget to Google Ads"
              ]}
            />
          </div>
        </div>
      </div>
    );
  };

  const ActionCard = ({ priority, title, reason, impact, effort, confidence, steps }) => {
    const [expanded, setExpanded] = useState(false);
    const priorityColors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200'
    };
    const priorityIcons = {
      high: <AlertOctagon className="h-5 w-5" />,
      medium: <AlertCircle className="h-5 w-5" />,
      low: <Info className="h-5 w-5" />
    };
    return (
      <div className={`border rounded-lg p-4 ${priorityColors[priority]} border-2`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {priorityIcons[priority]}
              <h4 className="font-semibold text-gray-900">{title}</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="font-medium text-gray-700 mr-2">Why:</span>
                <span className="text-gray-600">{reason}</span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                  <span className="font-medium">Impact:</span>
                  <span className="ml-1 text-green-600">{impact}</span>
                </div>
                <div className="flex items-center">
                  <Gauge className="h-4 w-4 mr-1 text-blue-600" />
                  <span className="font-medium">Effort:</span>
                  <span className="ml-1">{effort}</span>
                </div>
                <div className="flex items-center">
                  <Brain className="h-4 w-4 mr-1 text-purple-600" />
                  <span className="font-medium">Confidence:</span>
                  <span className="ml-1">{confidence}%</span>
                </div>
              </div>
            </div>
            {expanded && (
              <div className="mt-4 p-3 bg-white/50 rounded">
                <p className="font-medium text-sm mb-2">Implementation Steps:</p>
                <ol className="list-decimal list-inside space-y-1">
                  {steps.map((step, idx) => (
                    <li key={idx} className="text-sm text-gray-700">{step}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
          <div className="ml-4 flex flex-col items-center space-y-2">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-gray-600 hover:text-gray-900"
            >
              <ChevronRight className={`h-5 w-5 transform transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
            <button className="bg-white text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ChannelsView
  const ChannelsView = () => {
    const channelData = [
      { name: 'Google Ads', spend: 25000, conversions: 750, revenue: 87500, roas: 3.5, cpa: 33.33, trend: 5.2, share: 35 },
      { name: 'Facebook', spend: 15000, conversions: 375, revenue: 45000, roas: 3.0, cpa: 40.00, trend: -2.1, share: 25 },
      { name: 'Instagram', spend: 12000, conversions: 320, revenue: 38400, roas: 3.2, cpa: 37.50, trend: 8.5, share: 20 },
      { name: 'LinkedIn', spend: 5000, conversions: 60, revenue: 6000, roas: 1.2, cpa: 83.33, trend: -15.3, share: 10 }
    ];
    const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'];
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Channel Performance Analytics</h2>
              <p className="text-gray-600 mt-1">Understanding where your marketing dollars work hardest</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Export Report</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Budget Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, share }) => `${name}: ${share}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="share"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What This Means</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Heavy Google Ads Dependency</p>
                  <p className="text-sm text-blue-700">35% of budget on Google Ads is typical, but consider diversification for risk mitigation</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium text-orange-900">LinkedIn Underperforming</p>
                  <p className="text-sm text-orange-700">Only 1.2x ROAS suggests this channel needs optimization or budget reallocation</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Instagram Opportunity</p>
                  <p className="text-sm text-green-700">Strong 8.5% growth trend - consider increasing budget here</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Channel Details & Recommendations</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spend</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPA</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {channelData.map((channel) => (
                    <tr key={channel.name}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{channel.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${channel.spend.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{channel.conversions}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${channel.cpa.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${channel.roas >= 3 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{channel.roas}x</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {channel.trend > 0 ? (
                            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                          )}
                          <span className={channel.trend > 0 ? 'text-green-600' : 'text-red-600'}>{Math.abs(channel.trend)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {channel.roas >= 3 ? (
                          <span className="text-green-600">Scale ↑</span>
                        ) : channel.roas >= 2 ? (
                          <span className="text-yellow-600">Optimize</span>
                        ) : (
                          <span className="text-red-600">Review ⚠</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Quick Optimization Tips</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Google Ads</p>
                  <p className="text-sm text-gray-600">Performing well. Test smart bidding strategies to improve efficiency</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Facebook</p>
                  <p className="text-sm text-gray-600">Slight decline. Refresh creative and test new audiences</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Instagram</p>
                  <p className="text-sm text-gray-600">Growing channel. Increase budget by 20% to capitalize on momentum</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-600">Below profitable threshold. Pause and reallocate budget</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // AttributionView
  const AttributionView = () => {
    const attributionData = [
      { channel: 'Instagram', firstClick: 40, lastClick: 20, dataDriver: 30, linear: 30 },
      { channel: 'YouTube', firstClick: 30, lastClick: 25, dataDriver: 28, linear: 27 },
      { channel: 'Facebook', firstClick: 20, lastClick: 30, dataDriver: 25, linear: 25 },
      { channel: 'TikTok', firstClick: 10, lastClick: 25, dataDriver: 17, linear: 18 }
    ];
    const [selectedModel, setSelectedModel] = useState('dataDriver');
    const modelDescriptions = {
      firstClick: {
        name: 'First Click',
        description: 'Gives 100% credit to the first touchpoint in the customer journey',
        bestFor: 'Understanding which channels drive initial awareness',
        pros: 'Simple to understand, good for top-of-funnel analysis',
        cons: 'Ignores all subsequent touchpoints'
      },
      lastClick: {
        name: 'Last Click',
        description: 'Gives 100% credit to the last touchpoint before conversion',
        bestFor: 'Understanding which channels close sales',
        pros: 'Simple to implement, widely used',
        cons: 'Undervalues awareness and consideration channels'
      },
      dataDriver: {
        name: 'Data-Driven',
        description: 'Uses machine learning to distribute credit based on actual impact',
        bestFor: 'Most accurate attribution for optimization',
        pros: 'Accounts for all touchpoints, self-learning',
        cons: 'Requires significant data volume'
      },
      linear: {
        name: 'Linear',
        description: 'Distributes credit equally across all touchpoints',
        bestFor: 'When all touchpoints are equally important',
        pros: 'Fair to all channels, easy to understand',
        cons: 'May overvalue less impactful touchpoints'
      }
    };
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Attribution Model Analysis</h2>
          <p className="text-gray-600 mb-6">
            Different attribution models tell different stories about your marketing performance. 
            We recommend using <span className="font-semibold text-blue-600">Data-Driven attribution</span> for your business based on your customer journey complexity.
          </p>
          <div className="flex space-x-2 mb-6">
            {Object.entries(modelDescriptions).map(([key, model]) => (
              <button
                key={key}
                onClick={() => setSelectedModel(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedModel === key ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {model.name}
              </button>
            ))}
          </div>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">{modelDescriptions[selectedModel].name} Attribution</h3>
            <p className="text-blue-800 mb-2">{modelDescriptions[selectedModel].description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
              <div>
                <p className="text-sm font-medium text-blue-700">Best for:</p>
                <p className="text-sm text-blue-600">{modelDescriptions[selectedModel].bestFor}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-green-700">Pros:</p>
                <p className="text-sm text-green-600">{modelDescriptions[selectedModel].pros}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-orange-700">Cons:</p>
                <p className="text-sm text-orange-600">{modelDescriptions[selectedModel].cons}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Channel Attribution - {modelDescriptions[selectedModel].name} Model</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={attributionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" />
                <YAxis label={{ value: 'Attribution %', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey={selectedModel} fill="#3B82F6" radius={[8, 8, 0, 0]}>
                  <LabelList dataKey={selectedModel} position="top" formatter={(value) => `${value}%`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3">
            <h3 className="font-semibold text-gray-900">Key Insights from {modelDescriptions[selectedModel].name} Model:</h3>
            {selectedModel === 'dataDriver' && (
              <div className="space-y-2">
                <InsightItem
                  icon={<TrendingUp className="h-5 w-5 text-green-600" />}
                  text="Instagram contributes 30% to conversions when considering all touchpoints"
                  action="Maintain or increase Instagram investment"
                />
                <InsightItem
                  icon={<AlertCircle className="h-5 w-5 text-orange-600" />}
                  text="TikTok shows lower attribution (17%) but high growth potential"
                  action="Test increased TikTok budget with close monitoring"
                />
                <InsightItem
                  icon={<CheckCircle className="h-5 w-5 text-blue-600" />}
                  text="YouTube and Facebook show balanced contribution across journey"
                  action="Keep current allocation, focus on creative optimization"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const InsightItem = ({ icon, text, action }) => (
    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
      {icon}
      <div className="flex-1">
        <p className="text-gray-700">{text}</p>
        <p className="text-sm text-gray-600 mt-1"><span className="font-medium">Action:</span> {action}</p>
      </div>
    </div>
  );

  // AIInsightsView
  const AIInsightsView = () => {
    const insights = [
      {
        id: 1,
        type: 'synergy',
        icon: <Share2 className="h-6 w-6" />,
        iconColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
        title: 'Channel Synergy Detected',
        summary: 'Instagram and TikTok campaigns show strong synergy',
        details: 'Users who see both Instagram and TikTok ads are 35% more likely to convert than single-channel exposure.',
        metrics: {
          'Combined ROAS': '5.2x',
          'Individual ROAS': 'IG: 3.8x, TT: 3.5x',
          'Lift': '+35%'
        },
        recommendation: 'Increase budget allocation to both channels',
        impact: '+$15,000 monthly revenue',
        implementation: [
          'Increase Instagram budget by $3,000',
          'Increase TikTok budget by $2,000',
          'Create unified creative themes across both platforms',
          'Implement cross-platform retargeting'
        ]
      },
      {
        id: 2,
        type: 'alert',
        icon: <AlertTriangle className="h-6 w-6" />,
        iconColor: 'text-orange-600',
        bgColor: 'bg-orange-50',
        title: 'Performance Alert',
        summary: 'Facebook campaign ROI decreased by 15%',
        details: 'Facebook ad performance has declined over the last 7 days, likely due to increased competition and ad fatigue.',
        metrics: {
          'Current ROAS': '2.3x',
          '7-day avg': '2.7x',
          'CTR Drop': '-22%'
        },
        recommendation: 'Review targeting and refresh creative',
        impact: '-$3,200 if not addressed',
        implementation: [
          'Pause underperforming ad sets',
          'Refresh ad creative (new images/videos)',
          'Test new audience segments',
          'Consider seasonal messaging'
        ]
      },
      {
        id: 3,
        type: 'opportunity',
        icon: <Lightbulb className="h-6 w-6" />,
        iconColor: 'text-green-600',
        bgColor: 'bg-green-50',
        title: 'Growth Opportunity',
        summary: 'YouTube Shorts showing high engagement potential',
        details: 'Competitor analysis shows YouTube Shorts delivering 2.5x better engagement for similar SaaS products.',
        metrics: {
          'Competitor Avg ROAS': '4.8x',
          'Market Growth': '+180% YoY',
          'Audience Match': '87%'
        },
        recommendation: 'Test YouTube Shorts with $5,000 budget',
        impact: '+$24,000 potential revenue',
        implementation: [
          'Create 5-10 short educational videos',
          'Focus on problem-solution format',
          'Target competitor audiences',
          'Track view-through conversions'
        ]
      }
    ];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Marketing Insights</h2>
          <p className="text-gray-600">Our AI analyzed your marketing data across all channels and identified {insights.length} actionable insights that could impact <span className="font-semibold text-green-600">+$36,000</span> in monthly revenue.</p>
        </div>
        <div className="space-y-6">
          {insights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    );
  };

  const InsightCard = ({ insight }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className={`${insight.bgColor} p-6`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className={`${insight.iconColor}`}>{insight.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-gray-700">{insight.summary}</p>
              </div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="text-gray-500 hover:text-gray-700">
              <ChevronRight className={`h-5 w-5 transform transition-transform ${expanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
        {expanded && (
          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What we found:</h4>
              <p className="text-gray-600">{insight.details}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Key Metrics:</h4>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(insight.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded p-3">
                    <p className="text-sm text-gray-600">{key}</p>
                    <p className="text-lg font-semibold text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-900">Recommended Action:</p>
                <p className="text-blue-800">{insight.recommendation}</p>
                <p className="text-sm text-blue-600 mt-1">Expected Impact: <span className="font-semibold">{insight.impact}</span></p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">How to implement:</h4>
              <ol className="space-y-2">
                {insight.implementation.map((step, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">{idx + 1}</span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex space-x-3 pt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Apply This Recommendation</button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50">Schedule for Later</button>
              <button className="text-gray-500 hover:text-gray-700">Dismiss</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const Dashboard = () => {
    const [dashboardView, setDashboardView] = useState('overview');
    const [timeRange, setTimeRange] = useState('7d');
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Top Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-xl font-bold">AttributionAI</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {currentUser.company}
                </span>
                <button className="text-sm text-blue-600 hover:text-blue-700" onClick={() => { setIsAuthenticated(false); setCurrentView('landing'); }}>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Marketing Dashboard</h1>
            <p className="text-gray-600 mt-1">Track and analyze your marketing performance</p>
          </div>
          {/* Time Range Selector & Tabs */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'channels', label: 'Channels' },
                { id: 'attribution', label: 'Attribution' },
                { id: 'insights', label: 'AI Insights' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setDashboardView(tab.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    dashboardView === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          {/* Dynamic Content */}
          {dashboardView === 'overview' && <OverviewDashboard timeRange={timeRange} />}
          {dashboardView === 'channels' && <ChannelsView />}
          {dashboardView === 'attribution' && <AttributionView />}
          {dashboardView === 'insights' && <AIInsightsView />}
        </div>
      </div>
    );
  };

  // --- Enhanced Dashboard Components End ---

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage />;
      case 'login':
        return <LoginPage />;
      case 'dashboard':
        return isAuthenticated ? <Dashboard /> : <LoginPage />;
      default:
        return <LandingPage />;
    }
  };

  return renderCurrentView();
};

export default SaaSAttributionPlatform; 