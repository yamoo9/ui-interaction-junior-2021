/* Server Entry File */

// ES Moduels (Standards)
// 불러온다 (import)
// @import url("path");
// import module from 'path';
// import liveServer from 'live-server';

// V8, CommonJS Modules / AMD(RequireJS)
const liveServer = require('live-server');

// 구조 분해 할당
const { PORT, OPEN } = process.env;

const params = {
  host: 'localhost',
  port: PORT || 3000,
  open: OPEN || false,
};

liveServer.start(params);
