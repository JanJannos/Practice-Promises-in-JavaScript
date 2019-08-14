// A simple promise that resolves after a given time
const timeOut = t => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

const durations = [1000, 2000, 3000];

const promises = [];

durations.map(duration => {
  // In the below line, two things happen.
  // 1. We are calling the async function (timeout()). So at this point the async function has started and enters the 'pending' state.
  // 2. We are pushing the pending promise to an array.
  promises.push(timeOut(duration));
});

console.log(promises); // [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]

// We are passing an array of pending promises to Promise.all
// Promise.all will wait till all the promises get resolves and then the same gets resolved.
Promise.all(promises).then(response => console.log(response)); // ["Completed in 1000", "Completed in 2000", "Completed in 3000"]
