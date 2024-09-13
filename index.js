
const display=document.getElementById("display")

const reset=document.getElementById("reset")



reset.addEventListener("click",()=>{

     display.textContent="0"
   
    
})


function appendNumber(number){

        const value=number.toString()

        if(display.textContent === "0"){
            display.textContent=value;
        }
        else{

            display.textContent+=value;
        }

    }

  function appendOperator(operator){

    
        const lastChar =display.textContent.slice(-1);
        if (!isNaN(lastChar)) {  
                      display.textContent+= operator;
        }
        
    }
    function appendDot() {
        if (!display.textContent.includes('.')) {
            display.textContent += '.';
        } 
    
    }

const operation=document.getElementById("operation")
operation.addEventListener("click",()=>{

    display.textContent=eval(display.textContent)

})

const delet=document.getElementById("delet")

delet.addEventListener("click",()=>{

    display.textContent= display.textContent.slice(0,-1)
})


