// Business Logic

let base = 0; 
let array = []
let newArray =[]
let returnArray = []
function numberArray() {
  while (array >= base) {
  newArray.push(base ++);
}
}

console.log(returnArray)


function numberReplacement() {
newArray.forEach(function(element) {
    if  (element.toString().includes(3)) {
       returnArray.push("Won't you be my neighbor?");
    }
    else if (element.toString().includes(2)) {
      returnArray.push("Boop!");
    }
    else if (element.toString().includes(1)) {
      returnArray.push("Beep!");
    }
    else {
      returnArray.push(element);
    };
  });
};

//UI Logic

$(document).ready(function() {
  $("#number-form").submit(function(e) {
    e.preventDefault();
    let number = parseInt($("#number").val());
    array.push(number)
    numberArray(array)
    numberReplacement(newArray)
    
    $("#output").text("");
    $("#output").append(returnArray.join(', '))

  })
})