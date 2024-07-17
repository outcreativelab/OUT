import React from 'react'
import NavBar1 from '../conponentes/NavBar1'
import Video from '../conponentes/Video'
import Agencia from '../conponentes/Agencia'
import Barra from '../conponentes/Barra'
import Servicios from '../conponentes/Servicios'
import Diseño from '../conponentes/Diseño'
import Pie from '../conponentes/Pie'
import Ws from '../conponentes/Ws'

function Home() {
  return (
    <>
    <NavBar1 />
    <Ws />
    <Video />
    <Agencia />
    <Barra />
    <Servicios />
    <Diseño />
    <Pie />

    </>
  )
}

export default Home
