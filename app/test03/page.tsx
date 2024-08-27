'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import React from 'react'

export default function MatchRecordsPage() {
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
          <h1 className="text-3xl font-bold mb-8">경기 기록</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. 이번 주 경기</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>날짜</TableHead>
                  <TableHead>홈팀</TableHead>
                  <TableHead>원정팀</TableHead>
                  <TableHead>경기장</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-10</TableCell>
                  <TableCell>FC 서울</TableCell>
                  <TableCell>울산 현대</TableCell>
                  <TableCell>서울월드컵경기장</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-06-11</TableCell>
                  <TableCell>전북 현대</TableCell>
                  <TableCell>대구 FC</TableCell>
                  <TableCell>전주월드컵경기장</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. 과거 경기</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>날짜</TableHead>
                  <TableHead>홈팀</TableHead>
                  <TableHead>점수</TableHead>
                  <TableHead>원정팀</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-03</TableCell>
                  <TableCell>포항 스틸러스</TableCell>
                  <TableCell>2 - 1</TableCell>
                  <TableCell>강원 FC</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-06-04</TableCell>
                  <TableCell>제주 유나이티드</TableCell>
                  <TableCell>0 - 0</TableCell>
                  <TableCell>인천 유나이티드</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. 팀 순위</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>순위</TableHead>
                  <TableHead>팀</TableHead>
                  <TableHead>경기</TableHead>
                  <TableHead>승점</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>울산 현대</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>35</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>전북 현대</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>32</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>FC 서울</TableCell>
                  <TableCell>15</TableCell>
                  <TableCell>28</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. 선수 순위</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">득점 순위</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>순위</TableHead>
                      <TableHead>선수</TableHead>
                      <TableHead>팀</TableHead>
                      <TableHead>득점</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>조규성</TableCell>
                      <TableCell>전북 현대</TableCell>
                      <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>이청용</TableCell>
                      <TableCell>울산 현대</TableCell>
                      <TableCell>8</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">도움 순위</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>순위</TableHead>
                      <TableHead>선수</TableHead>
                      <TableHead>팀</TableHead>
                      <TableHead>도움</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>김보경</TableCell>
                      <TableCell>울산 현대</TableCell>
                      <TableCell>7</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>이기제</TableCell>
                      <TableCell>수원 삼성</TableCell>
                      <TableCell>6</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
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
