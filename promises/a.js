let a = 2;

let ePromise = new Promise (function(res,rej){
    if(a%2 == 0){
        res("succesfully resolved");
    }else{
        rej();
    }
})

ePromise.then((data) => {
    console.log(data);
    return "abcd";
}).then(function(data){
    console.log(data);
}).catch(() => {
    console.log("hellow");
});