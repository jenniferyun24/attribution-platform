import { NextResponse } from 'next/server';
import { generateCustomerJourneys } from '../../../lib/mockData';
import { CustomerJourney } from '../../../types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const channel = searchParams.get('channel');
  const converted = searchParams.get('converted');
  
  let journeys = generateCustomerJourneys(50);
  
  // 필터링
  if (channel) {
    journeys = journeys.filter((j: CustomerJourney) => 
      j.touchpoints.some((t: { channel: string }) => t.channel === channel)
    );
  }
  
  if (converted !== null) {
    journeys = journeys.filter((j: CustomerJourney) => j.converted === (converted === 'true'));
  }
  
  return NextResponse.json({
    journeys,
    total: journeys.length
  });
} 