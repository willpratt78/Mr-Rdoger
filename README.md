Describe: numberArray()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numberArray(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should remove old input info if a new input is used"
Code: numberArray (5) numberArray(3)
Expected Output: [0, 1, 2, 3]

Describe: numberReplacement()

Test: "It should replace the number 3 with 'Won't you be my neighbor?'"
Code: numberReplacement(3)
Expected Outout: "Won't you be my neighbor?"

Test: "It should replace any number containing 3 with 'Won't you be my neighbor?'"
Code: numberReplacement(13)
Expected Outcome: "Won't you be my neighbor?"

Test: "It should replace the number 2 with 'boop'"
Code: numberReplacement(2)
Expected Outcome: "boop"

Test: "It should replace any number containing 2 with 'boop'"
Code: numberReplacement(12)
Expected Outcome: "boop"

Test: "If the number contains 2 and 3 in it, the replacement should be 'Won't you be my neighbor?'"
Code: numberReplacement(23)
Expected Outcome: "Won't you be my neighbor?"

Test: "It should replace the number 1 with 'beep'"
Code: numberReplacement(1)
Expected Outout: "beep"

Test: "It should replace any number containing 1 with 'beep'"
Code: numberReplacement(14)
Expected Outcome: "beep"

Test: "If the number contains 1, 2, and 3 in it, the replacement should be 'Won't you be my neighbor?'"
Code: numberReplacement(123)
Expected Outcome: "Won't you be my neighbor?"

Test: "If the number contains 1 and 2 in it, the replacement should be 'boop'"
Code: numberReplacement(12)
Expected Outcome: "boop"