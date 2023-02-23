import React from 'react';
import Index from '../../components/layouts/Index';
import VerPuntajes from '../../components/ui/puntajes/VerPuntajes';

const PuntajesPage = () => {
    return (
    <>
        <Index componente={<VerPuntajes />} />
    </>)
}

export default PuntajesPage;