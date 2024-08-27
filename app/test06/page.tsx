'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import React from 'react'

const news = [
  { title: "K리그1 중간 순위 분석", content: "현재 리그 순위와 각 팀의 성적 추이를 분석합니다.", date: "2023-06-15" },
  { title: "이번 주 주목할 경기", content: "이번 주말 열릴 주요 경기와 관전 포인트를 소개합니다.", date: "2023-06-14" },
  { title: "K리그 영플레이어 특집", content: "올 시즌 주목받는 젊은 선수들의 활약상을 정리했습니다.", date: "2023-06-13" },
]

const columns = [
  { title: "4-3-3 vs 3-5-2: K리그에서의 전술 트렌드", author: "김전술", content: "최근 K리그에서 자주 볼 수 있는 두 가지 전술 체계를 비교 분석합니다." },
  { title: "데이터로 보는 K리그 공격수의 효율성", author: "이통계", content: "득점, 슈팅, 패스 성공률 등의 데이터를 바탕으로 K리그 공격수들의 효율성을 분석합니다." },
  { title: "K리그의 미래: 유스 시스템 발전 방향", author: "박육성", content: "K리그 각 구단의 유스 시스템 현황과 앞으로의 발전 방향에 대해 논의합니다." },
]

const discussions = [
  { title: "이번 주 울산 vs 전북 경기, 누가 이길까요?", replies: 28, views: 342 },
  { title: "우리 팀의 승률 예측 모델이 정확한가요?", replies: 15, views: 203 },
  { title: "데이터 분석으로 본 우리 팀의 약점", replies: 22, views: 287 },
]

const events = [
  { title: "K리그 데이터 챌린지", sponsor: "테크기업 A", content: "K리그 경기 데이터를 활용한 예측 모델 개발 대회" },
  { title: "팬 참여형 전술 분석 이벤트", sponsor: "스포츠 브랜드 B", content: "팬들이 직접 참여하여 좋아하는 팀의 전술을 분석하는 이벤트" },
]

export default function CommunityPage() {
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
          <h1 className="text-3xl font-bold mb-8">커뮤니티</h1>
          
          <Tabs defaultValue="news" className="w-full">
            <TabsList>
              <TabsTrigger value="news">뉴스</TabsTrigger>
              <TabsTrigger value="columns">컬럼 & 전문가 분석</TabsTrigger>
              <TabsTrigger value="discussions">토론</TabsTrigger>
              <TabsTrigger value="events">이벤트</TabsTrigger>
            </TabsList>
            <TabsContent value="news">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">최신 뉴스</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {news.map((item) => (
                    <Card key={item.title}>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{item.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
            <TabsContent value="columns">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">컬럼 & 전문가 분석</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {columns.map((column) => (
                    <Card key={column.title}>
                      <CardHeader>
                        <CardTitle>{column.title}</CardTitle>
                        <CardDescription>by {column.author}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{column.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
            <TabsContent value="discussions">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">승률 예측 모델 토론</h2>
                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.title}>
                      <CardHeader>
                        <CardTitle>{discussion.title}</CardTitle>
                        <CardDescription>댓글 {discussion.replies} | 조회수 {discussion.views}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button>토론 참여하기</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>
            <TabsContent value="events">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">후원 기업과의 협업 이벤트</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {events.map((event) => (
                    <Card key={event.title}>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>후원: {event.sponsor}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{event.content}</p>
                        <Button className="mt-4">자세히 보기</Button>
                      </CardContent>
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