import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
  console.log("this is from server");
})

app.get("/", (req, res)=>{
  res.send('<h1>Hello World</h1> <br> <a href= "/about">about</a> <br> <a href= "/contact">contact</a>');
})

app.get("/about", (req, res)=>{
  res.send("<h1>I'm Yu Sekiguchi</h1>");
})

app.get("/contact", (req, res)=>{
  res.send(`<a href= "https://linkedin.com">Linkedin</a>`);
})
