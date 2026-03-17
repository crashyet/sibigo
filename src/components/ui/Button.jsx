import React from 'react'

/**
 * Komponen Button reusable dengan beberapa variant.
 *
 * @param {'primary'|'secondary'|'outline'|'white'} variant
 *   - primary: kuning CTA dengan 3D shadow (default)
 *   - secondary: outline kuning
 *   - white: putih dengan shadow abu-abu
 * @param {string} className - className tambahan untuk override
 * @param {React.ReactNode} children
 * @param {object} props - props tambahan (onClick, disabled, dll)
 */

const variantStyles = {
  primary:
    'bg-[#FCC61D] text-[#f7f7f7] shadow-[0_5px_0_#C59560] hover:shadow-none hover:translate-y-1',
  secondary:
    'bg-[#F8F9FA] text-[#FCC61D] shadow-[0_5px_0_#D49D42] hover:shadow-none hover:translate-y-1 border border-[#D49D42]',
  white:
    'bg-white text-[#3338A0] shadow-[0_5px_0_#D0D0D0] hover:shadow-none hover:translate-y-1',
  red:
    'bg-white text-[#EF4848] shadow-[0_5px_0_#EF4848] hover:shadow-none hover:translate-y-1 border border-[#EF4848]',
}

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles =
    'rounded-3xl font-pjs font-bold transition-all duration-300 cursor-pointer'

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
