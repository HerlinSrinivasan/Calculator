const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars=["%","*","/","-","+","="]
let output ="";
const calculate= (btnValue)=>{
    if(btnValue === "=" && output!== ""){
        output=eval(output.replace("%","/100"));
}else if(btnValue==="AC"){
    output="";
}else if(btnValue=="DEL"){
    output=output.toString().slice(0,-1);
}else{
    if(output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
}
    display.value=output;

};
buttons.forEach((button)=> {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});
document.addEventListener("keydown", (e) => {
const key = e.key;
    if (!isNaN(key) || key === ".") {
      calculate(key);
    }
    if (["+", "-", "*", "/", "%"].includes(key)) {
      calculate(key);
    }
    if (key === "Enter") {
      e.preventDefault(); // Prevent form submission if any
      calculate("=");
    }
    if (key === "Backspace") {
      e.preventDefault();
      calculate("DEL");
    }
    if (key === "Escape") {
      calculate("AC");
    }
  });
  
