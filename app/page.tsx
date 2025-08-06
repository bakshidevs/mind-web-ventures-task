"use client"

import MapView from "@/components/MapView"
import TimelineSlider from "@/components/TimelineSlider"
import { useState } from "react"


export default function Home() {
  const [count, setCount] = useState<number>(0)
  return (
    <main className="h-full flex flex-col items-center justify-center gap-6">
      Nextjs
      <TimelineSlider />
      <div className="relative w-full h-2 bg-white flex items-center">
        {/* <div className="h-8 w-8 bg-red-500 cursor-grab active:cursor-grabbing absolute right-0" draggable={false} aria-valuemin={0} aria-valuenow={55} aria-valuemax={100} /> */}

        <div
          style={{
            
          }}
          className="h-5 w-5 rounded-full bg-red-100 border border-red-500 flex items-center justify-center cursor-grab active:cursor-grabbing absolute left-0"
          draggable={false}
          aria-valuemin={0}
          aria-valuenow={55}
          aria-valuemax={100}
        >
          <div className="h-1 w-1 rounded-full bg-red-500" />
        </div>
        <div
          style={{}}
          className="h-5 w-5 rounded-full bg-red-100 border border-red-500 flex items-center justify-center cursor-grab active:cursor-grabbing absolute right-0"
          draggable={false}
          aria-valuemin={0}
          aria-valuenow={55}
          aria-valuemax={100}
        >
          <div className="h-1 w-1 rounded-full bg-red-500" />
        </div>
      </div>
      <MapView />
    </main>
  )
}
