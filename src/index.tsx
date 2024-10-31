
import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Layout from './app/layout';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </React.StrictMode>
);

