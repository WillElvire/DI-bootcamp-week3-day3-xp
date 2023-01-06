/**
 * @author : Wilfried koua
 * @description : The purpose of this code to move the box inside the container after the button get clicked
 * @param  : target : HTMLElement
 * @param  : box    : HTMLElement
 */

/******************** EXERCICE 3 ********************/

//setting up variables

let target = document.getElementById("target");
let box    = document.getElementById("box");

//set the box draggable 
box.setAttribute("draggable","true");

//event triggered when the drag start
box.addEventListener("dragstart",function(event){
    event.target.style.backgroundColor = "gray";
    console.log("x",event.clientX , "y" , event.clientY);
});
// when the drag end
box.addEventListener("dragend",function(event){

    //taking position of the box
    let posX = event.clientX;
    let posY = event.clientY;

    //modify element style
    event.target.style.backgroundColor  = "red";
    event.target.style.left     = posX + "px";
    event.target.style.top      = posY + "px";
    event.target.style.position = "absolute"; //Necessary   

})