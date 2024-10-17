import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
const app = express();

app.use(
  '/login',
  createProxyMiddleware({
    target: 'http://192.168.230.34:8080',
    changeOrigin: true,
    onError: (err, req, res) => {
      console.error('Proxy error:', err);
      res.status(500).send('Something went wrong.');
    },
  })
);

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable for the port
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});