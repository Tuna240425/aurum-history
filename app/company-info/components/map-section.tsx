"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, ParkingCircle } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            오시는 <span className="text-yellow-600 dark:text-yellow-400">길</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            서울특별시 송파구 위례성대로12길 36, 4층 전체 <br/> 대중교통과 자가용 모두 편리한 위치에 자리하고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8761971317945!2d127.1210582!3d37.510838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca57c0d3aa9d7%3A0x901d484fcd1519e7!2z7ISc7Jq47Yq567OE7IucIOyGoe2MjOq1rCDsnITroYDshLHrjIDroZwxMuq4uCAzNg!5e0!3m2!1sko!2skr!4v1752566683865!5m2!1sko!2skr" 
                    className="w-full aspect-video"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>

                  {/* Map marker */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                      <span className="text-white font-medium">오럼이 도사리는 곳</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* 주차 안내 */}
            <Card className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ParkingCircle className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">주차 안내</h3>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <p>건물 1층 주차장 (CU 편의점 옆) 이용 가능</p>
                  <p>방문 시 사전 연락 필수 </p>
                  <p className="text-yellow-600 dark:text-yellow-400 text-xs">※ 무료 주차 지원</p>
                </div>
              </CardContent>
            </Card>

            {/* 대중교통 */}
            <Card className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Navigation className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">대중교통</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div>
                    <span className="text-yellow-600 dark:text-yellow-400 font-medium">지하철</span>
                    <p>5호선 방이역, 9호선 한성백제역, 8호선 몽촌토성역 도보 이용 가능 </p>

                  </div>
                  <div>
                    <span className="text-yellow-600 dark:text-yellow-400 font-medium">버스</span>
                    <p>올림픽공원 남2문 정류장 하차</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">30-5, 35, 3216, 3323, 3412, 3413, 3414</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
