console.log("started");
let screen=document.getElementById("screen");
let button=document.querySelectorAll("button");
let screenValue="";
let buttonText=""
for(let i=0; i<button.length; i++){
    button[i].addEventListener("click", (e)=>{
        
         buttonText=e.target.innerText;
        console.log(buttonText);
        
           
        if(buttonText== '='){
            let beforeE=screenValue;
            screenValue = eval (screenValue);
            history(beforeE,screenValue);
        }
          else if(buttonText == 'AC'){
            screenValue='';
          }
        
        else{
            screenValue = screenValue + buttonText;
            
        }
        screen.value=screenValue
    })
}
let history_ul=document.getElementById("history_ul");
function history(beforeE,afterE){
    console.log(beforeE+"="+afterE);
    let li=document.createElement("li");
    let text=document.createTextNode(beforeE+"="+afterE);
    li.appendChild(text);
    history_ul.appendChild(li);


}