const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url);

  let filepath = "";

  if (req.url === "/") {
    filepath = path.join(__dirname, "index.html");
  }
  else if (req.url === "/about") {
    filepath = path.join(__dirname, "about.html");
  }
  else if (req.url === "/contact") {
    filepath = path.join(__dirname, "contact.html");
  } else {
    filepath=path.join(__dirname, "404.html");
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("server Error");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });

  
  });
  const port = 5000;

  server.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
