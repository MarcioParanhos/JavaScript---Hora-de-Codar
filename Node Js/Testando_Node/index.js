const { createServer, request } = require("http");

let server = createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/html" });
  response.write('<h1>Marcio Paranhos</h1><p>Primeira Pagian web com Node.js</p>');
  response.end();
});

server.listen(8000);
console.log("Listening! (port 8000)");
