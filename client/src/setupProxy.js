const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/', //endpoint of request that will be proxied
    createProxyMiddleware({
      target: 'http://localhost:2121',
      changeOrigin: true,
      secure: false,
    })
  );
};
