import React from 'react';
import Home from '../../components/ui/Home';
import Carrousel from '../../components/carrousel/Carrusel';
import Index from '../../components/layouts/Index';

const HomePage = () => {
    return (
    <>
        <Carrousel />
        <Index componente={<Home />} />
    </>)
}

export default HomePage