let hamburger = document.querySelector(".hamburger");
console.log(document.querySelectorAll("a"));
let hidden = document.querySelector(".hidden");
let hiddenChild=document.querySelector(".hiddenChild");
let first=document.querySelector("#first");
console.log("hello")
let var2 = true ;
function button(){
    if ( var2 === true ){
        console.log("hello")
        hidden.style.display="flex";
        
        // first.style.marginTop="40vh"

        var2 = false ;
    }
    else {
        hidden.style.display ="none";
        
        // first.style.marginTop="5vh"
        var2 = true ;
    }
}



hamburger.addEventListener("click" , button);