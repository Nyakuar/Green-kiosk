
    var http = require('http'); // Import Node.js core module
    var GreensKiosk = require('./Greenskiosk');
    
    var server = http.createServer(function (req, res) {   // create web server
    
      // Set CORS headers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Request-Method', '*');
      res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
      res.setHeader('Access-Control-Allow-Headers', '*');
      if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
      }
    
      if (req.url === '/') { // check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write('<html><body><p>Greens Kiosk API.</p></body></html>');
        res.end();
      }
      else if (req.url === "/products") { // check the URL of the current request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(GreensKiosk.getItems()));
        res.end();
      }
      else if (req.url === "/products/fruits") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(GreensKiosk.getItems('fruits')));
        res.end();
      }
      else if (req.url === '/products/vegetables') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(GreensKiosk.getItems('vegetables')));
        res.end();
      }
      else
        res.end('Invalid Request!');
    
    });
    
    server.listen(5000); // listen for any incoming requests
    
    console.log('Node.js web server at port 5000 is running..')

