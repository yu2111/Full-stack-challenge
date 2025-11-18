import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
  const today = new Date();
  const day = today.getDay();
  console.log(day);

  let dayT = "a weekday";
  let adv = "let's work hard";


  if (day === 0 || day === 6) {
    dayT = "the weekend";
    adv = "let's have some fun!";
  }

  res.render("index.ejs",
    {dayType: dayT,
    advice: adv });
});

app.listen(port, ()=>{
  console.log("from: " + port);
});
