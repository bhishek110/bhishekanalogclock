var display = document.querySelector(".show")

function displayValue(val){
  display.value = display.value + val;
}

function ac(){
  display.value = '';
}

function de(){
  display.value = display.value.slice(0, -1);
}

function calculate(){
  result = eval(display.value);
  display.value = result;
}