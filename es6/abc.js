let obj = {
    someArr: [3, 7, 12],
    f: function () {
      let f2 = () => {
        this.someArr.map(function (e) {
          console.log(2 * e);
        });
      };
      f2();
    },
  };
  
  obj.f();
  
  // //normal function (keyword function; i can give it a name)
  // function f1() {
  //   console.log("Hi");
  // }
  
  // //arrow function (no keyword only symbols; i cannot give it name so i've to store it in a variable)
  // let f2 = () => {
  //   console.log("Hi");
  // };
  
  // // ------------------------------------------------------
  
  // function f3() {
  //   return 2;
  // }
  
  // let f4 = () => 2;
  
  // // --------------------------------------------------------
  
  // function f5(a, b) {
  //   return 2;
  // }
  
  // let f6 = (a, b) => 2;
  
  // // --------------------------------------------------
  
  // function f7(a) {
  //   return 2;
  // }
  
  // let f8 = (a) => 2;
  
  // IIFE
  
  // (() => {
  //   console.log("THIS IS AN IIFE USING ARROW FUNCTION ");
  // })();


let obj = {
    somearr:[2,4,5],
    f:function(){
        this.somearr
    }
}



//normal function
function f1(){
    console.log("h1");
}
// this bechave differntly in function and in Arrayfuction differntly
//arrow function
let a = () =>{
    return 2;
}


golden rule jhn pe normal fucntions

// invi - imidanly incoke fucntions jis fucntions k pass nam ni hota 
