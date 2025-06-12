import { NextResponse } from 'next/server';
import { generateChannelData, generateTrendData } from '@/lib/mockData';

export async function GET() {
  // 인위적인 지연 추가 (실제 API 호출 시뮬레이션)
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const channels = generateChannelData();
  const trends = generateTrendData();
  
  const dashboardData = {
    channels,
    trends,
    totalBudget: channels.reduce((sum, ch) => sum + ch.budget, 0),
    averageROAS: Number((channels.reduce((sum, ch) => sum + ch.roas, 0) / channels.length).toFixed(1)),
    attributionScore: Math.floor(Math.random() * 15) + 80,
    lastUpdated: new Date().toISOString()
  };
  
  return NextResponse.json(dashboardData);
}

// 특정 기간 데이터 조회
export async function POST(request: Request) {
  const { startDate, endDate, channels } = await request.json();
  
  // 필터링된 데이터 생성
  const filteredData = generateChannelData().filter(ch => 
    !channels || channels.length === 0 || channels.includes(ch.name)
  );
  
  return NextResponse.json({
    channels: filteredData,
    period: { startDate, endDate }
  });
} 