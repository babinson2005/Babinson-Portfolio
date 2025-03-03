"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
}

export function NavBar({ items }: NavBarProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex items-center gap-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border shadow-lg">
        {items.map((item, index) => (
          <li key={item.name} className="relative">
            {activeIndex === index && (
              <motion.div
                layoutId="lamp"
                className="absolute -top-3 left-1/2 -translate-x-1/2"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                <div className="relative">
                  {/* Lamp post */}
                  <div className="w-0.5 h-2 bg-violet-600" />
                  {/* Lamp light effect */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-violet-600/20 animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-600" />
                  </div>
                  {/* Light beam effect */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-violet-600/20 to-transparent rounded-full blur-sm" />
                </div>
              </motion.div>
            )}
            <Link
              href={item.url}
              className={`relative flex flex-col items-center justify-center w-16 h-16 ${
                activeIndex === index ? "text-violet-600" : "text-muted-foreground"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {activeIndex === index && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-violet-600/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-20">
                <item.icon className="w-6 h-6" />
              </span>
              <span className="text-xs mt-1 relative z-20">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

