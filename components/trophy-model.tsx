"use client"

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Stars } from "@react-three/drei"
import type { Mesh } from "three"

interface TrophyModelProps {
  score: number
}

function Trophy({ score }: { score: number }) {
  const meshRef = useRef<Mesh>(null)
  const glowRef = useRef<Mesh>(null)

  // Rotate the trophy
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
    if (glowRef.current) {
      glowRef.current.rotation.y += 0.01
    }
  })

  // Determine trophy color based on score
  let trophyColor = "#CD7F32" // Bronze
  let emissiveColor = "#3d1c00"
  let intensity = 0.2

  if (score >= 80) {
    trophyColor = "#FFD700" // Gold
    emissiveColor = "#b59a00"
    intensity = 0.4
  } else if (score >= 60) {
    trophyColor = "#C0C0C0" // Silver
    emissiveColor = "#5c5c5c"
    intensity = 0.3
  }

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <cylinderGeometry args={[0.5, 0.7, 0.2, 32]} />
        <meshStandardMaterial
          color={trophyColor}
          metalness={0.8}
          roughness={0.2}
          emissive={emissiveColor}
          emissiveIntensity={intensity}
        />

        {/* Trophy cup */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.7, 0.5, 1, 32]} />
          <meshStandardMaterial
            color={trophyColor}
            metalness={0.8}
            roughness={0.2}
            emissive={emissiveColor}
            emissiveIntensity={intensity}
          />
        </mesh>

        {/* Trophy handles */}
        <mesh position={[0.8, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.2, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial
            color={trophyColor}
            metalness={0.8}
            roughness={0.2}
            emissive={emissiveColor}
            emissiveIntensity={intensity}
          />
        </mesh>

        <mesh position={[-0.8, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.2, 0.08, 16, 32, Math.PI]} />
          <meshStandardMaterial
            color={trophyColor}
            metalness={0.8}
            roughness={0.2}
            emissive={emissiveColor}
            emissiveIntensity={intensity}
          />
        </mesh>

        {/* Trophy base */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1.2, 0.4, 1.2]} />
          <meshStandardMaterial color="#5D4037" metalness={0.3} roughness={0.8} />
        </mesh>
      </mesh>

      {/* Glow effect */}
      <mesh ref={glowRef} position={[0, 0.6, 0]} scale={1.8}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial
          color={trophyColor}
          transparent={true}
          opacity={0.15}
          emissive={trophyColor}
          emissiveIntensity={0.5}
        />
      </mesh>
    </>
  )
}

export default function TrophyModel({ score }: TrophyModelProps) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <Trophy score={score} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      <Environment preset="studio" />
      <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />
    </Canvas>
  )
}
