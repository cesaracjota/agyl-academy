import React from 'react'
import Index from '../../components/layouts/Index'
import Unsa from '../../components/ui/unsa/Unsa'
import Carrousel from '../../components/ui/unsa/Carrousel'

const UnsaPage = () => {
  return (
    <>
      <Carrousel />
      <Index componente={<Unsa />} />
    </>
  )
}

export default UnsaPage;