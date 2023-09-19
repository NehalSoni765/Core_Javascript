//provide example in rquest file oop
//callback
const getDataCallbackPart1 = (callBack) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callBack(undefined, num * 2);
    } else {
      callBack("This is my callback error", undefined);
    }
  }, 2000);
};
getDataCallbackPart1((error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});

//part=2 if we continue to 4 step might be difficult to hanle or understand which is called callbackhack or PROMISE CHAINING
const getDataCallback = (num, callBack) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callBack(undefined, num * 2);
    } else {
      callBack("This is my callback error", undefined);
    }
  }, 2000);
};
getDataCallback(2, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    getDataCallback(data, (error, data) => {
      if (error) {
        console.log("error ", error);
      } else {
        console.log(data);
      }
    });
  }
});

//Promise benefit: it can not resolve or reject twice in set timeout
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("this is the data")
    reject("this is my promise error");
  }, 2000);
});
myPromise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);
//Promise chaining
const myPromise2 = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided");
    }, 2000);
  });
myPromise2(2).then(
  (data) => {
    myPromise2(data)
      .then((data) => console.log("Promise data ", data))
      .catch((error) => console.log("error ", error));
  },
  (error) => console.log(error)
);

//to avoid promise chaining
myPromise2("10")
  .then((data) => myPromise2(data))
  .then((data) => myPromise2(data))
  .then((data) => console.log("Final refactor data ", data))
  .catch((err) => console.log(err));

const getDataPromise = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      // reject(data)
    }, 2000);
  });
const newMyPrmise = getDataPromise("this is the data");
// const newMyPrmise = getDataPromise("this is my promise error");
newMyPrmise.then(
  (data) => console.log(data),
  (error) => console.log(error)
);
