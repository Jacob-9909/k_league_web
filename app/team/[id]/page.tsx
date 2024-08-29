'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const teams = {
  ulsan: {
    name: "울산 현대",
    logo: "/placeholder.svg",
    strategy: "공격적인 4-3-3 전술을 주로 사용하며, 빠른 측면 공격이 특징입니다.",
    coach: "홍명보",
    founded: "1983년",
    stadium: "울산문수축구경기장",
    players: [
      { name: "조현우", position: "GK", number: "21" },
      { name: "이청용", position: "MF", number: "10" },
      { name: "바코", position: "FW", number: "7" },
    ]
  },
  jeonbuk: {
    name: "전북 현대 모터스",
    logo: "/placeholder.svg",
    strategy: "안정적인 4-2-3-1 포메이션으로 중원 장악력이 뛰어납니다.",
    coach: "김상식",
    founded: "1994년",
    stadium: "전주월드컵경기장",
    players: [
      { name: "송민규", position: "FW", number: "11" },
      { name: "백승호", position: "MF", number: "6" },
      { name: "홍정호", position: "DF", number: "20" },
    ]
  },
  daegu: {
    name: "대구 FC",
    logo: "/placeholder.svg",
    strategy: "유동적인 3-5-2 시스템으로 공수 밸런스를 유지합니다.",
    coach: "최원권",
    founded: "2002년",
    stadium: "DGB대구은행파크",
    players: [
      { name: "세징야", position: "FW", number: "10" },
      { name: "홍정운", position: "MF", number: "6" },
      { name: "정태욱", position: "DF", number: "5" },
    ]
  },
  jeju: {
    name: "제주 유나이티드",
    logo: "/placeholder.svg",
    strategy: "4-4-2 포메이션을 기반으로 한 빠른 역습이 강점입니다.",
    coach: "남기일",
    founded: "1982년",
    stadium: "제주월드컵경기장",
    players: [
      { name: "김승대", position: "FW", number: "9" },
      { name: "윤빛가람", position: "MF", number: "8" },
      { name: "최영준", position: "DF", number: "3" },
    ]
  },
  incheon: {
    name: "인천 유나이티드",
    logo: "/placeholder.svg",
    strategy: "3-4-3 전술로 공격적인 축구를 구사합니다.",
    coach: "조성환",
    founded: "2003년",
    stadium: "인천축구전용경기장",
    players: [
      { name: "무고사", position: "FW", number: "9" },
      { name: "김도혁", position: "MF", number: "6" },
      { name: "김동민", position: "DF", number: "4" },
    ]
  },
  pohang: {
    name: "포항 스틸러스",
    logo: "/placeholder.svg",
    strategy: "4-1-4-1 포메이션으로 중원 압박과 빌드업에 강점이 있습니다.",
    coach: "김기동",
    founded: "1973년",
    stadium: "포항스틸야드",
    players: [
      { name: "일류첸코", position: "FW", number: "10" },
      { name: "신진호", position: "MF", number: "8" },
      { name: "권완규", position: "DF", number: "5" },
    ]
  },
  gangwon: {
    name: "강원 FC",
    logo: "/placeholder.svg",
    strategy: "4-2-3-1 전술을 바탕으로 유연한 공격 전개가 특징입니다.",
    coach: "최순호",
    founded: "2008년",
    stadium: "강릉종합운동장",
    players: [
      { name: "김대원", position: "FW", number: "11" },
      { name: "한국영", position: "MF", number: "8" },
      { name: "이재익", position: "DF", number: "4" },
    ]
  },
  suwon: {
    name: "수원 삼성 블루윙즈",
    logo: "/placeholder.svg",
    strategy: "4-3-3 포메이션을 주로 사용하며, 측면 공격이 강점입니다.",
    coach: "이병근",
    founded: "1995년",
    stadium: "수원월드컵경기장",
    players: [
      { name: "오현규", position: "FW", number: "9" },
      { name: "김민우", position: "MF", number: "6" },
      { name: "박병현", position: "DF", number: "3" },
    ]
  },
  seoul: {
    name: "FC 서울",
    logo: "/placeholder.svg",
    strategy: "4-4-2 다이아몬드 전술로 중앙 집중 공격을 선호합니다.",
    coach: "안익수",
    founded: "1983년",
    stadium: "서울월드컵경기장",
    players: [
      { name: "나상호", position: "FW", number: "10" },
      { name: "기성용", position: "MF", number: "8" },
      { name: "오스마르", position: "DF", number: "4" },
    ]
  },
  gwangju: {
    name: "광주 FC",
    logo: "/placeholder.svg",
    strategy: "5-3-2 시스템으로 견고한 수비를 바탕으로 한 역습이 특징입니다.",
    coach: "이정효",
    founded: "2010년",
    stadium: "광주축구전용구장",
    players: [
      { name: "엄원상", position: "FW", number: "11" },
      { name: "이순민", position: "MF", number: "8" },
      { name: "아슐마토프", position: "DF", number: "5" },
    ]
  },
  daejeon: {
    name: "대전 하나 시티즌",
    logo: "/placeholder.svg",
    strategy: "3-4-3 전술로 공격적인 축구를 지향합니다.",
    coach: "이민성",
    founded: "1997년",
    stadium: "대전월드컵경기장",
    players: [
      { name: "키쭈", position: "FW", number: "9" },
      { name: "주세종", position: "MF", number: "6" },
      { name: "곽광선", position: "DF", number: "3" },
    ]
  },
  gimcheon: {
    name: "김천 상무",
    logo: "/placeholder.svg",
    strategy: "4-2-3-1 포메이션으로 안정적인 경기 운영을 추구합니다.",
    coach: "서동원",
    founded: "1984년",
    stadium: "김천종합운동장",
    players: [
      { name: "조규성", position: "FW", number: "9" },
      { name: "이영재", position: "MF", number: "8" },
      { name: "김진규", position: "DF", number: "4" },
    ]
  },
}


export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const team = teams[params.id as keyof typeof teams]

  if (!team) {
    return <div>Team not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/team">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Back to Teams</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-3xl">
              <img src={team.logo} alt={`${team.name} logo`} className="w-12 h-12 mr-4" />
              {team.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg mb-4">{team.strategy}</CardDescription>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><strong>감독:</strong> {team.coach}</div>
              <div><strong>창단:</strong> {team.founded}</div>
              <div><strong>홈구장:</strong> {team.stadium}</div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">선수단</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>번호</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>포지션</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {team.players.map((player) => (
              <TableRow key={player.name}>
                <TableCell>{player.number}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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