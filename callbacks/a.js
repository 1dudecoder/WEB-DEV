let a = true;
    setTimeout(function(){
    console.log("finished");
    a = false;
}, 1000);

while(a){
    console.log("hello");
}