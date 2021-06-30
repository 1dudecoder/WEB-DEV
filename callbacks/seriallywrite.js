const fs = require("fs");
let file = 0;
function callback(err){
    file += 1;
    if(!err && file <= 8){
        let data = "";
        let rand = Math.floor(Math.random()*100);
        for(let i = 0 ; i < rand ;i++){
            if(i == rand-1){
                data += Math.floor(Math.random()*100);
            }else{
                data += Math.floor(Math.random()*100) + "\n";
            }
        }
        console.log(file);
        fs.writeFile(file+".txt",data,callback);
    }
}

callback(undefined);

