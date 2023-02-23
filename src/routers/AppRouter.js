import React from 'react';

import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/404/NotFoundPage';
import HomePage from '../pages/home/HomePage';
import UnsaPage from '../pages/home/UnsaPage';
import PuntajesPage from '../pages/puntajes/PuntajesPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/universidad-nacional-san-agustin" element={<UnsaPage />} />
            <Route path="/maximos-minimos-admision" element={<PuntajesPage/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}