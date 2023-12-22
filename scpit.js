let alert1 = document.getElementById("button");
alert1.addEventListener('click',()=>{
    alert("website is not a complete");
});
let hamburger = document.getElementById("hamburger");
let navright  = document.getElementById("nav-right");
hamburger.addEventListener('click',()=>{
    navright.classList.toggle("active");
})

function come() {

    m2.classList.add("active");
}
var s = 2;
var r = 2;
function scrolL() {


    if (r == 1 && s == 2 || r == 0 && s == 3) {
        let m2 = document.getElementById("m2");
        let m3 = document.getElementById("m3");
        m3.classList.remove("active");
        m2.classList.remove("active");
        s--;
        r++;
    }
    else if (r == 2 && s == 1 || r == 1 && s == 2) {
        let m1 = document.getElementById("m1");
        let m2 = document.getElementById("m2");
        m1.classList.add("active")
        m2.classList.add("active")
        s--;
        r++;
    }
    else if (s == 2) {
        let m1 = document.getElementById("m1");
        let m2 = document.getElementById("m2");
        let m3 = document.getElementById("m3");
        m3.classList.remove("active")
        m2.classList.add("active")
        m1.classList.add("active")
        s--;
    }
}


function scrolR() {
    if (r == 3 && s == 0 || r == 2 && s == 1) {

        let m2 = document.getElementById("m2");
        let m1 = document.getElementById("m1");
        m1.classList.remove("active")

        m2.classList.remove("active")
        r--;
        s++;
    }
    else if (r == 2 && s == 1 || r == 1 && s == 2) {

        let m3 = document.getElementById("m3");
        let m2 = document.getElementById("m2");
        m3.classList.add("active")

        m2.classList.add("active")
        r--;
        s++;
    }
    else if (r == 2) {

        let m2 = document.getElementById("m2");
        let m3 = document.getElementById("m3");
        m3.classList.add("active")
        m2.classList.add("active")

        r--;
    }
}

