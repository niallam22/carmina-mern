const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/server',
    createProxyMiddleware({
      target: 'http://localhost:2121',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/server': '' }
    })
  );
};
