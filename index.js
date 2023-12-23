let a = document.querySelector("#input");
let b = document.querySelector("#input2");
let nofloor = document.getElementById("label1")
let floor = document.getElementById("label2")

function hypotno(){
    nofloor.innerHTML = Math.hypot(a.value,b.value)
}
function hypot(){
    floor.innerHTML = Math.floor(Math.hypot(a.value,b.value))
}

nofloor.addEventListener("click",hypotno)
floor.addEventListener("click",hypot)