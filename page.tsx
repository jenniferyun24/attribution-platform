'use client';
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

  // 플랫폼 랜딩 페이지
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* 네비게이션 */}
      <nav className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AttributionAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">제품</button>
            <button className="text-gray-600 hover:text-gray-900">가격</button>
            <button className="text-gray-600 hover:text-gray-900">고객사례</button>
            <button 
              onClick={() => setCurrentView('login')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              로그인
            </button>
          </div>
        </div>
      </nav>

      {/* 히어로 섹션 */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI가 분석하는<br />
            <span className="text-blue-600">마케팅 어트리뷰션</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            복잡한 마케팅 채널의 실제 기여도를 AI로 정확히 측정하세요. 
            Google Analytics부터 소셜미디어까지, 모든 데이터를 연결하여 ROI를 극대화하세요.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setCurrentView('demo')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center"
            >
              <PlayCircle className="h-5 w-5 mr-2" />
              무료 데모 체험
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50">
              제품 둘러보기
            </button>
          </div>
        </div>

        {/* 기능 소개 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI 기반 분석</h3>
            <p className="text-gray-600">머신러닝으로 채널 간 복잡한 상호작용까지 정확히 측정</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">원클릭 연동</h3>
            <p className="text-gray-600">Google Analytics, Facebook Ads 등 주요 플랫폼 API 자동 연동</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">실시간 최적화</h3>
            <p className="text-gray-600">성과 변화를 즉시 감지하고 예산 재배분 자동 추천</p>
          </div>
        </div>

        {/* 고객사 로고 */}
        <div className="text-center mb-20">
          <p className="text-gray-500 mb-8">300+ 브랜드가 신뢰하는 플랫폼</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold">세르지오 타키니</div>
            <div className="text-2xl font-bold">F&F</div>
            <div className="text-2xl font-bold">스튜디오톰보이</div>
            <div className="text-2xl font-bold">럭키슈에뜨</div>
          </div>
        </div>
      </div>
    </div>
  );

  // 로그인 페이지
  const LoginPage = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">AttributionAI 로그인</h2>
          <p className="text-gray-600">마케팅 어트리뷰션 분석을 시작하세요</p>
        </div>

        <div className="space-y-4 mb-6">
          <input 
            type="email" 
            placeholder="이메일 주소"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="password" 
            placeholder="비밀번호"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button 
          onClick={() => setCurrentView('onboarding')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-4"
        >
          로그인
        </button>

        <div className="text-center">
          <span className="text-gray-600">계정이 없으신가요? </span>
          <button className="text-blue-600 hover:underline">회원가입</button>
        </div>

        {/* 데모 계정 안내 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700 text-center">
            <strong>데모 체험:</strong> demo@attributionai.com / demo123
          </p>
        </div>
      </div>
    </div>
  );

  // 온보딩 페이지
  const OnboardingPage = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* 프로그레스 바 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">계정 설정</h1>
            <span className="text-sm text-gray-600">1 / 3 단계</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">회사 정보 입력</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">회사명</label>
              <input 
                type="text" 
                placeholder="예: 세르지오 타키니 코리아"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">업종</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>스포츠웨어</option>
                <option>패션</option>
                <option>뷰티</option>
                <option>식품</option>
                <option>IT/전자</option>
                <option>기타</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">월 마케팅 예산</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>1억원 미만</option>
                <option>1-5억원</option>
                <option>5-10억원</option>
                <option>10억원 이상</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주요 타겟</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>MZ세대 (20-30대)</option>
                <option>밀레니얼 (30-40대)</option>
                <option>전 연령대</option>
                <option>기업 고객</option>
              </select>
            </div>
          </div>

          <button 
            onClick={() => setCurrentView('api-connection')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            다음 단계: API 연동
          </button>
        </div>
      </div>
    </div>
  );

  // API 연동 페이지
  const APIConnectionPage = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* 프로그레스 바 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">API 연동</h1>
            <span className="text-sm text-gray-600">2 / 3 단계</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-2">마케팅 플랫폼 연동</h2>
          <p className="text-gray-600 mb-8">사용 중인 마케팅 플랫폼을 연결하여 데이터를 자동으로 수집하세요.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { name: 'Google Analytics', key: 'googleAnalytics', icon: '📊', desc: '웹사이트 트래픽 및 전환 데이터' },
              { name: 'Facebook Ads', key: 'facebookAds', icon: '📘', desc: '페이스북/인스타그램 광고 성과' },
              { name: 'Google Ads', key: 'googleAds', icon: '🔍', desc: '검색광고 및 디스플레이 광고' },
              { name: 'Naver Ads', key: 'naverAds', icon: '🟢', desc: '네이버 검색광고 및 쇼핑광고' },
              { name: 'Instagram Business', key: 'instagram', icon: '📷', desc: '인스타그램 비즈니스 계정 인사이트' },
              { name: 'YouTube Analytics', key: 'youtube', icon: '▶️', desc: '유튜브 채널 및 광고 성과' }
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
                      연결
                    </button>
                  )}
                </div>
                {connectedAPIs[api.key] && (
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <p className="text-sm text-green-700">✅ 연결 완료! 데이터 수집을 시작합니다.</p>
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
              이전
            </button>
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              대시보드로 이동
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // 메인 대시보드 (세르지오 타키니 예시)
  const Dashboard = () => {
    // 가상 데이터
    const channelData = [
      { name: '인스타그램', score: 85, budget: 15000000, roas: 3.2, category: '브랜드 인지' },
      { name: '틱톡', score: 78, budget: 10000000, roas: 4.1, category: '브랜드 인지' },
      { name: '네이버 검색', score: 92, budget: 12000000, roas: 5.2, category: '관심 증대' },
      { name: '무신사', score: 88, budget: 20000000, roas: 6.8, category: '구매 전환' },
      { name: '자사몰', score: 95, budget: 18000000, roas: 8.2, category: '구매 전환' }
    ];

    const trendData = [
      { week: '4주전', attribution: 76 },
      { week: '3주전', attribution: 79 },
      { week: '2주전', attribution: 82 },
      { week: '1주전', attribution: 77 },
      { week: '이번주', attribution: 84 }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* 사이드바 */}
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-sm">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AttributionAI</span>
            </div>
            
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                <BarChart3 className="h-5 w-5" />
                <span>대시보드</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                <Target className="h-5 w-5" />
                <span>캠페인 분석</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                <Users className="h-5 w-5" />
                <span>고객 여정</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-50">
                <Settings className="h-5 w-5" />
                <span>설정</span>
              </a>
            </nav>
          </div>

          {/* 계정 정보 */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                ST
              </div>
              <div>
                <p className="font-medium text-gray-900">세르지오 타키니</p>
                <p className="text-sm text-gray-500">Premium Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="ml-64 p-6">
          {/* 헤더 */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">마케팅 어트리뷰션 대시보드</h1>
              <p className="text-gray-600">세르지오 타키니 코리아 · 실시간 업데이트</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                <Download className="h-4 w-4" />
                <span>리포트 다운로드</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Plus className="h-4 w-4" />
                <span>새 캠페인</span>
              </button>
            </div>
          </div>

          {/* KPI 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">전체 어트리뷰션 점수</p>
                  <p className="text-2xl font-bold text-gray-900">84/100</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-sm text-green-600 mt-2">+7점 (지난주 대비)</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">평균 ROAS</p>
                  <p className="text-2xl font-bold text-gray-900">4.2x</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-sm text-green-600 mt-2">목표 3.5x 달성</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">연결된 채널</p>
                  <p className="text-2xl font-bold text-gray-900">6개</p>
                </div>
                <Database className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-sm text-blue-600 mt-2">실시간 동기화</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">이번 달 절약</p>
                  <p className="text-2xl font-bold text-gray-900">2.1억원</p>
                </div>
                <Shield className="h-8 w-8 text-purple-500" />
              </div>
              <p className="text-sm text-purple-600 mt-2">비효율 예산 최적화</p>
            </div>
          </div>

          {/* 차트 영역 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">채널별 어트리뷰션 점수</h3>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">트렌드 분석</h3>
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

          {/* AI 추천 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🤖 AI 최적화 추천</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <h4 className="font-semibold text-green-600">예산 증액</h4>
                </div>
                <p className="text-sm text-gray-600">자사몰 채널에 20% 추가 투자 권장</p>
                <p className="text-xs text-gray-500 mt-1">예상 ROAS: 9.1x (+0.9x)</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <h4 className="font-semibold text-orange-600">주의 필요</h4>
                </div>
                <p className="text-sm text-gray-600">틱톡 성과 하락 감지</p>
                <p className="text-xs text-gray-500 mt-1">크리에이티브 교체 필요</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold text-blue-600">새로운 기회</h4>
                </div>
                <p className="text-sm text-gray-600">유튜브 광고 진출 검토</p>
                <p className="text-xs text-gray-500 mt-1">타겟 오디언스 높은 관심도</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 데모 체험 페이지
  const DemoPage = () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AttributionAI 데모 체험</h1>
          <p className="text-gray-600">세르지오 타키니의 실제 활용 사례로 플랫폼을 체험해보세요</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">데모 시나리오</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">📊 데이터 연결</h3>
              <p className="text-sm text-gray-600">Google Analytics, Facebook Ads 등 6개 플랫폼 API 연동</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-600 mb-2">🤖 AI 분석</h3>
              <p className="text-sm text-gray-600">머신러닝으로 채널별 실제 기여도 계산</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-600 mb-2">💡 최적화</h3>
              <p className="text-sm text-gray-600">예산 재배분으로 ROAS 20% 개선</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            🚀 데모 대시보드 보기
          </button>
          <p className="text-sm text-gray-500 mt-4">실제 세르지오 타키니 데이터로 구성된 데모입니다</p>
        </div>
      </div>
    </div>
  );

  // 현재 뷰에 따른 컴포넌트 렌더링
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