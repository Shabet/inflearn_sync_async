// function taskSyncFunction(callback) {
//   console.log("첫번째 작업");
//   console.log("두번째 작업");
//   callback();
// }

// taskSyncFunction(() => {
//   console.log("콜백 함수 실행");
// });

function taskASyncFunction(callback) {
  console.log("start");
  setTimeout(() => {
    console.log("첫번째 작업");
    console.log("두번째 작업");
    callback();
  }, 2000);
  console.log("end");
}

taskASyncFunction(() => {
  console.log("콜백 함수 실행");
});

console.log("실행 완료!");
