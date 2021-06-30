let fs = require("fs");
let file = 1;
let sum = 0;
function callback(err, data){
    if(!err){
        let arr = data.split("\n");
        for(let i = 0 ; i < arr.length;i++){
            sum += parseInt(arr[i]);
        }
        file += 1;
        console.log(file+" has been read");
        if(file > 8){
            console.log(sum);
            return;    
        }

        fs.readFile(file+".txt","utf-8",callback);
    }
}

fs.readFile(file+".txt","utf-8",callback);