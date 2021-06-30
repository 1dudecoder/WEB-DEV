const fs = require("fs");


function parallelwrite(file,err) {

    if (!err && file < 16) {
        let noOfline = Math.floor(Math.random() * 101);
        console.log(file  + "has been written");
        for (let i = 0; i < noOfline; i++) {
            if (i == noOfline - 1) {
                str += Math.floor(Math.random() * 101);
            } else {
                str += Math.floor(Math.random() * 101) + "\n";
            }
        }

        fs.writeFile(file+".txt",str);
    }
}

let str = "";
for (let i = 9; i <= 16; i++) {
   fs.writeFile(i + ".txt",str,parallelwrite.bind(this, i));
}