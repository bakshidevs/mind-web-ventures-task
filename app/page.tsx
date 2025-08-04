"use client"

import MapView from "@/components/MapView"
import TimelineSlider from "@/components/TimelineSlider"
import { useState } from "react"


export default function Home() {
  const [count, setCount] = useState<number>(0)
  return (
    <main className="h-full flex flex-col items-center justify-center gap-6">
      Nextjs
      <p>{count}</p>
      <div className="flex gap-6">
        <button className="px-6 py-1 bg-foreground border-none text-background font-bold rounded-md" onClick={() => setCount(count + 1)}>+</button>
        <button className="px-6 py-1 bg-foreground border-none text-background font-bold rounded-md" onClick={() => setCount(count - 1)}>-</button>
      </div>
      {/* <TimelineSlider /> */}
      <MapView />
    </main>
  )
}
