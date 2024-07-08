var num1, num2,sign,total;
function checkHoisting(num) {
  var variable = document.getElementById("Screen");
  var history = document.getElementById('history');

  if(num=='c'){
    num1 = null;
    num2=null;
    sign = null;
    total=null;
    variable.innerText='';
    history.innerText='';
    return;
  }
    switch(num){
      case('+'):
      if(variable.innerText.length==0)
        {
            return;
        }
        sign = num;
        num1 = +variable.innerText;
        variable.innerText="";
        history.innerText=num1+sign;
  
      
      return;
      case('-'):
      if(variable.innerText.length==0)
        {
            return;
        }
      sign = num;
      num1 = +variable.innerText;
      variable.innerText="";
      history.innerText=num1+sign;

    
    return;
    case('*'):
    if(variable.innerText.length==0)
      {
          return;
      }
    sign = sign;
    num1 = +variable.innerText;
    variable.innerText="";
    history.innerText=num1+sign;

  
  return;
  case('/'):
  if(variable.innerText.length==0)
    {
        return;
    }
  sign = num;
  num1 = +variable.innerText;
  variable.innerText="";
  history.innerText=num1+sign;


return;
      case('='):
      if(variable.innerText.length==0)
        {
            return;
        }
      if(num1!=null){
        num2= +variable.innerText;
    
      switch(sign){
        case('+'):
        total = num1 +num2;
        break;
        case('-'):   total = num1 -num2;
        break;
        case('*'):   total = num1 *num2;
        break;
        case('/'):   total = num1 /num2;
        break;
      }
      if(num1!=null && num2!=null){
          variable.innerText = total;
          history.innerText = "";
      }
      return;
    } 
  
  }

    variable.textContent+=num;
  
    

  }