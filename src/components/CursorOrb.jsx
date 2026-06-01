import React, { useEffect, useRef } from 'react'

export default function CursorOrb() {
  const orbRef = useRef(null)

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    let x = 0, y = 0
    let targetX = 0, targetY = 0

    const onMove = e => {
      targetX = e.clientX - 25
      targetY = e.clientY - 25
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      x += (targetX - x) * 0.12
      y += (targetY - y) * 0.12
      orb.style.left = x + 'px'
      orb.style.top = y + 'px'
      requestAnimationFrame(animate)
    }
    animate()

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={orbRef} className="orb hidden md:flex" style={{ left: '-100px', top: '-100px' }} />
}
