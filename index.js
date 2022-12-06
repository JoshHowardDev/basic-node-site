const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url)
  switch(req.url) {
    case('/'): {
      fs.readFile('index.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
        return res;
      });
    }
    case('/about'): {
      fs.readFile('about.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
        return res;
      });

    }
    case('/contact-me'): {
      fs.readFile('contact-me.html',function(err,data){
        if (err) throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
        return res;
      });

    }
    default: {
      fs.readFile('404.html',function(err,data){
        if (err) throw err;
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
        return res;
      });
    }
  }
    
});

server.listen(port, hostname, () => {
  console.log('Listening');
});