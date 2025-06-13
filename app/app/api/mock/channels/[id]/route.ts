import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 특정 채널 상세 데이터
  const channelDetail = {
    id: params.id,
    name: 'Instagram',
    hourlyData: Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      impressions: Math.floor(Math.random() * 10000),
      clicks: Math.floor(Math.random() * 500),
      conversions: Math.floor(Math.random() * 50)
    })),
    demographics: {
      age: {
        '18-24': 35,
        '25-34': 40,
        '35-44': 15,
        '45+': 10
      },
      gender: {
        male: 45,
        female: 55
      }
    }
  };
  
  return NextResponse.json(channelDetail);
} 