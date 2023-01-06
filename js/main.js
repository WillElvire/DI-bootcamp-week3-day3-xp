
/**
 * @author : Wilfried koua
 * @description : The purpose of this code to master js function such as setTimeout and setInterval
 * @param  : container : HTMLElement
 * @param  : clearBtn : HTMLElement
 * @param  : interval : Number
 */

/******************** EXERCICE 1 ********************/

//setting up variables

let container   = document.getElementById("container");
let clearBtn    = document.querySelector("#clear");
const interval  = setInterval(addParagraph,2000);

setTimeout(sayHello,2000)
setTimeout(createParagraph,2000);


//listen the button when this one is clicked
clearBtn.addEventListener("click",function(){
    return clearInterval(interval);
})


//declaration of functions
function sayHello (){
    alert("Hello word");
}
//ceate a paragraph
function createParagraph(){
    
    const p     = document.createElement("p");
    p.innerText = "Hello world";
    container.appendChild(p);
}
//add a paragraph
function addParagraph(){

    const paragraphs = document.querySelectorAll("#container > p");
    if(paragraphs.length >= 5 )  {
        clearInterval(interval);
    }
    else{
        const p     = document.createElement("p");
        p.innerText = "Hello world";
        container.appendChild(p);
    }
   

}
