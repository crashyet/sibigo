import { useState, useEffect } from 'react'

/**
 * Custom hook untuk mendeteksi apakah halaman sudah di-scroll melewati threshold.
 * 
 * @param {number} threshold - jumlah pixel scroll sebelum dianggap 'scrolled' (default: 20)
 * @returns {boolean} scrolled - true jika sudah melewati threshold
 */
const useScrolled = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

export default useScrolled
