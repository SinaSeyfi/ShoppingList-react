import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import './assets/css/FontAwesome.Pro.6.3.0/css/all.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

