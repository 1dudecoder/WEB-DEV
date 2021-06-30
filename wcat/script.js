// #!/usr/bin/env node

// const fs = require("fs");


// let data = "";
// let processdata = process.argv;  //take input from the users


// if(processdata[2] == "a"){
//     let privious = fs.readFileSync(processdata[3],"utf-8");
//     fs.writeFileSync(processdata[3] +  privious +"\n"+  processdata[4]);
// }else if(processdata[2] == "w"){
//     fs.writeFileSync(processdata[3],processdata[4]);
// }else{
//     let data = "";
//     let updata = false;
//     for(let i = 2 ; i < processdata.length; i++){
//     if(processdata.includes = "ne"){
//         if(update){
//             i = i + 1;
//             updata = true;
//         }
//         let tempData = fs.readFileSync(processdata[i],"utf-8");
//         let lines = tempData.split("\n");
//         if(tempData.includes == "\r"){
//             lines = tempData.split("\r\n");
//         }
//         let finaldata = "";
//         for(j = 0; j < lines.length; j++){
//             if(lines[j] != ""){
//                 finaldata += lines[j]+ "\n";
//             }
//         }
//         data += finaldata;
//     }else{
//             data += "\n" + fs.readFileSync(processdata[i],"utf-8");
//         }
//     }

// }




// //1 reading a unlimated files 
// // let processdata = process.argv;
// // let data = "";
// // for(let i = 2; i < processdata.length;i++){
// //     data = data + "\n" + fs.readFileSync(processdata[i],"utf-8");
// // }
// // console.log(data);


// // 2 taking 2 input at a time 
// // const filename = process.argv[2];
// // const filename2 = process.argv[3];

// // let data = fs.readFileSync(filename,"utf-8");
// // let data2 = fs.readFileSync(filename2,"utf-8");

// // console.log(data, "\n"+ data2) ;


// //3 reading a file and writing also 
// // let data = fs.readFileSync("D:\\pep dev\\wcat\\abc.txt","utf-8");
// // // console.log(data);

// // fs.writeFileSync("dodo.txt","remove old content and write new name on it ");

// // let dojo = fs.readFileSync("D:\\pep dev\\wcat\\dodo.txt","utf-8");
// // console.log(dojo);