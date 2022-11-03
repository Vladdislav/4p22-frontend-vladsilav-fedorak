"use strict";

function makeFibonacciFunction() {
  let fibPrev = 0;
  let fibNext = 1;

  return function () {
    let result = 0;

    if (fibPrev === 0) {
      console.log(fibPrev);
    }
    if (fibNext === 1 && fibPrev === 1) {
      console.log(fibNext);
    }

    result = fibPrev + fibNext;

    fibPrev = fibNext;
    fibNext = result;

    console.log(result);
  };
}

const fibonacci1 = makeFibonacciFunction();

fibonacci1();
fibonacci1();
fibonacci1();
fibonacci1();
fibonacci1();
fibonacci1();

console.log('--------------------'); // отступ между выводом двух вариантов

const fibonacci = (() => {
  let fibPrev = 0;
  let fibNext = 1;

  return function () {
    let result = 0;

    if (fibPrev === 0) {
      console.log(fibPrev);
    }
    if (fibNext === 1 && fibPrev === 1) {
      console.log(fibNext);
    }

    result = fibPrev + fibNext;

    fibPrev = fibNext;
    fibNext = result;

    console.log(result);
  };
})();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
