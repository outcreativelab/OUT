import React from 'react'

const Pie = () => {
  return (
    <>
    <div className='flex flex-row justify-between bg-negro h-[150px] items-center px-[11dvw] lg:px-[11dvw]  '>

        <a href="#inicio">
          <img
            src="./out-logo.svg"
            alt="logo out"
            className="h-[5rem] max-[620.05px]:h-[13dvw]"
          />
        </a>


        <div className='flex gap-[0.5rem]'>
        <a href="https://www.instagram.com/out_creativelab/" target="_blank">
          <img
            src="./INSTAGRAM.svg"
            alt="instagram"
            className="h-[2.2rem] max-[620.05px]:h-[7dvw]"
          />
        </a>


        <a href="https://www.tiktok.com/@out_creativelab" target="_blank">
          <img
            src="./TIKTOK.svg"
            alt="TIKTOK"
            className="h-[2.2rem] max-[620.05px]:h-[7dvw]"
          />
        </a>


        <a href="https://www.facebook.com/people/OUT-CreativeLab/61565596514784/" target="_blank">
          <img
            src="./META.svg"
            alt="META"
            className="h-[2.2rem] max-[620.05px]:h-[7dvw]"
          />
        </a>

        <a href="https://www.youtube.com/@outcreativelab" target="_blank">
          <img
            src="./YOUTUBE.svg"
            alt="YOUTUBE"
            className="h-[2.2rem] max-[620.05px]:h-[7dvw]"
          />
        </a>

        </div>



    </div>

    <div className=' bg-amarillo h-[50px] text-center font-roboto text-negro font-[500] text-[1.1rem] content-center grid 
    max-[720.05px]:text-[2.7dvw]
    '>
        <p>2024 © Copyright Desarrollado por OUT CREATIVE LAB</p>
    </div>
      
    </>
  )
}

export default Pie
