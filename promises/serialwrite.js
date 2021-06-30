const fs = require("fs");

function main(){
    let compelete_prms  = writepromis("1.txt");
    for(let i = 2 ; i <= 8; i++){
        compelete_prms = compelete_prms.then(function(){
            console.log(i-1 +".txt writen compeleted");
            return writepromis(i+".txt");
        });
    }
}

function writepromis(filename){
    let data = "";
        let rand = Math.floor(Math.random()*100);
        for(let i = 0 ; i < rand ;i++){
            if(i == rand-1){
                data += Math.floor(Math.random()*100);
            }else{
                data += Math.floor(Math.random()*100) + "\n";
            }
        }
        return fs.promises.writeFile(filename,data);
}

main();