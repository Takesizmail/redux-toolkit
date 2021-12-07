/**
 * Dev proxy issue 
 * https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://173.212.193.40:5486',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      }, 
    })
  );
};