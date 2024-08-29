'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const teams = [
  { id: "ulsan", name: "울산 현대", logo: "/placeholder.svg", strategy: "공격적인 4-3-3 전술을 주로 사용하며, 빠른 측면 공격이 특징입니다." },
  { id: "jeonbuk", name: "전북 현대 모터스", logo: "/placeholder.svg", strategy: "안정적인 4-2-3-1 포메이션으로 중원 장악력이 뛰어납니다." },
  { id: "daegu", name: "대구 FC", logo: "/placeholder.svg", strategy: "유동적인 3-5-2 시스템으로 공수 밸런스를 유지합니다." },
  { id: "jeju", name: "제주 유나이티드", logo: "/placeholder.svg", strategy: "4-4-2 포메이션을 기반으로 한 빠른 역습이 강점입니다." },
  { id: "incheon", name: "인천 유나이티드", logo: "/placeholder.svg", strategy: "3-4-3 전술로 공격적인 축구를 구사합니다." },
  { id: "pohang", name: "포항 스틸러스", logo: "/placeholder.svg", strategy: "4-1-4-1 포메이션으로 중원 압박과 빌드업에 강점이 있습니다." },
  { id: "gangwon", name: "강원 FC", logo: "/placeholder.svg", strategy: "4-2-3-1 전술을 바탕으로 유연한 공격 전개가 특징입니다." },
  { id: "suwon", name: "수원 삼성 블루윙즈", logo: "/placeholder.svg", strategy: "4-3-3 포메이션을 주로 사용하며, 측면 공격이 강점입니다." },
  { id: "seoul", name: "FC 서울", logo: "/placeholder.svg", strategy: "4-4-2 다이아몬드 전술로 중앙 집중 공격을 선호합니다." },
  { id: "gwangju", name: "광주 FC", logo: "/placeholder.svg", strategy: "5-3-2 시스템으로 견고한 수비를 바탕으로 한 역습이 특징입니다." },
  { id: "daejeon", name: "대전 하나 시티즌", logo: "/placeholder.svg", strategy: "3-4-3 전술로 공격적인 축구를 지향합니다." },
  { id: "gimcheon", name: "김천 상무", logo: "/placeholder.svg", strategy: "4-2-3-1 포메이션으로 안정적인 경기 운영을 추구합니다." },
]

export default function TeamStrategyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">팀별 전략 분석</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <Link href={`/team/${team.id}`} key={team.id}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <img src={team.logo} alt={`${team.name} logo`} className="w-8 h-8 mr-2" />
                    {team.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{team.strategy}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
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