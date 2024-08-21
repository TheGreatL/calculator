const buttons = document.getElementsByClassName("NumberButton");
const currentScreen=document.getElementById("screen");
const pastScreen=document.getElementById("history");

//buttons.forEach(index =>{buttons[index].addEventListener('click',()=>handleButtonClicked)});

for(let index = 0; index<buttons.length;index++){
  buttons[index].addEventListener('click',()=>handleButtonClicked(index));
}


function handleButtonClicked(index){
      //Clicked Button
    let buttonValue =  buttons[index].textContent;
    if(buttonValue =='C') {currentScreen.innerText ="";   pastScreen.innerText=""; return;}
     else if(isNaN(buttonValue)){
        
        if(currentScreen.innerText ==''){
          alert("Please Select Number First");
          return;
        }

      switch(buttonValue){
        case '+':
          break;
        case '-':
          break;
        case '*':
          break;
        case '/':
          break;

      }
      return;
     }
    currentScreen.innerText+=Number(buttonValue);

    
}