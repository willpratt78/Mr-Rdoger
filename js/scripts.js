// Business Logic

let base = 0; 
const array = []
let newArray =[]
let returnArray = []
function numberArray() {
  while (array >= base) {
  newArray.push(base ++);
}
}
console.log(newArray)

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
    const number = parseInt($("#number").val());
    array.push(number)
    numberArray(array)
    numberReplacement(newArray)

    $("#output").text("");
    $("#output").append(returnArray.join(', '))
  })
})



numberArray(array)
console.log(newArray)

numberReplacement(newArray)
console.log(returnArray)



