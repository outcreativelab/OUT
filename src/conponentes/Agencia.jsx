import React from 'react'

const Agencia = () => {
  return (
    <div id='agencia' className='bg-amarillo h-[850px] w-[100%] grid grid-cols-1 gap-0 justify-items-center p-[60px] overflow-y-hidden
    max-[1000.05px]:h-[700px]
    max-[720.05px]:h-[600px]
    max-[500.05px]:h-[500px]
    max-[460.05px]:h-[400px]'>

      <div className='h-[30px] grid grid-cols-1 gap-0 justify-items-center'>
        <div className='bg-rojo h-[7px] w-[100px] rounded-full max-[600.05px]:scale-[0.8] max-[500.05px]:scale-[0.6]'></div>
        <div className='bg-rojo h-[7px] w-[50px] rounded-full max-[600.05px]:scale-[0.8] max-[500.05px]:scale-[0.6]'></div>
      </div>

      <p className='text-center font-roboto font-[500] text-[3rem] text-negro mt-[50px] mb-[-35px]
      max-[1000.05px]:text-[2.3rem] max-[1000.05px]:mb-[-20px] max-[1000.05px]:mt-[30px]
      max-[720.05px]:text-[5dvw] max-[720.05px]:mb-[-10px] max-[720.05px]:mt-[20px]
      max-[525.05px]:text-[4.5dvw] max-[500.05px]:mb-[-10px]
      '><i>Agencia de</i></p>

      <h1 className='text-center font-roboto font-[800]  text-[6rem] text-rojo 
       max-[1000.05px]:text-[4rem]
       max-[720.05px]:text-[8dvw]
       max-[525.05px]:text-[7dvw]
      '>Redes Sociales</h1>

      <p className='text-center font-roboto font-[400] text-[2rem] text-negro mx-[18%]
      max-[1000.05px]:text-[1.7rem]
      max-[720.05px]:text-[3.5dvw] max-[720.05px]:mx-[8%]
       max-[525.05px]:text-[3dvw]
      '>
        Ayudamos a alcanzar sus objetivos de marketing digital mediante la gestión de redes sociales.
      </p>

      <div className='flex mt-[20px]'>
        <img src="/p-izquierda.svg" alt=""  className='w-[370px]  translate-y-[150px] max-[1000.05px]:w-[270px] max-[1000.05px]:translate-y-[80px]
        max-[720.05px]:w-[35dvw] max-[720.05px]:translate-y-[50px]'/>

        <img src="/p-derecha.svg" alt=""  className='w-[400px] max-[1000.05px]:w-[300px]
        max-[720.05px]:w-[40dvw] 
        '/>
      </div>

      <img src="me-gusta.svg" alt="" className='w-[110px] absolute justify-self-start ml-[6dvw] mt-[300px] animate-iconos
      max-[1000.05px]:w-[80px]
      max-[720.05px]:w-[9dvw] max-[720.05px]:ml-[-2dvw]
      max-[500.05px]:mt-[100px] max-[500.05px]:ml-[-8dvw]'/>
      <img src="campana.svg" alt="" className='w-[130px] absolute justify-self-end mr-[4dvw] mt-[300px] animate-iconos2
      max-[1000.05px]:w-[100px]
      max-[720.05px]:w-[10dvw] max-[720.05px]:mr-[-2dvw]
      max-[500.05px]:mt-[100px] max-[500.05px]:mr-[-8dvw]'/>


    </div>
  )
}

export default Agencia

