function countTrue(arr){
    let count = 0;
    for(let i = 0 ; i < arr.length;i++){
        if(arr[i] == true){
            count += 1;
        }
    }
    console.log(count)
}

countTrue([false, false, false, false, false]);