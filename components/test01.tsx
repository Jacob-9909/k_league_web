'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="sr-only">K-League Analysis</span>
          <img src="/placeholder.svg" alt="Logo" className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">K-League Analysis</span>
        </Link>
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle Menu</span>
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex lg:ml-auto lg:mr-4 gap-4 sm:gap-6`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/test02">
            프로젝트 소개
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/test03">
            경기 기록
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/test04">
            경기 결과 분석
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/test05">
            팀별 전략 분석
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/test06">
            커뮤니티
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  K-League Analysis Project
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  K리그 데이터를 분석하여 팬들에게 더 깊이 있는 인사이트를 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 K-League Analysis Project. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}