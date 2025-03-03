"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface Skill {
  name: string
  color: string
}

const SkillPyramid: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(300, 300)
    mountRef.current.appendChild(renderer.domElement)

    const levels = 5
    const pyramidGeometry = new THREE.CylinderGeometry(0, 1, 0.2, 4, 1)
    const pyramidMaterials = skills.slice(0, levels).map((skill) => new THREE.MeshBasicMaterial({ color: skill.color }))

    for (let i = 0; i < levels; i++) {
      const piece = new THREE.Mesh(pyramidGeometry, pyramidMaterials[i])
      piece.position.y = i * 0.2
      piece.scale.setScalar(1 - i * 0.2)
      scene.add(piece)
    }

    camera.position.y = 0.5
    camera.position.z = 3

    const render = () => {
      renderer.render(scene, camera)
    }

    render()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [skills])

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto" />
}

export default SkillPyramid

