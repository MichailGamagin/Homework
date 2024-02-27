const { link } = require("fs");
const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.write("<p>This is my first server</p>");

  res.end();
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
