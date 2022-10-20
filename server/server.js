'use strict';

import express from 'express';
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html'

express()
  .use((req, res) => { 
    req.originalUrl.startsWith("/assets")
      ? res.sendFile(req.originalUrl.replace('/assets/', ''), { root: './dist/assets' })
      : res.sendFile(INDEX, { root: './dist' })
    
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));