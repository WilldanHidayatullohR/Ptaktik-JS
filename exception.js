// CALLBACK
// function myFirst() {
//   myDisplayer("Good Bye");
// }
// function mySecond(callback) {
//   myDisplayer("Hello");
//   callback();
// }
// function myDisplayer(message) {
//   console.log(message);
// }
// mySecond(myFirst);

// console.log("Paragraf 1");
// setTimeout(() => {
//   console.log("Paragraf 2");
// }, 4000);
// console.log("Paragraf 3");
// console.log("Paragraf 4");
// console.log("Paragraf 5");
// console.log("Paragraf 6");
//

// function setTime() {
//   const header = document.getElementById("header");
//   header.textContent = new Date().toString();
// }
// setInterval(setTime, 1000);
// console.log("Program Finish");

//CASE
function divideNumbers(a, b) {
  try {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Input harus berupa angka.");
    }
    if (b === 0) {
      throw new Error("Tidak dapat membagi dengan nol.");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}

function handleDivision() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);

  const result = divideNumbers(num1, num2);

  document.getElementById("result").textContent = `Hasil: ${result}`;
}
