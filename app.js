
document.addEventListener("keydown",function(e){

if(e.key==="Enter"){

buscar()

}

})

function buscar(){

let q=document.getElementById("buscar").value

window.open("https://www.google.com/search?q="+q)

}
