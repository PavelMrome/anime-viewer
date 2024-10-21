const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://anilibria.tv',
      changeOrigin: true,
      pathRewrite: {
        '^/api': 'api/v3', // Убирает '/api' из пути и добавляет 'api/v3'
      },
      
    })
  );
};
