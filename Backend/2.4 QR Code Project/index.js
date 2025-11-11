/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import  inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "input URL",
      name: "url",
    }
  ])
  .then((answers) => {
    const answer = answers.url;
    var qr_svg = qr.image(answer);
    qr_svg.pipe(fs.createWriteStream('url.png'));
    fs.writeFile("url1.txt", `${answer}`, (err)=>{
    if (err) throw err;
    console.log("succeeded") ;
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
