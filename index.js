const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const declaration = (req, res) => {
  res.statusCode = 200;
  res.write("<h1>Hi Rekha</h1>");
  res.end("Hello World");
};
const server = http.createServer(declaration);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// cd ~/.ssh
// ssh-keygen -t rsa -C "rekhabanga103@gmail.com" -f "github-rekha-personal"
// ssh-add -K ~/.ssh/github-rekha-personal
// git clone git@github.com-rekha-personal:rekhabanga99/nodejs.git
