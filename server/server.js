import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();

app.use(
  '/login',
  createProxyMiddleware({
    target: 'http://192.168.230.34:8080',
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});
