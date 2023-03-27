export default {
    server: {
        port: 4444,
        host: 'local.dev',
        https: true,
    },
    plugins: [mkcert()],
    build: {
        minify: true,
    },
};