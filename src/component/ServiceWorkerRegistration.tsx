'use client'; // Mark this as a Client Component

import { useEffect } from 'react';
function ServiceWorkerRegistration() {

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    console.log('Service Worker registered:', registration);
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        }
    }, []);

    return null
}

export default ServiceWorkerRegistration