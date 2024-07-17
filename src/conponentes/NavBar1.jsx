import React, { useState } from "react";
import MenuHamburgesa from "./iu/MenuHamburgesa";



const NavBar1 = () => {
  let [open,setOpen]=useState(false);

  return (
    <>
    
      <div className="z-50 fixed w-full flex flex-row justify-between bg-rojo h-[3.5rem] items-center px-[11dvw] lg:px-[11dvw]  backdrop-blur-2xl drop-shadow-lg">
        <a href="#inicio">
          <img
            src="./out-logo.svg"
            alt="logo out"
            className="h-[3rem]"
          />
        </a>
        <nav>
          <div onClick={()=>setOpen(!open)} className='z-50 relative cursor-pointer min-[720.05px]:hidden'>
            <MenuHamburgesa open={open} setOpen={setOpen}/>
          </div>

          
         


          <ul className={`max-[720.05px]:absolute max-[720.05px]:top-[0px] max-[720.05px]:left-0 max-[720.05px]:right-0 max-[720.05px]:pt-[4rem] max-[720.05px]:pb-[2.4rem] max-[720.05px]:px-[4rem] max-[720.05px]:text-center 
            max-[720.05px]:bg-rojo max-[720.05px]:grid max-[720.05px]:gap-y-8 animate-all duration-500 ${open ? '':'max-[720.05px]:translate-y-[-400px]'}
            
            min-[720.05px]:flex min-[720.05px]:flex-row min-[720.05px]:gap-x-[4dvw] text-blanco font-roboto font-[400] font-regular min-[720.05px]:text-[1rem]` }>
            
      
              <a onClick={()=>setOpen(!open)} href="#inicio" className="menu animate-all duration-150 delay-100"><li>Inicio</li></a>
              <a onClick={()=>setOpen(!open)} href="#agencia" className="menu animate-all duration-150 delay-100"><li>Agencia</li></a>
              <a onClick={()=>setOpen(!open)} href="#servicios" className="menu animate-all duration-150 delay-100"><li>Servicios</li></a>
              <a onClick={()=>setOpen(!open)} href="#diseño" className="menu animate-all duration-150 delay-100 "><li>Diseño</li></a>
          

          </ul>
      
        </nav>
      </div>
      <div onClick={()=>setOpen(!open)} className={`animate-all duration-500  ${open ? 'max-[720.05px]:bg-rojo max-[720.05px]:w-full max-[720.05px]:h-full max-[720.05px]:z-10 max-[720.05px]:fixed':'bg-amarillo w-[0%] h-full z-10  fixed'}`}></div>
      
    </>
  );
};

export default NavBar1;
