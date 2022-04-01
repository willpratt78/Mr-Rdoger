let base = 0
const array = [5]
let newArray =[]
let returnArray = []
function numberArray() {
  while (array >= base) {
  newArray.push(base ++)
}
}
console.log(newArray)

function numberReplacement() {
newArray.forEach(function(element) {
    if  (element === 3) {
       returnArray.push("Won't you be my neighbor?");
    }
    else {
      returnArray.push(element);
    };
  });
};
