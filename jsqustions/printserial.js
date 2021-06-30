const fs = require("fs");

for(let i=0; i <= 10; i++){
    const mynum = Math.floor(Math.random() * 101);
    let a = fs.readFileSync("1.txt","utf-8");
    fs.writeFileSync("1.txt",a + mynum + "\n");
}

for(let i=0; i <= 10; i++){
    const mynum = Math.floor(Math.random() * 101);
    let a = fs.readFileSync("2.txt","utf-8");
    fs.writeFileSync("2.txt",a + mynum + "\n");
}


for(let i=0; i <= 10; i++){
    const mynum = Math.floor(Math.random() * 101);
    let a = fs.readFileSync("3.txt","utf-8");
    fs.writeFileSync("3.txt",a + mynum + "\n");
}


for(let i=0; i <= 10; i++){
    const mynum = Math.floor(Math.random() * 101);
    let a = fs.readFileSync("4.txt","utf-8");
    fs.writeFileSync("4.txt",a + mynum + "\n");
}


    fs.readFile("1.txt",callback());    


    function callback(err,res,data){
        if(!err){
            console.log(data);
        }
    }
    fs.writeFile()

