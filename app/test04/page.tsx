'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import React from 'react'

const matchData = [
  { name: '슈팅', 팀A: 15, 팀B: 12 },
  { name: '선방', 팀A: 5, 팀B: 7 },
  { name: '파울', 팀A: 10, 팀B: 12 },
  { name: '코너킥', 팀A: 6, 팀B: 4 },
  { name: '오프사이드', 팀A: 2, 팀B: 3 },
  { name: '점유율', 팀A: 55, 팀B: 45 },
  { name: '패스 성공률', 팀A: 85, 팀B: 80 },
]

const featureImportance = [
  { name: '점유율', importance: 0.25 },
  { name: '슈팅', importance: 0.2 },
  { name: '패스 성공률', importance: 0.18 },
  { name: '코너킥', importance: 0.12 },
  { name: '선방', importance: 0.1 },
  { name: '파울', importance: 0.08 },
  { name: '오프사이드', importance: 0.07 },
]

export default function MatchAnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">경기 결과 분석</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. 경기 통계 비교</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={matchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="팀A" fill="#8884d8" />
                  <Bar dataKey="팀B" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-gray-600">
              이 차트는 두 팀 간의 주요 경기 통계를 비교합니다. 슈팅, 선방, 파울, 코너킥, 오프사이드, 점유율, 패스 성공률 등의 지표를 통해 
              각 팀의 경기 스타일과 퍼포먼스를 한눈에 파악할 수 있습니다.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. 모델링에 사용된 피처와 중요도</h2>
            <div className="bg-white p-4 rounded-lg shadow">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={featureImportance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="importance" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-gray-600">
                이 차트는 우리의 경기 결과 예측 모델에서 각 피처의 중요도를 보여줍니다. 중요도는 각 피처가 모델의 예측에 얼마나 
                큰 영향을 미치는지를 나타냅니다.
              </p>
              <h3 className="text-xl font-semibold">주요 피처 설명:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>점유율:</strong> 경기 중 볼을 소유한 시간의 비율입니다. 높은 점유율은 경기를 지배하고 있음을 의미할 수 있습니다.</li>
                <li><strong>슈팅:</strong> 골대를 향한 슈팅 횟수입니다. 많은 슈팅은 공격적인 플레이를 의미하며, 득점 기회와 연관됩니다.</li>
                <li><strong>패스 성공률:</strong> 성공한 패스의 비율입니다. 높은 패스 성공률은 팀의 조직력과 기술적 능력을 반영합니다.</li>
                <li><strong>코너킥:</strong> 얻은 코너킥의 횟수입니다. 많은 코너킥은 공격적인 압박을 가하고 있음을 의미할 수 있습니다.</li>
                <li><strong>선방:</strong> 골키퍼가 상대팀의 슈팅을 막아낸 횟수입니다. 많은 선방은 강력한 수비력을 의미할 수 있습니다.</li>
              </ul>
              <p className="text-gray-600">
                이러한 피처들의 조합을 통해 우리 모델은 경기 결과를 예측하고, 각 팀의 강점과 약점을 분석합니다. 
                점유율과 슈팅이 가장 중요한 피처로 나타났지만, 다른 요소들도 경기 결과에 상당한 영향을 미치는 것을 알 수 있습니다.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 K-League Analysis Project. All rights reserved.
        </p>
      </footer>
    </div>
  )
}