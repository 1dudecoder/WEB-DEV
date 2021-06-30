function sevenBoom(arr){
    for(let i = 0; i < arr.length;i++){
        if(arr[i]=="7"){
            console.log("boom");
            return;
        }
    }
    console.log("there is no 7 in the array");
}

sevenBoom([1, 2, 3, 4, 5, 6, 7]);

        