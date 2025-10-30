import { useEffect } from 'react'

export const useMouseEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.category-card')
      
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const cardCenterX = rect.left + rect.width / 2
        const cardCenterY = rect.top + rect.height / 2
        
        const mouseX = e.clientX
        const mouseY = e.clientY
        
        const deltaX = (mouseX - cardCenterX) / 30
        const deltaY = (mouseY - cardCenterY) / 30
        
        const rotateX = -deltaY / 2
        const rotateY = deltaX / 2
        
        // Limitar a rotação
        const maxRotation = 8
        const clampedRotateX = Math.max(-maxRotation, Math.min(maxRotation, rotateX))
        const clampedRotateY = Math.max(-maxRotation, Math.min(maxRotation, rotateY))
        
        card.style.transform = `
          perspective(1000px) 
          rotateX(${clampedRotateX}deg) 
          rotateY(${clampedRotateY}deg)
          translateZ(0)
        `
      })
    }
    
    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.category-card')
      cards.forEach((card) => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)'
      })
    }
    
    const container = document.querySelector('.menu-container')
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseleave', handleMouseLeave)
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])
}

