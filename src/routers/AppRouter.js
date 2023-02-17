import React from 'react';

import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/404/NotFoundPage';
import HomePage from '../pages/home/HomePage';
import UnsaPage from '../pages/home/UnsaPage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/universidad-nacional-san-agustin" element={<UnsaPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}