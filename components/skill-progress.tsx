"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillProgressProps {
  skill: string
  level: number
}

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-primary">{skill}</span>
        <span className="text-sm font-medium text-primary">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className="bg-violet-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default SkillProgress

