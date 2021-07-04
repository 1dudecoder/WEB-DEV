// let obj = {
//     someArr: [3, 7, 12],
//     f: function () {
//       let f2 = () => {
//         this.someArr.map(function (e) {
//           console.log(2 * e);
//         });
//       };
//       f2();
//     },
//   };
  
//   obj.f();
  
//   // //normal function (keyword function; i can give it a name)
//   // function f1() {
//   //   console.log("Hi");
//   // }
  
//   // //arrow function (no keyword only symbols; i cannot give it name so i've to store it in a variable)
//   // let f2 = () => {
//   //   console.log("Hi");
//   // };
  
//   // // ------------------------------------------------------
  
//   // function f3() {
//   //   return 2;
//   // }
  
//   // let f4 = () => 2;
  
//   // // --------------------------------------------------------
  
//   // function f5(a, b) {
//   //   return 2;
//   // }
  
//   // let f6 = (a, b) => 2;
  
//   // // --------------------------------------------------
  
//   // function f7(a) {
//   //   return 2;
//   // }
  
//   // let f8 = (a) => 2;
  
//   // IIFE
  
// anynomas functions
//   // (() => {    
//   //   console.log("THIS IS AN IIFE USING ARROW FUNCTION ");
//   // })();


// let obj = {
//     somearr:[2,4,5],
//     f:function(){
//         this.somearr
//     }
// }


// //normal function
// function f1(){
//     console.log("h1");
// }
// // this bechave differntly in function and in Arrayfuction differntly
// //arrow function
// let a = () =>{
//     return 2;
// }


// golden rule jhn pe normal fucntions use nhi hota whn pr arrow funtions use kro api mai

// // invi - imidanly invoke fucntions jis fucntions k pass nam ni hota 


// spread operator
// let arr = [];
// for(let i = 0 ; i < 8; i++){
//    arr.push(i*2);
// }

// let b = arr.slice(0,3);
// let c = arr.slice(3);

// let ans = [...b,20,...c];
// // let ans = [...arr.slice(0,3),20,...arr.slice(3)];  or like this

// console.log(ans);


// array distructoring 
// let ans  = [ b,c,d ]  = [ 20,30,50 ];
// let [rock,paper,ciser] = ["rock","paper","ciser"];
// let [m,,n] = ["rock","paper","ciser"];   //ignoring middle one so directly we can get last element
// console.log(n);

// --------------------------------------------------------------------------
// object distructoring
// objct k key ka nam bnana pdega uske object ko destructor krne k liye 

// 1 way
// let  a = {
//    x : "alpha",
//    y : "beta"
// }
// let {x} = a;    // object access krne k liye key name ka variable hi use krna pdega
// console.log(z);  

// --------------------------------------------------------------------------
// 2 way
// let  a = {
//    x : {
//       z : "zibra"
//    },
//    y : "beta"
// // }
// let {x:{z}} = a;    // object access krne k liye key name ka variable hi use krna pdega
// console.log(z);  
// --------------------------------------------------------------------------




