'use client'
import Link from 'next/link'
import { ArrowLeft, Target, Code, Database, PieChart, Activity } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
import React from 'react'

const data = [
  { name: '1월', 골: 20, 어시스트: 15, 유효슈팅: 50 },
  { name: '2월', 골: 25, 어시스트: 20, 유효슈팅: 60 },
  { name: '3월', 골: 30, 어시스트: 25, 유효슈팅: 70 },
  { name: '4월', 골: 22, 어시스트: 18, 유효슈팅: 55 },
  { name: '5월', 골: 28, 어시스트: 23, 유효슈팅: 65 },
];

const developmentPhases = [
  { name: '1단계', description: '데이터 수집 및 전처리', percentage: 30 },
  { name: '2단계', description: '모델 개발 및 훈련', percentage: 40 },
  { name: '3단계', description: '모델 평가 및 튜닝', percentage: 20 },
  { name: '4단계', description: '결과 시각화 및 보고서 작성', percentage: 10 },
];

export default function ProjectIntroPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">프로젝트 소개</h1>
        
        <Tabs defaultValue="goal" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="goal" className="flex items-center"><Target className="w-4 h-4 mr-2" /> 프로젝트 목표</TabsTrigger>
            <TabsTrigger value="process" className="flex items-center"><Code className="w-4 h-4 mr-2" /> 개발 과정</TabsTrigger>
            <TabsTrigger value="data" className="flex items-center"><Database className="w-4 h-4 mr-2" /> 사용된 데이터</TabsTrigger>
          </TabsList>
          
          <TabsContent value="goal">
            <Card>
              <CardHeader>
                <CardTitle>우리의 궁극적인 목표</CardTitle>
                <CardDescription>K리그 분석을 통한 인사이트 제공</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  본 프로젝트의 궁극적인 목표는 K리그 데이터를 심층적으로 분석하여 팬들에게 더 깊이 있는 인사이트를 제공하고,
                  K리그의 발전에 기여하는 것입니다.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>경기 결과 예측 모델 개발</li>
                  <li>선수 퍼포먼스 평가 시스템 구축</li>
                  <li>팀 전략 분석 도구 제공</li>
                  <li>K리그에 대한 팬들의 이해도 향상</li>
                  <li>데이터 기반의 의사결정 지원</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="process">
            <Card>
              <CardHeader>
                <CardTitle>우리의 개발 과정</CardTitle>
                <CardDescription>프로젝트의 단계별 개발 흐름</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">1단계: 데이터 수집 및 전처리</h3>
                <p className="text-gray-600 mb-4">
                  다양한 소스에서 K리그 관련 데이터를 수집하고, 결측치 처리 및 데이터 정규화와 같은 전처리 작업을 수행하였습니다.
                  <span className="block mt-2">사용된 데이터 소스: K리그 공식 데이터, 외부 API 등</span>
                </p>
                <h3 className="text-xl font-semibold mb-2">2단계: 모델 개발 및 훈련</h3>
                <p className="text-gray-600 mb-4">
                  다층 퍼셉트론(MLP)과 그래디언트 부스팅 모델을 사용하여 경기 결과를 예측하는 모델을 개발하고 훈련했습니다.
                  <span className="block mt-2">사용된 기술: Python, TensorFlow, Scikit-Learn 등</span>
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium mb-2">훈련 데이터 분포</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={developmentPhases}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="percentage" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <h3 className="text-xl font-semibold mb-2">3단계: 모델 평가 및 튜닝</h3>
                <p className="text-gray-600 mb-4">
                  테스트 데이터를 사용하여 모델의 성능을 평가하고, 하이퍼파라미터 튜닝을 통해 성능을 최적화했습니다.
                  <span className="block mt-2">결과: 모델의 정확도는 75%로, 무작위 추측(33%)보다 훨씬 높은 성능을 보였습니다.</span>
                </p>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-medium mb-2">성능 그래프</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="골" stroke="#8884d8" />
                      <Line type="monotone" dataKey="어시스트" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="유효슈팅" stroke="#ffc658" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <h3 className="text-xl font-semibold mb-2">4단계: 결과 시각화 및 보고서 작성</h3>
                <p className="text-gray-600 mb-4">
                  분석 결과를 시각화하고 보고서를 작성하여, 이해관계자들과 팬들에게 유용한 인사이트를 제공했습니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>사용된 데이터 소개</CardTitle>
                <CardDescription>주요 피처 및 데이터 소스</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  우리는 K리그 공식 데이터와 함께 다양한 소스에서 수집한 데이터를 사용했습니다. 주요 피처는 다음과 같습니다:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                  <li>팀 성적 (승, 무, 패, 득점, 실점)</li>
                  <li>선수 통계 (득점, 어시스트, 출전 시간)</li>
                  <li>경기장 정보 (홈/원정, 관중 수)</li>
                  <li>날씨 정보</li>
                  <li>팀 순위</li>
                  <li>부상 선수 정보</li>
                </ul>
                <p className="text-gray-600">
                  이러한 다양한 데이터를 결합하여 종합적인 분석을 수행하고, 정확한 예측 모델을 구축했습니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 K-League Analysis Project. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
