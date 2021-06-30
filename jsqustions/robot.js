function coordin(a) {
    let i = 0;
    let  j = 0;
    let dir = 1;
    for (let i = 0; i < a.length; i++) {
        if( dir >4)
        {
            dir %= 4;
        }
        if (dir == 1) {
            y += a[i];
            dir++;
            continue;
        } else if ( dir == 2) {
            x += a[i];
            dir++;
            continue;
        } else if (dir == 3) {
            y -= a[i];
            dir++;
            continue;
        } else if (dir == 4) {
            x -= a[i];
            dir++;
            continue;
        } 
    }
    console.log("("+x+","+y+")");