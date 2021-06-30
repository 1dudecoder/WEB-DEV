
let data = fs.readFileSync("D:\pep dev\wcat\num.txt","utf-8");

console.log(data);
let arr = data.split("\n");

for(let i = 0; i < arr.length; i++){
        line =  arr[i]
        arr[i] = i + ". "+ linel;
}

let ans = arr.join("\n");

console.log(ans);



// upper first caharcter of every word 
// let a = "rohit is a good boi";
// let arr = a.toLowerCase().split(' ');
// for( i = 0 ; i < arr.length; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
// }
// console.log(arr.join(" "));


//reverse the string
// let a = "rohit rana";
// let b = "";
// for(let i = a.length-1; i >= 0 ; i--){
//    b += a[i];
// }
// console.log(b);


// palendrome 
// let a = "nitin";
// let ans = "its palendrome";
// let i = 0;
// let j = a.length-1;
//  while(i <= j){
//      if(a[i] != a[j]){
//         ans = "its not palendrome";
//         break;
//      }
//      i++;
//      j--;
//  }
//  console.log(ans);


// count the characters 
// let a = "this is nitin and i am sttting with rohit in my room and we have been drinked our tea";
// let count = 0;
// for(let i = a.length-1; i >= 0; i--){
//     if(a.charAt(i) != " "){
//         count++;
//     }
// }
// console.log(count);

 // find the first non repeated characters 
// let a = "ohit is a good boi";
// let b = "";
// for(let i = 0 ; i < a.length; i++){
//     let char = a.charAt(i);
//     if(a.indexOf(char) == i && a.indexOf(char, i + 1) == -1){
//         b = char;
//         break;
//     }
//     b = "have no non repeated number"
// }

// console.log(b);





