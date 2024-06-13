import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./app/App";

if(process.env.NODE_ENV === 'developmet') {
    new EventSource('/esbuild').addEventListener('change', () => location.reload());
}

const container = document.getElementById('root');

if(container){
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}else{
    throw new Error('No container with id "root"');
}

