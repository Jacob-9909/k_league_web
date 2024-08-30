'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 이미지 경로들
const leagueLogo = '/images/kleague-logo.png'
const earlyYears = '/early-years.jpg'
const modernEra = '/images/modern-era.jpg'
const starPlayers = '/images/star-players.jpg'

export default function KLeagueHistoryPage() {
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    const data = [
      {
        year: '1983',
        title: 'K리그 창설',
        description: 'K리그는 1983년 첫 시즌을 시작하면서 한국 축구의 프로 리그 시대를 열었습니다. 당시에는 5개 팀으로 시작되었으며, 이후 점차 리그가 확대되었습니다.',
        image: earlyYears
      },
      {
        year: '1994',
        title: '리그 구조 개편',
        description: '1994년에는 K리그가 여러 변화와 함께 리그 구조를 개편하였습니다. 승강제를 도입하며, 보다 경쟁력 있는 리그를 만들기 위한 기반을 마련했습니다.',
        image: modernEra
      },
      {
        year: '2003',
        title: 'K리그의 성장과 발전',
        description: '2003년부터 K리그는 팀 수가 확대되고, 팬층이 크게 증가하면서 안정적인 성장을 이루었습니다. 각 팀들은 더 많은 투자와 시설 개선을 통해 팬들에게 더 나은 경험을 제공합니다.',
        image: starPlayers
      },
      {
        year: '2022',
        title: 'K리그 40주년',
        description: '2022년은 K리그의 40주년을 맞이한 해입니다. K리그는 아시아 최고의 리그로 자리매김하기 위해 계속해서 발전하고 있으며, 다양한 축구 문화를 만들어 가고 있습니다.',
        image: leagueLogo
      },
    ]
    setTimelineData(data)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      {/* Back to Home 버튼 */}
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        &larr; Back to Home
      </Link>

      {/* 페이지 제목 */}
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">⚽ K리그의 역사</h1>
      
      {/* 타임라인 콘텐츠 */}
      <div className="flex flex-col items-center">
        {timelineData.map((event, index) => (
          <div key={index} className="mb-12 max-w-2xl w-full flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <div className="w-full md:w-1/2 hover:brightness-110">
              <Image src={event.image} alt={event.title} width={400} height={300} className="object-cover w-full h-64" />
            </div>
            <div className="p-6 w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-2 hover:text-blue-600 transition duration-300">{event.year} - {event.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
