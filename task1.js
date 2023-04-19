// function for increment button
function i(){
    //Taking Element by id from DOM  and assigning that div to xy
   let xy= document.getElementById("counter") ;
   let x=xy.textContent;
   x=Number(x);
   x=x+1;
    // updating count
   document.getElementById("counter").innerHTML=x;
    // conditons to set a baground color
   if(x>0){
    document.getElementById("counter").style.backgroundColor="red";
   }
   else if(x<0){
    document.getElementById("counter").style.backgroundColor="green";
   }
   else{
    document.getElementById("counter").style.backgroundColor="blcak";
   }
    
}
// function for decrement button
function d(){
    //Taking Element by id from DOM  and assigning that div to xy
    let xy= document.getElementById("counter") ;
    let x=xy.textContent;
    x=Number(x);
    x=x-1;
     // updating count
   document.getElementById("counter").innerHTML=x;
   // conditons to set a baground color

    if(x>0){
        document.getElementById("counter").style.backgroundColor="red";
       }
       else if(x<0){
        document.getElementById("counter").style.backgroundColor="green";
       }
       else{
        document.getElementById("counter").style.backgroundColor="blcak";
       }
     
 }
// function for Reset button
 function R(){
    //Taking Element by id from DOM  and assigning that div to xy
    let xy= document.getElementById("counter") ;
    let x=xy.textContent;
    x=0;
     // updating count
   document.getElementById("counter").innerHTML=x;
   // conditons to set a baground color
    if(x>0){
        document.getElementById("counter").style.backgroundColor="red";
       }
       else if(x<0){
        document.getElementById("counter").style.backgroundColor="green";
       }
       else{
        document.getElementById("counter").style.backgroundColor="black";
       }
 }

