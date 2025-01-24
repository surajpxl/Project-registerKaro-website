import React from 'react'
import sym from "../assets/Symbol.png"
import sym2 from "../assets/Symbol2.png"
import insta from "../assets/Insta.svg"
import fb from "../assets/fb.svg"
import twitter from "../assets/Twiter.svg"
import pint from "../assets/Pintrest.svg"

const Headline = () => {
  return (
    <>
    <div className='flex justify-end items-center w-full h-[44px] bg-[#1C4670]'>

      <div className='flex w-[153px] h-[18px] mx-5'>
        <img src={sym} alt="logo"
        className='h-[11px] w-[15px] object-contain mt-1'
        />
        <a href="/home"
        className='text-white ml-2 w-[132px] h-[18px] hover:underline mt-[-4px]'>
          www.registerkaro.in
        </a>
        </div> 
        <div className='text-gray-200'>|</div> 
        <div className='flex'>
          <img className='h-[13px] w-[15px] mt-1 ml-4' src={sym2} alt="" />
          <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' 
          className='text-white w-[132px] h-[18px] hover:underline mt-[-4px]'>
            +915839824400
          </a>
          </div> 

          <div className='text-gray-200'>|</div>
          <div className='flex mr-20 ml-3'>
            <img className='p-1' src={insta} alt="" />
            <img className='p-2' src={fb} alt="" />
            <img className='p-2' src={twitter} alt="" />
            <img className='p-1' src={pint} alt="" />
            </div>   

    </div>
    </>
  )
}

export default Headline