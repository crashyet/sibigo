import React from 'react'
import { useNavigate } from 'react-router-dom'
import maskot11 from '../../assets/maskot/maskot11.png'
import Button from './Button'

const BackAlert = ({ onCancel, onConfirm }) => {
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-150 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#FCFBFA] rounded-3xl p-6 md:p-8 flex flex-col items-center max-w-xl w-full shadow-2xl animate-in zoom-in-95 duration-200 text-center relative">
        <img src={maskot11} alt="Maskot" className="w-[160px] mb-4 drop-shadow-md" />
        <h3 className="text-xl font-extrabold text-[#252525] mb-2">Tunggu Dulu!</h3>
        <p className="text-[#252525]/80 font-medium mb-8 text-base">
          Jangan Pergi dulu! Ayo selesaikan dulu apa yang kamu mulaiii!!
        </p>
        <div className="flex flex-col w-full gap-4">
          <Button onClick={onCancel ? onCancel : () => navigate(-1)} 
            variant='secondary' 
            className="px-4 py-2.5">
              Lanjut Quiz
          </Button>

          <Button onClick={onConfirm ? onConfirm : () => navigate('/')} 
            variant='red'
            className="px-4 py-2.5">
              Ya, Keluar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BackAlert