import React from 'react'

const Diseño = () => {
  return (
    <div className='animate-all duration-100 bg-blanco '>
      <div className=' w-full mt-[0px] text-center py-[80px] font-roboto font-medium text-negro grid justify-items-center gap-6 z-5 grid-cols-1 '>

      

        
        <div id='diseño' className=' bg-rojo text-center justify-items-center rounded-full w-[150px]
        max-[720.05px]:w-[100px]'>
            <h3 className=' text-amarillo font-[800] text-[1.6rem]  text-center self-center place-self-center 
            max-[720.05px]:text-[1rem]'>Servicios</h3>
        </div>

        <div className='grid items-center  '>
          <h2 className=' font-[800] text-[5dvw] text-rojo px-[20dvw] leading-[4rem]
          min-[1500.05px]:leading-[5dvw] 
          max-[1000.05px]:text-[7dvw] 
          max-[720.05px]:text-[9dvw] max-[720.05px]:leading-[4rem] max-[720.05px]:px-[5dvw]
          max-[470.05px]:text-[8dvw] max-[470.05px]:leading-[2rem]'>
           Diseño para Redes Sociales
            </h2>



        </div>
       
        <p className='mx-[26dvw] text-[1.4dvw] leading-[1.8rem] font-[400] mb-[1rem] text-negro
        max-[1000.05px]:text-[2dvw] max-[1000.05px]:mx-[19dvw]
        max-[720.05px]:text-[0.9rem] max-[720.05px]:mx-[15dvw] max-[720.05px]:leading-[1.3rem] 
        max-[470.05px]:text-[0.9rem]
        '>
          Diseñamos contenido visual atractivo para las redes sociales. Esto puede incluir la creación de gráficos, videos y animaciones para hacerte destacar:
          </p>



        <div className='px-[11dvw] grid grid-cols-2 gap-8  
        max-[1050.05px]:grid-cols-1 max-[1000.05px]:gap-[6rem]'>


        {/* rectagulo #1 */}
          <div id='programas' className='bg-blanco rounded-[25px] h-[550px] overflow-hidden border-[2px] border-[#878787] max-w-[500px] min-[1050.05px]:mb-[-100px]
          max-[1275.05px]:h-[550px]
          max-[1050.05px]:h-[550px]
          max-[720.05px]:h-[520px]
          max-[620.05px]:h-[520px]
          max-[500.05px]:h-[500px]
          max-[430.05px]:h-[520px]
          max-[356.05px]:h-[630px]
          max-[375.05px]:h-[540px]
          '>


            <div className='bg-[#878787] w-[100%] 
              '>

                <h3 className='text-[2.5rem] font-[800] text-blanco
                max-[720.05px]:text-[6dvw] 
                max-[470.05px]:text-[5dvw] 
                '>Plan Básico</h3>
                
            </div>

            <div className='text-left mx-[6%] my-[20px] font-[400] mb-[22px]' >

              <h4 className='text-rojo font-[800] text-[2.8rem] my-[20px]'>700$ <span className='text-[1.3rem]'>Mensual</span></h4>
              <ul className=''>
                <li className='mt-[15px]'> <b>12 publicaciones:</b> </li>
                <li className='ml-[30px]'> - Reels, Carruseles y Single </li> 
                <li className='mt-[15px]'> 5 Diseños para Historias </li> 
                <li className='mt-[15px]'> Creación de iconos para <b>historias destacadas</b> (en caso de necesitar). </li>
                <li className='mt-[15px]'> <b>Diseño y edición de video. </b> </li> 

              </ul>



             
            </div>

            <a href="https://wa.link/on74lp" target="_blank" className=' bg-[#5e5e5e] px-[3dvw] py-[3px] rounded-full text-blanco font-[700]  text-center text-[1.5rem] drop-shadow-lg
            hover:border-[4px] hover:border-rojo
             hover:bg-amarillo hover:text-rojo hover:font-[900] hover:px-[4dvw] animate-all duration-300 delay-75
             max-[1000.05px]:px-[2rem] max-[1000.05px]:text-[1.1rem] max-[1000.05px]:hover:px-[2.8rem]
             max-[720.05px]:px-[1.5rem] max-[720.05px]:text-[1rem] max-[720.05px]:hover:px-[2.3rem]
            '>Lo Quiero</a>

            <div className='bg-amarillo w-[100%] text-rojo text-left px-[6%] my-[15px] font-[800] text-[1.7rem] leading-[30px] py-[8px] mt-[40px]  pb-[100px]
            max-[720.05px]:text-[5dvw]
              '>

                <p className=''>-25% de descuento con el Pago de 3 Meses</p>
                
            </div>
          </div>

        








        {/* rectagulo #2 */}
        <div id='programas' className='bg-blanco rounded-[25px] h-[550px] overflow-hidden border-[2px] border-rojo max-w-[500px] mb-[-100px]
          max-[1275.05px]:h-[550px]
          max-[1050.05px]:h-[550px]
          max-[720.05px]:h-[520px]
          max-[620.05px]:h-[520px]
          max-[500.05px]:h-[500px]
          max-[430.05px]:h-[520px]
          max-[356.05px]:h-[630px]
          max-[375.05px]:h-[540px]
          '>


            <div className='bg-rojo w-[100%] 
              '>

                <h3 className='text-[2.5rem] font-[800] text-blanco
                max-[720.05px]:text-[6dvw] 
                max-[470.05px]:text-[5dvw] 
                '>Plan Pro</h3>
                
            </div>

            <div className='text-left mx-[6%] my-[20px] font-[400] mb-[22px]' >

              <h4 className='text-rojo font-[800] text-[2.8rem] my-[20px]'>900$ <span className='text-[1.3rem]'>Mensual</span></h4>
              <ul className=''>
                <li className='mt-[15px]'> <b>20 publicaciones:</b> </li>
                <li className='ml-[30px]'> - Reels, Carruseles y Single </li> 
                <li className='mt-[15px]'> 10 Diseños para Historias </li> 
                <li className='mt-[15px]'> Creación de iconos para <b>historias destacadas</b> (en caso de necesitar). </li>
                <li className='mt-[15px]'> <b>Diseño y edición de video. </b> </li> 

              </ul>



             
            </div>

            <a href="https://wa.link/a5f6cc" target="_blank" className=' bg-rojo px-[3dvw] py-[3px] rounded-full text-blanco font-[700]  text-center text-[1.5rem] drop-shadow-lg
            hover:border-[4px] hover:border-rojo
             hover:bg-amarillo hover:text-rojo hover:font-[900] hover:px-[4dvw] animate-all duration-300 delay-75
             max-[1000.05px]:px-[2rem] max-[1000.05px]:text-[1.1rem] max-[1000.05px]:hover:px-[2.8rem]
             max-[720.05px]:px-[1.5rem] max-[720.05px]:text-[1rem] max-[720.05px]:hover:px-[2.3rem]
            '>Lo Quiero</a>

            <div className='bg-amarillo w-[100%] text-rojo text-left px-[6%] my-[15px] font-[800] text-[1.7rem] leading-[30px] py-[8px] mt-[40px]  pb-[100px]
            max-[720.05px]:text-[5dvw]
              '>

                <p className=''>-25% de descuento con el Pago de 3 Meses</p>
                
            </div>
          </div>
    






        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Diseño
