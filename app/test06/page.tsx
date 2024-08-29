import Link from 'next/link'
import { ArrowLeft, Newspaper, Users, MessageSquare, Gift, ExternalLink } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const news = [
  { 
    title: "울산, '완벽한 승리' 전북 2-0 제압…선두 굳건", 
    content: "울산 현대가 라이벌 전북 현대를 완벽하게 제압하며 선두 자리를 더욱 굳건히 했다.", 
    date: "2023-06-15", 
    author: "김기범 기자", 
    url: "https://sports.news.naver.com/news.nhn?oid=413&aid=0000155555"
  },
  { 
    title: "대구FC, 김진혁 감독 선임…'새 출발' 선언", 
    content: "대구FC가 김진혁 감독을 새 사령탑으로 선임하며 새로운 출발을 선언했다.", 
    date: "2023-06-14", 
    author: "박상현 기자", 
    url: "https://sports.news.naver.com/news.nhn?oid=413&aid=0000155554"
  },
  { 
    title: "FC서울, 기성용 복귀 임박…'중원 강화' 기대", 
    content: "FC서울의 중원을 책임졌던 기성용의 복귀가 임박해 팬들의 기대감이 높아지고 있다.", 
    date: "2023-06-13", 
    author: "이승우 기자", 
    url: "https://sports.news.naver.com/news.nhn?oid=413&aid=0000155553"
  },
]

const columns = [
  { title: "4-3-3 vs 3-5-2: K리그에서의 전술 트렌드", author: "김전술", content: "최근 K리그에서 자주 볼 수 있는 두 가지 전술 체계를 비교 분석합니다." },
  { title: "데이터로 보는 K리그 공격수의 효율성", author: "이통계", content: "득점, 슈팅, 패스 성공률 등의 데이터를 바탕으로 K리그 공격수들의 효율성을 분석합니다." },
  { title: "K리그의 미래: 유스 시스템 발전 방향", author: "박육성", content: "K리그 각 구단의 유스 시스템 현황과 앞으로의 발전 방향에 대해 논의합니다." },
]

const discussions = [
  { title: "이번 주 울산 vs 전북 경기, 누가 이길까요?", replies: 28, views: 342, author: "축구팬1" },
  { title: "우리 팀의 승률 예측 모델이 정확한가요?", replies: 15, views: 203, author: "데이터분석가" },
  { title: "데이터 분석으로 본 우리 팀의 약점", replies: 22, views: 287, author: "전술통" },
]

const events = [
  { title: "K리그 데이터 챌린지", sponsor: "테크기업 A", content: "K리그 경기 데이터를 활용한 예측 모델 개발 대회" },
  { title: "팬 참여형 전술 분석 이벤트", sponsor: "스포츠 브랜드 B", content: "팬들이 직접 참여하여 좋아하는 팀의 전술을 분석하는 이벤트" },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-blue-600">커뮤니티</h1>
        
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="news" className="flex items-center"><Newspaper className="w-4 h-4 mr-2" /> 뉴스</TabsTrigger>
            <TabsTrigger value="columns" className="flex items-center"><Users className="w-4 h-4 mr-2" /> 컬럼 & 전문가 분석</TabsTrigger>
            <TabsTrigger value="discussions" className="flex items-center"><MessageSquare className="w-4 h-4 mr-2" /> 토론</TabsTrigger>
            <TabsTrigger value="events" className="flex items-center"><Gift className="w-4 h-4 mr-2" /> 이벤트</TabsTrigger>
          </TabsList>
          <TabsContent value="news">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600">
                        {item.title}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{item.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={`/placeholder.svg?text=${item.author[0]}`} alt={item.author} />
                        <AvatarFallback>{item.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-500">{item.author}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="columns">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {columns.map((column, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
          </TabsContent>
          <TabsContent value="discussions">
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{discussion.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center justify-between">
                        <span>댓글 {discussion.replies} | 조회수 {discussion.views}</span>
                        <span>by {discussion.author}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>토론 참여하기</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="events">
            <div className="grid gap-6 md:grid-cols-2">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>후원: {event.sponsor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{event.content}</p>
                    <Button>자세히 보기</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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