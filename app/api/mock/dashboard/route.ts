import { NextResponse } from 'next/server';
import { generateDashboardData, generateChannelData } from '../../../lib/mockData';

export async function GET() {
  // 인위적인 지연 추가 (실제 API 호출 시뮬레이션)
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const dashboardData = generateDashboardData();
  
  return NextResponse.json(dashboardData);
}

// 특정 기간 데이터 조회
export async function POST(request: Request) {
  const { startDate, endDate, channels } = await request.json();
  
  // 필터링된 데이터 생성
  const filteredData = generateChannelData().filter((ch: any) => 
    !channels || channels.length === 0 || channels.includes(ch.name)
  );
  
  return NextResponse.json({
    channels: filteredData,
    period: { startDate, endDate }
  });
} 