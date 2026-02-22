const http = require('http');

const email = '23f1002691@ds.study.iitm.ac.in';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(email);
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
