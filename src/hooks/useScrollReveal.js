import { useEffect } from 'react'

/**
 * Custom hook untuk scroll reveal animation menggunakan IntersectionObserver.
 * Menambahkan class animasi ketika elemen dengan class 'animate-on-scroll' masuk viewport.
 * 
 * @param {Array} deps - dependency array untuk re-run observer (default: [])
 */
const useScrollReveal = (deps = []) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationType = entry.target.dataset.animation || 'animate-fade-up'
            entry.target.classList.add(animationType)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, deps)
}

export default useScrollReveal
