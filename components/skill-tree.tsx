"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface Skill {
  name: string
  level: number
  color: string
}

const SkillTree: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(300, 300)
    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8)
    const material = new THREE.MeshBasicMaterial({ color: 0x8b4513 }) // Brown color for the trunk
    const trunk = new THREE.Mesh(geometry, material)
    scene.add(trunk)

    const branches: THREE.Mesh[] = []

    skills.forEach((skill, index) => {
      const branchGeometry = new THREE.ConeGeometry(0.2, 0.5, 8)
      const branchMaterial = new THREE.MeshBasicMaterial({ color: skill.color })
      const branch = new THREE.Mesh(branchGeometry, branchMaterial)

      const angle = (index / skills.length) * Math.PI * 2
      const radius = 0.5
      branch.position.set(Math.cos(angle) * radius, 0.5 + index * 0.2, Math.sin(angle) * radius)
      branch.scale.set(0, 0, 0) // Start with no scale
      branches.push(branch)
      scene.add(branch)
    })

    camera.position.z = 5

    let frame = 0
    const totalFrames = 120 // 2 seconds at 60fps

    const animate = () => {
      requestAnimationFrame(animate)

      if (frame < totalFrames) {
        const progress = frame / totalFrames
        trunk.scale.y = progress
        trunk.position.y = progress / 2

        branches.forEach((branch, index) => {
          const delay = index * 10
          if (frame > delay) {
            const branchProgress = Math.min(1, (frame - delay) / 30)
            branch.scale.set(branchProgress, branchProgress, branchProgress)
          }
        })

        frame++
      }

      trunk.rotation.y += 0.01
      branches.forEach((branch) => {
        branch.rotation.y += 0.01
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [skills])

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto" />
}

export default SkillTree
