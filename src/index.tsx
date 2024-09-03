// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
} else {
    console.error('Failed to find root element');
}
