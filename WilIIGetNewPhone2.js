// /_ ES6 _/
// 14-08-19
// JAN - I am the greatest

const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phoneObj = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phoneObj);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phoneObj) {
    const message = 'Hey friend, I have a new ' +
                phoneObj.color + ' ' + phoneObj.brand + ' phoneObj';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();