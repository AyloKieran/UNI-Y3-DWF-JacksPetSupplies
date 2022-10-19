'use strict';

import express from 'express';
const PORT = process.env.PORT || 3000;

express()
  .use(express.static('dist'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));