import App from './app.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'Manatee'
    }
});

export default app;