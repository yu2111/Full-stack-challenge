import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

let blogs = [];

app.get("/", (req, res)=>{
  res.render("index.ejs")
})

app.get("/write", (req, res)=>{
  res.render("write.ejs")
})

app.post("/submit", (req, res)=>{
  blogs.unshift(req.body)
  res.render("index.ejs",{blogs: blogs})
})

app.listen(port, (req, res)=>{
  console.log(`from port: ${port}`);
})
