if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
    try {
        const reg = await navigator.serviceWorker.register('/sw.js');
        console.log('Service Worker registrado:', reg.scope);
    } catch (err) {
        console.error('Error al registrar Service Worker:', err);
    }
    });
}