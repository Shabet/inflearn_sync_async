// function syncFunction() {
//   console.log("첫번째 작업");
//   console.log("두번째 작업");
//   console.log("세번째 작업");
// }

// syncFunction();

function asyncFunction() {
  console.log("첫번째 작업");

  setTimeout(function () {
    console.log("두번째 작업");
  }, 1000);

  console.log("세번째 작업");
}

asyncFunction();
