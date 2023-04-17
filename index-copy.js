const express = require("express");
const path = require("path");
const publicPath = path.join(__dirname, "public");
const app = express();

// app.use(express.static(publicPath));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});






// define application middleware
// const reqFilter = (req, res, next) => {
//   const age = req.query.age;
//   if (!age) {
//     res.send(`you cannot access home page please provide age`);
//   } else if (age < 10) {
//     res.send(`age is less than 10`);
//   } else {
//     res.send(`Hi wecome to home page`);
//     next();
//   }
// };


//  application level middleware will work on all routes
// app.use(reqFilter);


//  route level middleware will work on specific route
// app.get('/age', reqFilter, (req, res) => {
//   res.sendFile(`${publicPath}/pageNotFound.html`);
// });


// without Html File 
// app.get("/", (req, res) => {
//   res.send(`Hi wecome to user page`);
// });
// app.get("/users", (req, res) => {
//   res.send(`Hi wecome to home page`);
// });

// with Html File 

// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get('/about', (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get('/help', (req, res) => {
//   res.sendFile(`${publicPath}/help.html`);
// });
// app.get('/age', (req, res) => {
//   res.sendFile(`${publicPath}/pageNotFound.html`);
// });
// app.get('*', (req, res) => {
//   res.sendFile(`${publicPath}/pageNotFound.html`);
// });

app.listen(4000, () => console.log("Server is running at port 4000"));
