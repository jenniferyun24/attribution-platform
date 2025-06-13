// Attribution Platform - Data Generator & Model Implementation
// 이 파일을 src/utils/dataGenerator.js로 저장하세요

// Helper function for date manipulation
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const subDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

const format = (date, formatStr) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// ==========================================
// 1. 기본 데이터 생성 함수들
// ==========================================

// 고객 여정 데이터 생성
export const generateCustomerJourneyData = (numCustomers = 1000) => {
  const channels = ['TikTok', 'Instagram', 'YouTube', 'Google', 'Meta', 'Pinterest', 'Direct'];
  const journeys = [];
  
  for (let i = 0; i < numCustomers; i++) {
    const journey = {
      customerId: `CUST_${String(i).padStart(5, '0')}`,
      startDate: subDays(new Date(), Math.floor(Math.random() * 90)),
      touchpoints: [],
      converted: Math.random() > 0.3,
      revenue: 0
    };
    
    // 3-8 touchpoints per journey
    const numTouchpoints = Math.floor(Math.random() * 6) + 3;
    let currentDate = journey.startDate;
    
    for (let j = 0; j < numTouchpoints; j++) {
      currentDate = addDays(currentDate, Math.floor(Math.random() * 5));
      
      journey.touchpoints.push({
        channel: channels[Math.floor(Math.random() * channels.length)],
        timestamp: currentDate,
        interaction: ['view', 'click', 'engage', 'share'][Math.floor(Math.random() * 4)],
        duration: Math.floor(Math.random() * 300) + 10,
        deviceType: ['mobile', 'desktop', 'tablet'][Math.floor(Math.random() * 3)]
      });
    }
    
    if (journey.converted) {
      journey.revenue = Math.floor(Math.random() * 500) + 50;
      journey.purchaseDate = addDays(currentDate, Math.floor(Math.random() * 3));
    }
    
    journeys.push(journey);
  }
  
  return journeys;
};

// 채널별 시계열 데이터 생성
export const generateTimeSeriesData = (days = 90) => {
  const channels = ['TikTok', 'Instagram', 'YouTube', 'Google', 'Meta', 'Pinterest'];
  const data = [];
  
  for (let i = 0; i < days; i++) {
    const date = subDays(new Date(), days - i);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    channels.forEach(channel => {
      const baseSpend = {
        'TikTok': 2500,
        'Instagram': 2000,
        'YouTube': 1500,
        'Google': 3500,
        'Meta': 3000,
        'Pinterest': 800
      }[channel];
      
      const trend = i * 10;
      const seasonality = Math.sin((i / 30) * Math.PI * 2) * baseSpend * 0.2;
      const weekendEffect = isWeekend ? baseSpend * 0.3 : 0;
      const noise = (Math.random() - 0.5) * baseSpend * 0.1;
      
      const spend = Math.max(0, baseSpend + trend + seasonality + weekendEffect + noise);
      const impressions = spend * (Math.random() * 50 + 200);
      const clicks = impressions * (Math.random() * 0.02 + 0.01);
      const conversions = clicks * (Math.random() * 0.05 + 0.02);
      
      data.push({
        date: format(date, 'yyyy-MM-dd'),
        channel,
        spend: Math.round(spend),
        impressions: Math.round(impressions),
        clicks: Math.round(clicks),
        conversions: Math.round(conversions),
        revenue: Math.round(conversions * (Math.random() * 100 + 80)),
        roas: conversions > 0 ? (conversions * 100) / spend : 0
      });
    });
  }
  
  return data;
};

// 경쟁사 데이터 생성
export const generateCompetitorData = () => {
  const competitors = [
    { name: 'Sergio Tacchini', marketShare: 2.5, monthlySpend: 500000 },
    { name: 'Lululemon', marketShare: 15, monthlySpend: 5000000 },
    { name: 'Wilson', marketShare: 12, monthlySpend: 2000000 },
    { name: 'Lacoste', marketShare: 8, monthlySpend: 3000000 },
    { name: 'Nike', marketShare: 25, monthlySpend: 10000000 },
    { name: 'Adidas', marketShare: 20, monthlySpend: 8000000 }
  ];
  
  return competitors.map(comp => ({
    ...comp,
    channels: {
      'TikTok': Math.random() * 0.3,
      'Instagram': Math.random() * 0.3,
      'YouTube': Math.random() * 0.2,
      'Google': Math.random() * 0.2,
      'Meta': Math.random() * 0.2,
      'Pinterest': Math.random() * 0.1
    },
    recentActivity: generateRecentActivity(comp.name)
  }));
};

// 최근 활동 생성
const generateRecentActivity = (competitor) => {
  const activities = [
    'Launched new campaign',
    'Increased TikTok spend by 40%',
    'New influencer partnership',
    'Seasonal sale started',
    'Product launch announced'
  ];
  
  return Array(3).fill(null).map(() => ({
    date: subDays(new Date(), Math.floor(Math.random() * 30)),
    activity: activities[Math.floor(Math.random() * activities.length)],
    impact: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)]
  }));
};

// ==========================================
// 2. 어트리뷰션 모델 구현
// ==========================================

// Position-Based Attribution (U자형)
export const positionBasedAttribution = (touchpoints) => {
  if (touchpoints.length === 0) return {};
  if (touchpoints.length === 1) return { [touchpoints[0].channel]: 1.0 };
  
  const attribution = {};
  const firstTouch = touchpoints[0].channel;
  const lastTouch = touchpoints[touchpoints.length - 1].channel;
  
  attribution[firstTouch] = 0.4;
  attribution[lastTouch] = (attribution[lastTouch] || 0) + 0.4;
  
  if (touchpoints.length > 2) {
    const middleTouches = touchpoints.slice(1, -1);
    const middleWeight = 0.2 / middleTouches.length;
    
    middleTouches.forEach(tp => {
      attribution[tp.channel] = (attribution[tp.channel] || 0) + middleWeight;
    });
  }
  
  return attribution;
};

// Time Decay Attribution
export const timeDecayAttribution = (touchpoints, halfLife = 7) => {
  if (touchpoints.length === 0) return {};
  
  const attribution = {};
  const lastTouchTime = touchpoints[touchpoints.length - 1].timestamp;
  let totalWeight = 0;
  
  const weights = touchpoints.map(tp => {
    const daysFromConversion = Math.max(0, 
      (lastTouchTime - tp.timestamp) / (1000 * 60 * 60 * 24)
    );
    const weight = Math.pow(0.5, daysFromConversion / halfLife);
    totalWeight += weight;
    return { channel: tp.channel, weight };
  });
  
  weights.forEach(({ channel, weight }) => {
    attribution[channel] = (attribution[channel] || 0) + (weight / totalWeight);
  });
  
  return attribution;
};

// Data-Driven Attribution (Shapley Value 간소화 버전)
export const dataDrivenAttribution = (journeys) => {
  const channelContributions = {};
  const channels = new Set();
  
  journeys.forEach(journey => {
    journey.touchpoints.forEach(tp => channels.add(tp.channel));
  });
  
  channels.forEach(channel => {
    let withChannel = 0;
    let withoutChannel = 0;
    let withChannelCount = 0;
    let withoutChannelCount = 0;
    
    journeys.forEach(journey => {
      const hasChannel = journey.touchpoints.some(tp => tp.channel === channel);
      
      if (hasChannel && journey.converted) {
        withChannel += journey.revenue;
        withChannelCount++;
      } else if (!hasChannel && journey.converted) {
        withoutChannel += journey.revenue;
        withoutChannelCount++;
      }
    });
    
    const avgWithChannel = withChannelCount > 0 ? withChannel / withChannelCount : 0;
    const avgWithoutChannel = withoutChannelCount > 0 ? withoutChannel / withoutChannelCount : 0;
    
    channelContributions[channel] = avgWithChannel - avgWithoutChannel;
  });
  
  return channelContributions;
};

// ==========================================
// 3. 이상 탐지 알고리즘
// ==========================================

export const detectAnomalies = (data, metric, threshold = 3) => {
  const values = data.map(d => d[metric]);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const stdDev = Math.sqrt(
    values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length
  );
  
  return data.map((item, index) => ({
    ...item,
    isAnomaly: Math.abs(item[metric] - mean) > threshold * stdDev,
    zScore: (item[metric] - mean) / stdDev
  }));
};

// ==========================================
// 4. 예측 모델 (간단한 선형 회귀)
// ==========================================

export const linearRegression = (data) => {
  const n = data.length;
  const sumX = data.reduce((sum, d, i) => sum + i, 0);
  const sumY = data.reduce((sum, d) => sum + d.value, 0);
  const sumXY = data.reduce((sum, d, i) => sum + i * d.value, 0);
  const sumX2 = data.reduce((sum, d, i) => sum + i * i, 0);
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  return { slope, intercept };
};

export const predictNextValues = (data, days = 7) => {
  const { slope, intercept } = linearRegression(data);
  const predictions = [];
  const lastIndex = data.length - 1;
  
  for (let i = 1; i <= days; i++) {
    predictions.push({
      day: lastIndex + i,
      value: slope * (lastIndex + i) + intercept,
      confidence: Math.max(0.7, 1 - (i * 0.05))
    });
  }
  
  return predictions;
};

// ==========================================
// 5. 크로스 채널 상관관계 분석
// ==========================================

export const calculateChannelCorrelation = (data) => {
  const channels = [...new Set(data.map(d => d.channel))];
  const correlationMatrix = {};
  
  channels.forEach(channel1 => {
    correlationMatrix[channel1] = {};
    channels.forEach(channel2 => {
      if (channel1 === channel2) {
        correlationMatrix[channel1][channel2] = 1;
      } else {
        const data1 = data.filter(d => d.channel === channel1).map(d => d.conversions);
        const data2 = data.filter(d => d.channel === channel2).map(d => d.conversions);
        
        correlationMatrix[channel1][channel2] = pearsonCorrelation(data1, data2);
      }
    });
  });
  
  return correlationMatrix;
};

const pearsonCorrelation = (x, y) => {
  const n = Math.min(x.length, y.length);
  if (n === 0) return 0;
  
  const sumX = x.slice(0, n).reduce((a, b) => a + b, 0);
  const sumY = y.slice(0, n).reduce((a, b) => a + b, 0);
  const sumXY = x.slice(0, n).reduce((sum, xi, i) => sum + xi * y[i], 0);
  const sumX2 = x.slice(0, n).reduce((sum, xi) => sum + xi * xi, 0);
  const sumY2 = y.slice(0, n).reduce((sum, yi) => sum + yi * yi, 0);
  
  const num = n * sumXY - sumX * sumY;
  const den = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
  
  return den === 0 ? 0 : num / den;
};

// ==========================================
// 6. 예산 최적화 알고리즘
// ==========================================

export const optimizeBudgetAllocation = (currentAllocation, performance) => {
  const channels = Object.keys(currentAllocation);
  const totalBudget = Object.values(currentAllocation).reduce((a, b) => a + b, 0);
  
  const weights = {};
  let totalWeight = 0;
  
  channels.forEach(channel => {
    const roas = performance[channel]?.roas || 1;
    weights[channel] = Math.pow(roas, 1.5);
    totalWeight += weights[channel];
  });
  
  const optimizedAllocation = {};
  channels.forEach(channel => {
    const idealAllocation = (weights[channel] / totalWeight) * totalBudget;
    const currentBudget = currentAllocation[channel];
    
    const maxChange = currentBudget * 0.3;
    const change = Math.max(-maxChange, Math.min(maxChange, idealAllocation - currentBudget));
    
    optimizedAllocation[channel] = Math.round(currentBudget + change);
  });
  
  return optimizedAllocation;
};

// ==========================================
// 7. AI 인사이트 생성
// ==========================================

export const generateAIInsights = (data, journeys, competitors) => {
  const insights = [];
  
  // Anomaly Detection Insights
  const recentData = data.slice(-7);
  const anomalies = detectAnomalies(recentData, 'conversions');
  
  anomalies.forEach(anomaly => {
    if (anomaly.isAnomaly && anomaly.zScore > 0) {
      insights.push({
        type: 'anomaly',
        priority: 'high',
        title: `Unusual spike in ${anomaly.channel} performance`,
        description: `${anomaly.channel} conversions are ${Math.abs(anomaly.zScore).toFixed(1)} standard deviations above normal.`,
        impact: `+$${Math.round(anomaly.revenue * 0.2)} potential revenue`,
        action: 'Increase budget to capitalize on momentum',
        confidence: Math.min(95, 70 + Math.abs(anomaly.zScore) * 5)
      });
    }
  });
  
  // Cross-channel Synergy Insights
  const correlations = calculateChannelCorrelation(data);
  Object.entries(correlations).forEach(([channel1, corrData]) => {
    Object.entries(corrData).forEach(([channel2, correlation]) => {
      if (channel1 !== channel2 && correlation > 0.7) {
        insights.push({
          type: 'opportunity',
          priority: 'medium',
          title: `Strong synergy between ${channel1} and ${channel2}`,
          description: `Users exposed to both channels show ${(correlation * 100).toFixed(0)}% correlation in conversion behavior.`,
          impact: `${Math.round(correlation * 30)}% lift potential`,
          action: 'Create coordinated campaigns across both channels',
          confidence: Math.round(correlation * 100)
        });
      }
    });
  });
  
  // Budget Optimization Insights
  const currentBudget = {
    'TikTok': 75000,
    'Instagram': 65000,
    'YouTube': 45000,
    'Google': 125000,
    'Meta': 100000,
    'Pinterest': 25000
  };
  
  const performance = {};
  data.slice(-30).forEach(d => {
    if (!performance[d.channel]) {
      performance[d.channel] = { totalRevenue: 0, totalSpend: 0 };
    }
    performance[d.channel].totalRevenue += d.revenue;
    performance[d.channel].totalSpend += d.spend;
  });
  
  Object.keys(performance).forEach(channel => {
    performance[channel].roas = performance[channel].totalRevenue / performance[channel].totalSpend;
  });
  
  const optimizedBudget = optimizeBudgetAllocation(currentBudget, performance);
  
  Object.entries(optimizedBudget).forEach(([channel, newBudget]) => {
    const change = newBudget - currentBudget[channel];
    if (Math.abs(change) > currentBudget[channel] * 0.1) {
      insights.push({
        type: 'optimization',
        priority: change > 0 ? 'high' : 'medium',
        title: `Budget reallocation recommended for ${channel}`,
        description: `${change > 0 ? 'Increase' : 'Decrease'} ${channel} budget by $${Math.abs(change).toLocaleString()}`,
        impact: `${(performance[channel].roas * Math.abs(change) * 0.2).toFixed(0)} estimated revenue change`,
        action: change > 0 ? `Shift budget from lower performing channels` : `Reallocate to higher ROAS channels`,
        confidence: Math.round(75 + Math.random() * 20)
      });
    }
  });
  
  // Predictive Insights
  const channelTrends = {};
  ['TikTok', 'Instagram', 'YouTube'].forEach(channel => {
    const channelData = data.filter(d => d.channel === channel).slice(-30);
    const predictions = predictNextValues(
      channelData.map((d, i) => ({ value: d.conversions })), 
      7
    );
    
    const avgGrowth = predictions.reduce((sum, p) => sum + p.value, 0) / predictions.length;
    const currentAvg = channelData.slice(-7).reduce((sum, d) => sum + d.conversions, 0) / 7;
    
    if (avgGrowth > currentAvg * 1.2) {
      insights.push({
        type: 'prediction',
        priority: 'high',
        title: `${channel} trending upward`,
        description: `ML model predicts ${((avgGrowth / currentAvg - 1) * 100).toFixed(0)}% growth in next 7 days`,
        impact: `+${Math.round((avgGrowth - currentAvg) * 7 * 100)} additional conversions`,
        action: 'Prepare inventory and increase ad spend',
        confidence: Math.round(predictions[0].confidence * 100)
      });
    }
  });
  
  return insights.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });
};

// ==========================================
// 8. 실시간 데이터 시뮬레이션
// ==========================================

export const simulateRealTimeData = () => {
  const channels = ['TikTok', 'Instagram', 'YouTube', 'Google', 'Meta', 'Pinterest'];
  const currentHour = new Date().getHours();
  const isBusinessHours = currentHour >= 9 && currentHour <= 21;
  
  return {
    timestamp: new Date().toISOString(),
    metrics: channels.map(channel => ({
      channel,
      impressions: Math.floor(Math.random() * 10000 * (isBusinessHours ? 2 : 1)),
      clicks: Math.floor(Math.random() * 500 * (isBusinessHours ? 2 : 1)),
      conversions: Math.floor(Math.random() * 50 * (isBusinessHours ? 2 : 1)),
      spend: Math.floor(Math.random() * 1000 * (isBusinessHours ? 1.5 : 1)),
      cpc: (Math.random() * 2 + 0.5).toFixed(2),
      ctr: (Math.random() * 3 + 1).toFixed(2) + '%',
      cvr: (Math.random() * 5 + 2).toFixed(2) + '%'
    }))
  };
};

// ==========================================
// 9. 종합 데이터 생성 함수
// ==========================================

export const generateCompleteDataset = () => {
  console.log('🚀 Generating complete attribution dataset...');
  
  const journeys = generateCustomerJourneyData(5000);
  const timeSeriesData = generateTimeSeriesData(90);
  const competitorData = generateCompetitorData();
  
  // Apply attribution models
  const attributionResults = {
    positionBased: {},
    timeDecay: {},
    dataDriven: {}
  };
  
  // Apply Position-based and Time decay to individual journeys
  journeys.forEach(journey => {
    if (journey.converted) {
      const pbAttribution = positionBasedAttribution(journey.touchpoints);
      const tdAttribution = timeDecayAttribution(journey.touchpoints);
      
      Object.entries(pbAttribution).forEach(([channel, weight]) => {
        attributionResults.positionBased[channel] = 
          (attributionResults.positionBased[channel] || 0) + weight * journey.revenue;
      });
      
      Object.entries(tdAttribution).forEach(([channel, weight]) => {
        attributionResults.timeDecay[channel] = 
          (attributionResults.timeDecay[channel] || 0) + weight * journey.revenue;
      });
    }
  });
  
  // Data-driven attribution uses all journey data
  attributionResults.dataDriven = dataDrivenAttribution(journeys);
  
  // Generate AI insights
  const aiInsights = generateAIInsights(timeSeriesData, journeys, competitorData);
  
  // Calculate summary statistics
  const summary = {
    totalCustomers: journeys.length,
    conversionRate: (journeys.filter(j => j.converted).length / journeys.length * 100).toFixed(2) + '%',
    avgCustomerValue: Math.round(
      journeys.filter(j => j.converted).reduce((sum, j) => sum + j.revenue, 0) / 
      journeys.filter(j => j.converted).length
    ),
    topChannels: Object.entries(attributionResults.positionBased)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([channel, revenue]) => ({ channel, revenue: Math.round(revenue) }))
  };
  
  console.log('✅ Dataset generation complete!');
  console.log(`   - ${journeys.length} customer journeys`);
  console.log(`   - ${timeSeriesData.length} time series data points`);
  console.log(`   - ${aiInsights.length} AI insights generated`);
  
  return {
    journeys: journeys.slice(0, 100), // Return sample for performance
    timeSeriesData,
    competitorData,
    attributionResults,
    aiInsights,
    summary
  };
};

// Export all functions
export default {
  generateCustomerJourneyData,
  generateTimeSeriesData,
  generateCompetitorData,
  positionBasedAttribution,
  timeDecayAttribution,
  dataDrivenAttribution,
  detectAnomalies,
  linearRegression,
  predictNextValues,
  calculateChannelCorrelation,
  optimizeBudgetAllocation,
  generateAIInsights,
  simulateRealTimeData,
  generateCompleteDataset
}; 