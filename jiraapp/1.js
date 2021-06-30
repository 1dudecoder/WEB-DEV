let filter = document.querySelectorAll(".rank .filter button ");
let toclick = document.querySelectorAll(".rank .filter");

let modalVisible = false;

let body = document.querySelector("body");

for (let i = 0; i < filter.length; i++) {

    filter[i].addEventListener("click", function (e) {
        let data = e.currentTarget.classList[0];
        let colors = data.split('-')[0];
        body.style.backgroundColor = colors;
    });
}


let addbtn = document.querySelector(".add-btn");

let flag = false;


addbtn.addEventListener("click", function (e) {

    if (modalVisible) return;

    if (flag == false) {
        let div = document.createElement("div");
        div.innerHTML = ` <div class="modal">
        <div class="editor" contenteditable data-placeholder="Enter your text here" >
        Enter your text here</div>
            <div class="mycolors">
                <div class="modalcolor pink"></div>
                <div class="modalcolor blue"></div>
                <div class="modalcolor green"></div>
                <div class="modalcolor black active"></div>
             </div>
    </div>`

        document.body.append(div);
        flag = true;

    }

    if (flag == true) {
        let editor = document.querySelector(".editor");
        editor.innerText = "";
    }


    let mycolors = document.querySelectorAll(".modalcolor");
    for (let i = 0; i < mycolors.length; i++) {
        mycolors[i].addEventListener("click", function (e) {
            for (let j = 0; j < mycolors.length; j++) {
                let findactive = mycolors[j].classList.value;
                let arr = findactive.split(" ");
                let tell = false;
                for (let f = 0; f < arr.length; f++) {
                    if (arr[f] == "active") {
                        mycolors[j].classList.remove("active");
                    }
                }
            }


            let data = e.currentTarget.classList;
            let classnamsare = mycolors[i].classList.value;
            mycolors[i].classList.add("active");
        })
    }

    let editor = document.querySelector(".editor");
    let modal = document.querySelector(".modal");

    editor.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            let data = editor.innerText;

            // if (data != "") {

                let mycolor = document.querySelectorAll(".modalcolor");

                for (let i = 0; i < mycolor.length; i++) {
                    let colorclassarr = mycolor[i].classList.value;
                    let classescolor = colorclassarr.split(" ");

                    for (let i = 0; i < classescolor.length; i++) {
                        if (classescolor[i] == "active") {
                            let colora = classescolor[1];
                            let rand = Math.floor(Math.random() * 10000);
                            console.log(rand);
                            let div = document.createElement("div");
                            div.innerHTML = `<div class="taskshow ">
                            <div class="taskcolor ${colora}"></div>
                            <h5>#${rand}</h5>
                            <div class="taskeditor" contenteditable>
                            ${data}
                            </div>
                        </div> `

                        document.body.append(div);
                        modal.remove();
                        }
                    }
                }

            // }

            modalVisible = false;
        }


    })

    modalVisible = true;
})





