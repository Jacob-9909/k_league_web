'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MatchesPage() {
  const [matches, setMatches] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/2021matches.csv')
        const data = await response.text()
        const parsedData = parseCSV(data)
        setMatches(parsedData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const parseCSV = (data: string) => {
    const rows = data.split('\n').map(row => row.split(','))

    return rows.slice(1).map((row, index) => ({
      id: index + 1,
      date: row[1],
      homeTeam: row[2],
      awayTeam: row[3],
      homeScore: row[18], // 홈 팀 득점 수
      awayScore: row[19], // 원정 팀 득점 수
      result: row[26], // 홈 팀 결과
      stats: {
        코너킥: { 홈팀: parseInt(row[4]), 원정팀: parseInt(row[5]) },
        슛: { 홈팀: parseInt(row[6]), 원정팀: parseInt(row[7]) },
        유효슛: { 홈팀: parseInt(row[8]), 원정팀: parseInt(row[9]) },
        반칙: { 홈팀: parseInt(row[10]), 원정팀: parseInt(row[11]) },
        점유율: { 홈팀: parseInt(row[12]), 원정팀: parseInt(row[13]) },
        프리킥: { 홈팀: parseInt(row[14]), 원정팀: parseInt(row[15]) },
        오프사이드: { 홈팀: parseInt(row[16]), 원정팀: parseInt(row[17]) }
      }
    }))
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-2xl text-gray-700">Loading...</div>
    </div>
  }

  if (!matches) {
    return <div className="flex justify-center items-center h-screen">
      <div className="text-2xl text-red-500">Error loading data.</div>
    </div>
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">🏆 경기 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map(match => (
          <Link key={match.id} href={`/matches/${match.id}?match=${encodeURIComponent(JSON.stringify(match))}`}>
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold text-gray-800">{match.date}</div>
                <div className={`px-2 py-1 rounded-full text-sm font-semibold ${match.result === '승' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                  {match.result === '승' ? '승리' : '무승부'}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-blue-700">{match.homeTeam}</div>
                <div className="text-2xl font-extrabold text-gray-800">{match.homeScore} - {match.awayScore}</div>
                <div className="text-xl font-bold text-red-700">{match.awayTeam}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
