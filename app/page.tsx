import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { 
  TrendingUp, TrendingDown, Target, DollarSign, Users, Eye, MousePointer, ShoppingCart, 
  AlertTriangle, Settings, Plus, BarChart3, Zap, Shield, Globe, CheckCircle, 
  PlayCircle, Upload, Database, Cpu, Bell, Calendar, Download
} from 'lucide-react';

const AttributionPlatform = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [connectedAPIs, setConnectedAPIs] = useState({
    googleAnalytics: false,
    facebookAds: false,
    googleAds: false,
    naverAds: false,
    instagram: false,
    youtube: false
  });

  // Platform Landing Page
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AttributionAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Product</button>
            <button className="text-gray-600 hover:text-gray-900">Pricing</button>
            <button className="text-gray-600 hover:text-gray-900">Case Studies</button>
            <button 
              onClick={() => setCurrentView('login')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
            AI-Powered<br />
            <span className="text-blue-600">Marketing Attribution</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Accurately measure the true contribution of complex marketing channels with AI. 
            Connect everything from Google Analytics to social media and maximize your ROI.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentView('demo')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center"
            >
              <PlayCircle className="h-5 w-5 mr-2" />
              Try Free Demo
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50">
              Explore Platform
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Driven Analysis</h3>
            <p className="text-gray-600">Machine learning accurately measures complex cross-channel interactions</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">One-Click Integration</h3>
            <p className="text-gray-600">Auto-connect Google Analytics, Facebook Ads, and major platform APIs</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Optimization</h3>
            <p className="text-gray-600">Instantly detect performance changes and auto-recommend budget reallocation</p>
          </div>
        </div>

        {/* Customer Logos */}
        <div className="text-center mb-20">
          <p className="text-gray-500 mb-8">Trusted by 300+ brands worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold">Sergio Tacchini</div>
            <div className="text-2xl font-bold">F&F</div>
            <div className="text-2xl font-bold">Studio Tomboy</div>
            <div className="text-2xl font-bold">Lucky Chouette</div>
          </div>
        </div>
      </div>
    </div>
  );

  // Login Page
  const LoginPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Sign in to AttributionAI</h2>
          <p className="text-gray-600">Start analyzing your marketing attribution</p>
        </div>

        <div className="space-y-4 mb-6">
          <input 
            type="email" 
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button 
          onClick={() => setCurrentView('onboarding')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-4"
        >
          Sign In
        </button>

        <div className="text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button className="text-blue-600 hover:underline">Sign up</button>
        </div>

        {/* Demo Account Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700 text-center">
            <strong>Demo Account:</strong> demo@attributionai.com / demo123
          </p>
        </div>
      </div>
    </div>
  );

  // Onboarding Page
  const OnboardingPage = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Account Setup</h1>
            <span className="text-sm text-gray-600">Step 1 of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">Company Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input 
                type="text" 
                placeholder="e.g., Sergio Tacchini Korea"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Sportswear</option>
                <option>Fashion</option>
                <option>Beauty</option>
                <option>Food & Beverage</option>
                <option>Technology</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Marketing Budget</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Under $100K</option>
                <option>$100K - $500K</option>
                <option>$500K - $1M</option>
                <option>Over $1M</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Target Audience</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Gen Z & Millennials (20-35)</option>
                <option>Millennials (30-45)</option>
                <option>All Age Groups</option>
                <option>B2B Customers</option>
              </select>
            </div>
          </div>

          <button 
            onClick={() => setCurrentView('api-connection')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Next: Connect APIs
          </button>
        </div>
      </div>
    </div>
  );

  // API Connection Page
  const APIConnectionPage = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">API Integration</h1>
            <span className="text-sm text-gray-600">Step 2 of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-2">Connect Marketing Platforms</h2>
          <p className="text-gray-600 mb-8">Connect your marketing platforms to automatically collect data.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Google Analytics', key: 'googleAnalytics', icon: '📊', desc: 'Website traffic and conversion data' },
              { name: 'Facebook Ads', key: 'facebookAds', icon: '📘', desc: 'Facebook/Instagram advertising performance' },
              { name: 'Google Ads', key: 'googleAds', icon: '🔍', desc: 'Search and display advertising' },
              { name: 'Naver Ads', key: 'naverAds', icon: '🟢', desc: 'Naver search and shopping ads' },
              { name: 'Instagram Business', key: 'instagram', icon: '📷', desc: 'Instagram business account insights' },
              { name: 'YouTube Analytics', key: 'youtube', icon: '▶️', desc: 'YouTube channel and ad performance' }
            ].map((api) => (
              <div key={api.key} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{api.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{api.name}</h3>
                      <p className="text-sm text-gray-600">{api.desc}</p>
                    </div>
                  </div>
                  {connectedAPIs[api.key] ? (
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  ) : (
                    <button 
                      onClick={() => setConnectedAPIs({...connectedAPIs, [api.key]: true})}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                    >
                      Connect
                    </button>
                  )}
                </div>
                {connectedAPIs[api.key] && (
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <p className="text-sm text-green-700">✅ Connected! Data collection started.</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button 
              onClick={() => setCurrentView('onboarding')}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Previous
            </button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Main Dashboard (Sergio Tacchini Example)
  const Dashboard = () => {
    // Mock Data
    const channelData = [
      { name: 'Instagram', score: 85, budget: 150000, roas: 3.2, category: 'Brand Awareness' },
      { name: 'TikTok', score: 78, budget: 100000, roas: 4.1, category: 'Brand Awareness' },
      { name: 'Naver Search', score: 92, budget: 120000, roas: 5.2, category: 'Interest Generation' },
      { name: 'Musinsa', score: 88, budget: 200000, roas: 6.8, category: 'Purchase Conversion' },
      { name: 'Own Store', score: 95, budget: 180000, roas: 8.2, category: 'Purchase Conversion' }
    ];

    const trendData = [
      { week: '4 weeks ago', attribution: 76 },
      { week: '3 weeks ago', attribution: 79 },
      { week: '2 weeks ago', attribution: 82 },
      { week: '1 week ago', attribution: 77 },
      { week: 'This week', attribution: 84 }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-sm">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AttributionAI</span>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                <Target className="h-5 w-5" />
                <span>Campaign Analysis</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                <Users className="h-5 w-5" />
                <span>Customer Journey</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </nav>
          </div>

          {/* Account Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                ST
              </div>
              <div>
                <p className="font-medium text-gray-900">Sergio Tacchini</p>
                <p className="text-sm text-gray-500">Premium Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Marketing Attribution Dashboard</h1>
              <p className="text-gray-600">Sergio Tacchini Korea · Real-time updates</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4" />
                <span>Download Report</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                <span>New Campaign</span>
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall Attribution Score</p>
                  <p className="text-2xl font-bold text-gray-900">84/100</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-sm text-green-600 mt-2">+7 points (vs last week)</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average ROAS</p>
                  <p className="text-2xl font-bold text-gray-900">4.2x</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-sm text-green-600 mt-2">Target 3.5x achieved</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Connected Channels</p>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                </div>
                <Database className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-sm text-blue-600 mt-2">Real-time sync</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month Savings</p>
                  <p className="text-2xl font-bold text-gray-900">$210K</p>
                </div>
                <Shield className="h-8 w-8 text-purple-500" />
              </div>
              <p className="text-sm text-purple-600 mt-2">Budget optimization</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Channel Attribution Scores</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={channelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trend Analysis</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="attribution" stroke="#8B5CF6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI Optimization Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <h4 className="font-semibold text-green-600">Increase Budget</h4>
                </div>
                <p className="text-sm text-gray-600">Recommend 20% more investment in Own Store channel</p>
                <p className="text-xs text-gray-500 mt-1">Expected ROAS: 9.1x (+0.9x)</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <h4 className="font-semibold text-orange-600">Attention Needed</h4>
                </div>
                <p className="text-sm text-gray-600">TikTok performance decline detected</p>
                <p className="text-xs text-gray-500 mt-1">Creative refresh needed</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold text-blue-600">New Opportunity</h4>
                </div>
                <p className="text-sm text-gray-600">Consider YouTube advertising expansion</p>
                <p className="text-xs text-gray-500 mt-1">High target audience interest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Demo Experience Page
  const DemoPage = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Experience AttributionAI Demo</h1>
          <p className="text-gray-600">Try the platform with real Sergio Tacchini use case</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Demo Scenario</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">📊 Data Connection</h3>
              <p className="text-sm text-gray-600">Connected 6 platform APIs including Google Analytics, Facebook Ads</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">🤖 AI Analysis</h3>
              <p className="text-sm text-gray-600">Machine learning calculates real channel contribution</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-600 mb-2">💡 Optimization</h3>
              <p className="text-sm text-gray-600">Budget reallocation improved ROAS by 20%</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            🚀 View Demo Dashboard
          </button>
          <p className="text-sm text-gray-500 mt-4">Built with actual Sergio Tacchini data</p>
        </div>
      </div>
    </div>
  );

  // Current view component rendering
  const getCurrentView = () => {
    switch(currentView) {
      case 'landing': return <LandingPage />;
      case 'login': return <LoginPage />;
      case 'onboarding': return <OnboardingPage />;
      case 'api-connection': return <APIConnectionPage />;
      case 'dashboard': return <Dashboard />;
      case 'demo': return <DemoPage />;
      default: return <LandingPage />;
    }
  };

  return getCurrentView();
};

export default AttributionPlatform;