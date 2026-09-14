const express = require('express');
 var cors = require('cors');
const {resolve} = require("node:path");
const app = express();
 app.use(cors());

 const corsMiddleware = (req, res, next) => {
     console.log('CORS middleware ' + req.method + " at " + req.url);

    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );

    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
   res.setHeader('Content-Type', 'text/javascript');

     next();
 };

const port = 3100;
const sainceRoot = __dirname + '/../dist';
const ohifRoot = resolve(__dirname + '/../../../platform/app/dist')
console.log(`serving from ${sainceRoot}`);
console.log(`also serving from ${ohifRoot}`);
app.use('/ohifv3',express.static(ohifRoot, {
  setHeaders(res,filePath, stat) {
    console.log(`*****************static serving from ${ohifRoot} filePath: ${filePath}`);
    if (filePath.endsWith('.js')) {
      res.set('Content-Type','text/javascript');
    }
    if (filePath.endsWith('.html')) {
      res.set('Content-Type','text/html');
    }
}
}));
app.use('/',express.static(sainceRoot,{
  setHeaders(res,filePath, stat) {
    console.log(`***********static for file: ${filePath}`);
  }
}));
app.all('*', corsMiddleware)
app.get('/ohifv3', (req, res) => {
    const muParam = req.query.mu;
    const filePath = ohifRoot + '/index.html';
    console.log(`***********************sending back ohif v3 index file ${filePath} units: ${muParam}`);
    res.sendFile(filePath);
})
app.use('/ohifv3',express.static(ohifRoot,{
  setHeaders(res,filePath, stat) {
    console.log(`********************setting second static ohifv3 headers for file: ${filePath}`);
  }
}));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
