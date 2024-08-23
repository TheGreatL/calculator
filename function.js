const buttons = document.getElementsByClassName("NumberButton");
const currentScreen=document.getElementById("screen");
const pastScreen=document.getElementById("history");

for(let index = 0; index<buttons.length;index++){
  buttons[index].addEventListener('click',()=>handleButtonClicked(index));
}


function handleButtonClicked(index){
      //Clicked Button
    let buttonValue =  buttons[index].textContent;

    if(buttonValue =='C') {currentScreen.innerText ="";   pastScreen.innerText=""; return;}

    if(!isNaN(buttonValue)){
      //If Number
      currentScreen.innerText+=Number(buttonValue);
      return;
    }
    if(currentScreen.innerText ==''){
          alert("Please Select Number First");
          return;
        }
 
        if(buttonValue=='='){
           if(pastScreen.innerText=='') alert("Complete the task first");
          currentScreen.innerText= eval(pastScreen.innerText+currentScreen.innerText);
          pastScreen.innerText="";
          return;
        }
        clickedSymbol(buttonValue);

}
function clickedSymbol(buttonValue){
  pastScreen.innerText+= currentScreen.textContent+buttonValue;
  currentScreen.textContent="";
}