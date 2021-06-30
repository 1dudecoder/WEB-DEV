const fs = require("fs");
let count = 0 ;
let sum = 0;
function callback(filename,err,data) {
    if(!err){
        let arr = data.split("\n");
        for(let i = 0 ; i < arr.length;i++){
            sum += parseInt(arr[i]);
        }
        count += 1;
        console.log(filename + " has been read succesfully");

        if(count == 8){
            console.log(sum);
        }
    }
}

for(let i = 1 ; i <= 8; i++){
    fs.readFile(i + ".txt","utf-8", callback.bind(this,i+".txt"));
}