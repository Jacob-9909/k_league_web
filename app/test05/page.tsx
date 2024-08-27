'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

const teams = [
  { name: "FC Seoul", logo: "/placeholder.svg", strategy: "공격적인 4-3-3 전술을 주로 사용하며, 빠른 측면 공격이 특징입니다." },
  { name: "Jeonbuk Hyundai Motors", logo: "/placeholder.svg", strategy: "안정적인 4-2-3-1 포메이션으로 중원 장악력이 뛰어납니다." },
  { name: "Ulsan Hyundai", logo: "/placeholder.svg", strategy: "유동적인 3-5-2 시스템으로 공수 밸런스를 유지합니다." },
]

const players = [
  { name: "Ki Sung-yueng", team: "FC Seoul", position: "MF", image: "/placeholder.svg" },
  { name: "Kim Bo-kyung", team: "Jeonbuk Hyundai Motors", position: "MF", image: "/placeholder.svg" },
  { name: "Lee Chung-yong", team: "Ulsan Hyundai", position: "MF", image: "/placeholder.svg" },
]

export default function TeamStrategyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <>
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Home</span>
          </>
        </Link>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">팀별 전략 분석</h1>
          
          <Tabs defaultValue="team-info" className="w-full">
            <TabsList>
              <TabsTrigger value="team-info">팀 정보</TabsTrigger>
              <TabsTrigger value="player-info">선수 정보</TabsTrigger>
            </TabsList>
            <TabsContent value="team-info">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">K리그1 클럽 정보 및 전략 분석</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {teams.map((team) => (
                    <Card key={team.name}>
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
                  ))}
                </div>
              </section>
            </TabsContent>
            <TabsContent value="player-info">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">K리그1 선수 정보</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {players.map((player) => (
                    <Card key={player.name}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Avatar className="w-10 h-10 mr-2">
                            <AvatarImage src={player.image} alt={player.name} />
                            <AvatarFallback>{player.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          {player.name}
                        </CardTitle>
                        <CardDescription>{player.team} - {player.position}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
          </Tabs>
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
