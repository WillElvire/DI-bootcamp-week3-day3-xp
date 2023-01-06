

/**
 * @author : Wilfried koua
 * @description : The purpose of this code to move the box inside the container after the button get clicked
 * @param  : box      : HTMLElement
 * @param  : margin   : Number
 * @param  : interval : Number
 */

/******************** EXERCICE 2 ********************/

//setting up variables
let box = document.getElementById("animate");
let margin = 0;
let interval ;


//declare functions
function myMove(){
   margin = 0;
   interval = setInterval(moveElement,100);
}

//this function is used to move the box inside the container
function moveElement(){

    //tcheck if the box arrive at the en of the container
    if(margin>=351){
        //clear the interval
        clearInterval(interval);
    }else{
        //move the box in the container using style
        box.style.marginLeft= `${margin}px`;
        //increment the margin took by the box
        return  margin = margin + 1;
    }
  
}