console.log("<<<< Starting >>>>"); //1
// This is being run Synchrounsly 
function run(value) {
  return new Promise((resolve, reject) => {
    if (value) resolve("Win!");
    else reject("Lose!");
  });
}

let p3 = run(true);

p3.then((res) => { // 3
    // This is being added to the Micro Queue first and since everything else has been added to the Micro,
    // this is being resolved first after the ones that were done synchronously
  console.log(res);
  return run(false);
}).catch((res) => { // 4
    // Has been added to the Micro Queue first and since everything else has been added to the Micro,
    // this is being resolved second 
    console.log(res);
    return "Error!";
  })
  .then((res) => { //Has been added to the Micro Queue first and since everything else has been added to the Micro,
    // this is being resolved third
    console.log(res);
    return run(true);
  })
  .then((res) => { //Has been added to the Micro Queue first and since everything else has been added to the Micro,
    // this is being resolved fourth
    console.log(res);
    return run(false);
  })
  .then((res) => { //Has been added to the Micro Queue first and since everything else has been added to the Micro,
    // this is being resolved fifth
    console.log(res);
    return run(true);
  });
  
console.log("<<<< Ending >>>>");// 2
// This is also being run Synchronusly