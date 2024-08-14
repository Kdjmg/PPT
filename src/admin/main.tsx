import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminApp from './AdminApp';
import { BrowserRouter } from 'react-router-dom';


// Monte l'application admin
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
        
        <AdminApp />

        </BrowserRouter>
    </React.StrictMode>
);
