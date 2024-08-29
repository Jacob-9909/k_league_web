'use client'
import Link from 'next/link'
import { ArrowLeft, BarChart2, PieChart, Info } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RPieChart, Pie, Cell } from 'recharts'

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
  { name: '점유율', value: 25 },
  { name: '슈팅', value: 20 },
  { name: '패스 성공률', value: 18 },
  { name: '코너킥', value: 12 },
  { name: '선방', value: 10 },
  { name: '파울', value: 8 },
  { name: '오프사이드', value: 7 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC0CB']

export default function MatchAnalysisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">경기 결과 분석</h1>
        
        <Tabs defaultValue="match-stats" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
            <TabsTrigger value="match-stats" className="flex items-center"><BarChart2 className="w-4 h-4 mr-2" /> 경기 통계 비교</TabsTrigger>
            <TabsTrigger value="model-features" className="flex items-center"><PieChart className="w-4 h-4 mr-2" /> 모델 피처 중요도</TabsTrigger>
          </TabsList>
          
          <TabsContent value="match-stats">
            <Card>
              <CardHeader>
                <CardTitle>경기 통계 비교</CardTitle>
                <CardDescription>팀A vs 팀B의 주요 경기 지표 비교</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={matchData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}
                        labelStyle={{ fontWeight: 'bold' }}
                      />
                      <Legend />
                      <Bar dataKey="팀A" fill="#0088FE" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="팀B" fill="#00C49F" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-gray-600">
                  이 차트는 두 팀 간의 주요 경기 통계를 비교합니다. 각 지표의 높이 차이를 통해 팀 간 퍼포먼스 격차를 쉽게 파악할 수 있습니다.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="model-features">
            <Card>
              <CardHeader>
                <CardTitle>모델링에 사용된 피처와 중요도</CardTitle>
                <CardDescription>경기 결과 예측 모델의 주요 피처</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <RPieChart>
                      <Pie
                        data={featureImportance}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {featureImportance.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RPieChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-4 text-gray-600">
                  이 파이 차트는 우리의 경기 결과 예측 모델에서 각 피처의 중요도를 보여줍니다. 각 섹터의 크기는 해당 피처가 모델의 예측에 미치는 영향력을 나타냅니다.
                </p>
                <div className="mt-4 space-y-4">
                  <h3 className="text-xl font-semibold">주요 피처 설명:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>점유율:</strong> 경기 중 볼을 소유한 시간의 비율입니다. 높은 점유율은 경기를 지배하고 있음을 의미할 수 있습니다.</li>
                    <li><strong>슈팅:</strong> 골대를 향한 슈팅 횟수입니다. 많은 슈팅은 공격적인 플레이를 의미하며, 득점 기회와 연관됩니다.</li>
                    <li><strong>패스 성공률:</strong> 성공한 패스의 비율입니다. 높은 패스 성공률은 팀의 조직력과 기술적 능력을 반영합니다.</li>
                    <li><strong>코너킥:</strong> 얻은 코너킥의 횟수입니다. 많은 코너킥은 공격적인 압박을 가하고 있음을 의미할 수 있습니다.</li>
                    <li><strong>선방:</strong> 골키퍼가 상대팀의 슈팅을 막아낸 횟수입니다. 많은 선방은 강력한 수비력을 의미할 수 있습니다.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="w-5 h-5 mr-2" />
              분석 결과 해석
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              경기 통계와 모델 피처 중요도를 종합적으로 분석한 결과, 점유율과 슈팅이 경기 결과에 가장 큰 영향을 미치는 것으로 나타났습니다. 
              그러나 다른 요소들도 경기 결과에 상당한 영향을 미치므로, 팀의 전반적인 밸런스가 중요합니다. 
              이러한 분석을 바탕으로 팀은 자신의 강점을 극대화하고 약점을 보완하는 전략을 수립할 수 있습니다.
            </p>
          </CardContent>
        </Card>
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