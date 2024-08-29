'use client'
import Link from 'next/link'
import { ArrowLeft, Calendar, Trophy, Users, Activity } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const upcomingMatches = [
  { date: "2023-06-17", homeTeam: "FC Seoul", awayTeam: "Ulsan Hyundai", venue: "서울월드컵경기장" },
  { date: "2023-06-18", homeTeam: "Jeonbuk Hyundai", awayTeam: "Daegu FC", venue: "전주월드컵경기장" },
]

const pastMatches = [
  { date: "2023-06-10", homeTeam: "Pohang Steelers", score: "2 - 1", awayTeam: "Gangwon FC" },
  { date: "2023-06-11", homeTeam: "Jeju United", score: "0 - 0", awayTeam: "Incheon United" },
]

const teamRankings = [
  { rank: 1, team: "Ulsan Hyundai", played: 15, points: 35 },
  { rank: 2, team: "Jeonbuk Hyundai", played: 15, points: 32 },
  { rank: 3, team: "FC Seoul", played: 15, points: 28 },
]

const playerRankings = [
  { rank: 1, name: "Cho Gue-sung", team: "Jeonbuk Hyundai", goals: 10 },
  { rank: 2, name: "Lee Chung-yong", team: "Ulsan Hyundai", goals: 8 },
]

export default function MatchRecordsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">경기 기록</h1>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="upcoming" className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> 이번 주 경기</TabsTrigger>
            <TabsTrigger value="past" className="flex items-center"><Activity className="w-4 h-4 mr-2" /> 과거 경기</TabsTrigger>
            <TabsTrigger value="team-rankings" className="flex items-center"><Trophy className="w-4 h-4 mr-2" /> 팀 순위</TabsTrigger>
            <TabsTrigger value="player-rankings" className="flex items-center"><Users className="w-4 h-4 mr-2" /> 선수 순위</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>이번 주 경기 일정</CardTitle>
              </CardHeader>
              <CardContent>
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
                    {upcomingMatches.map((match, index) => (
                      <TableRow key={index}>
                        <TableCell>{match.date}</TableCell>
                        <TableCell>{match.homeTeam}</TableCell>
                        <TableCell>{match.awayTeam}</TableCell>
                        <TableCell>{match.venue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="past">
            <Card>
              <CardHeader>
                <CardTitle>과거 경기 결과</CardTitle>
              </CardHeader>
              <CardContent>
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
                    {pastMatches.map((match, index) => (
                      <TableRow key={index}>
                        <TableCell>{match.date}</TableCell>
                        <TableCell>{match.homeTeam}</TableCell>
                        <TableCell>{match.score}</TableCell>
                        <TableCell>{match.awayTeam}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team-rankings">
            <Card>
              <CardHeader>
                <CardTitle>팀 순위</CardTitle>
              </CardHeader>
              <CardContent>
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
                    {teamRankings.map((team, index) => (
                      <TableRow key={index}>
                        <TableCell>{team.rank}</TableCell>
                        <TableCell>{team.team}</TableCell>
                        <TableCell>{team.played}</TableCell>
                        <TableCell>{team.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="player-rankings">
            <Card>
              <CardHeader>
                <CardTitle>선수 순위 (득점)</CardTitle>
              </CardHeader>
              <CardContent>
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
                    {playerRankings.map((player, index) => (
                      <TableRow key={index}>
                        <TableCell>{player.rank}</TableCell>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>{player.team}</TableCell>
                        <TableCell>{player.goals}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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