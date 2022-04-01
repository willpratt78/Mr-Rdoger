let base = 0
const array = [20]
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
    else if (element === 2) {
      returnArray.push("Boop!");
    }
    else if (element === 1) {
      returnArray.push("Beep!");
    }
    else {
      returnArray.push(element);
    };
  });
};



numberArray(array)
console.log(newArray)

numberReplacement(newArray)
console.log(returnArray)



