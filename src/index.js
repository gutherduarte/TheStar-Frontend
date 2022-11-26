import React from 'react'
import { createRoot } from 'react-dom/client';

import './index.css';
import { IndexRoutes } from './Router/Index.routes';
import { ContextProvider } from './contexts/ContextProvider';

createRoot(document.getElementById('root')).render(<App />)

function App() {
    return (
        <ContextProvider>
            <IndexRoutes />
        </ContextProvider>
    )
}
