'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import React from 'react'

const data = [
  { name: '1월', 골: 20, 어시스트: 15, 유효슈팅: 50 },
  { name: '2월', 골: 25, 어시스트: 20, 유효슈팅: 60 },
  { name: '3월', 골: 30, 어시스트: 25, 유효슈팅: 70 },
  { name: '4월', 골: 22, 어시스트: 18, 유효슈팅: 55 },
  { name: '5월', 골: 28, 어시스트: 23, 유효슈팅: 65 },
]

export default function MatchRecordsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              프로젝트 소개
            </h1>
            <div className="mt-10 space-y-20">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. 우리의 궁극적인 목표</h2>
                <p className="text-gray-600">
                  경기 기록 분석의 궁극적인 목표는 K리그 경기의 패턴과 트렌드를 파악하여 팬들에게 더 깊이 있는 인사이트를 제공하는 것입니다. 
                  우리는 정확하고 상세한 경기 기록을 통해 팀과 선수들의 퍼포먼스를 객관적으로 평가하고, 이를 바탕으로 경기 결과 예측 및 전략 분석에 활용하고자 합니다. 
                  이를 통해 K리그에 대한 팬들의 이해를 높이고, 리그의 전반적인 발전에 기여하는 것이 우리의 목표입니다.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">2. 우리의 개발 과정</h2>
                <h3 className="text-xl font-medium mb-2">모델 소개</h3>
                <p className="text-gray-600 mb-4">
                  우리는 경기 기록을 분석하기 위해 다양한 통계 모델과 머신러닝 알고리즘을 사용했습니다. 
                  주요 모델로는 시계열 분석을 위한 ARIMA 모델, 선수 퍼포먼스 예측을 위한 랜덤 포레스트, 
                  그리고 팀 전략 분석을 위한 클러스터링 알고리즘 등이 있습니다.
                </p>
                <h3 className="text-xl font-medium mb-2">모델 성능</h3>
                <p className="text-gray-600 mb-4">
                  우리의 모델은 다양한 메트릭을 통해 평가되었습니다. 예를 들어, 득점 예측 모델의 경우 평균 절대 오차(MAE)가 0.5 미만으로, 
                  높은 정확도를 보여주고 있습니다. 선수 퍼포먼스 예측 모델은 80% 이상의 정확도를 달성했습니다.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
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
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">3. 사용된 데이터 소개</h2>
                <p className="text-gray-600 mb-4">
                  우리의 분석에는 다양한 경기 기록 데이터가 사용되었습니다. 주요 피처는 다음과 같습니다:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>경기 기본 정보 (날짜, 시간, 장소, 관중 수)</li>
                  <li>팀별 통계 (득점, 유효 슈팅, 코너킥, 오프사이드, 파울)</li>
                  <li>선수별 통계 (출전 시간, 득점, 어시스트, 유효 슈팅, 패스 성공률)</li>
                  <li>포메이션 정보</li>
                  <li>심판 정보 (주심, 부심)</li>
                  <li>날씨 정보 (기온, 습도, 풍속)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  이러한 데이터를 종합적으로 분석함으로써, 우리는 경기의 다양한 측면을 이해하고 
                  의미 있는 인사이트를 도출할 수 있었습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 K-League Analysis Project. All rights reserved.
        </p>
      </footer>
    </div>
  )
}