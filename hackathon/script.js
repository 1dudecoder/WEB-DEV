const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

    request("https://www.covid19india.org/",callback);

let covid = [];
function callback(err,res,html){
    if(!err){
        let $ = cheerio.load(html);
        let name = $(".level-item.is-confirmed.fadeInUp h1");
        let ans = $(name);
        console.log(ans.text());
    }    
}