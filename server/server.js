'use strict';

import express from 'express';

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html'

express()
  .use((req, res) => { 
    req.originalUrl.startsWith("/assets")
      ? res.sendFile(req.originalUrl.replace('/assets/', ''), { root: './dist/assets' })
      : req.originalUrl.startsWith("/Tips.json")
        ? res.sendFile("/Tips.json", { root: './dist' })
        : res.sendFile(INDEX, { root: './dist' }) 
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));