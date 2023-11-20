const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: "https://localhost:8080",
  changeOrigin: true,
});
export default proxy;
