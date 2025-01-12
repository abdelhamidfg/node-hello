const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = `Hello Node! ${port} ${process.env.MSG} ${process.env.dbpassword}\n`
  res.end(msg);
});

server.listen(port, () => {
  console.log('hi version 3');
  console.log(`Server running on http://localhost:${port}/`);
  console.log(process.env.PORT);
});
