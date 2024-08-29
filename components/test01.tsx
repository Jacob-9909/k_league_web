'use client'
import Link from 'next/link'
import { Menu, X, BarChart, Calendar, Users, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">K-League Analysis</span>
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold text-blue-600">K-League Analysis</span>
        </Link>
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex lg:ml-auto lg:mr-4 gap-4 sm:gap-6 absolute lg:relative top-16 lg:top-0 left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none flex-col lg:flex-row items-center py-4 lg:py-0`}>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/test04">
            경기 결과 분석
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/team">
            팀별 전략 분석
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/test06">
            커뮤니티
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-600">
                  K-League Analysis Project
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
                  K리그 데이터를 분석하여 팬들에게 더 깊이 있는 인사이트를 제공합니다.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/test02">프로젝트 소개</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/test03">경기 기록 보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">주요 기능</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">데이터 분석</h3>
                <p className="text-gray-600">심층적인 K리그 데이터 분석을 제공합니다.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">경기 일정</h3>
                <p className="text-gray-600">최신 K리그 경기 일정을 확인하세요.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">팀 분석</h3>
                <p className="text-gray-600">각 팀의 전략과 성과를 분석합니다.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">커뮤니티</h3>
                <p className="text-gray-600">팬들과 함께 K리그에 대해 토론하세요.</p>
              </div>
            </div>
          </div>
        </section>
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