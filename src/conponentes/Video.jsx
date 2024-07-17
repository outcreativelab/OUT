import React, { useState, useEffect } from 'react';





export default function Video() {
    const[ancho, setAncho] = useState(innerWidth);


    useEffect(() => {
        //codigo que se ejecuta
        const detectarAncho = () => setAncho(innerWidth);
        window.addEventListener("resize", detectarAncho)

        // retur: face de desmontaje para que el efecto se deje de ejecutarse y deje de consumir memoria del navegador
        return () =>{
            window.removeEventListener("resize", detectarAncho);
        } 

    }, [ancho]) //se ejecuta solo cuando la variablle dento de [] cambia

  return (
    <>
      {ancho > 720 && <video id='inicio' src="/2.mp4" autoPlay loop muted className='w-[100%]'></video>}
      {ancho < 720 && <video id='inicio' src="/1.mp4" autoPlay loop muted className='w-[100%]'></video>}
      
    </>
    

  )
}
