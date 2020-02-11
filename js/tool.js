'use strict';

(function () {
  // функция генерации случайного числа в заданном промежутке
  var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  // функция, которая создает перемешанный массив на основе другого массива
  var generateRandomArray = function (arr) {
    var randomArray = [];
    var randomArrayLength = generateRandomNumber(0, arr.length);
    while (randomArray.length < randomArrayLength) {
      var randomElement = arr[generateRandomNumber(0, arr.length)];
      if (randomArray.indexOf(randomElement) < 0) {
        randomArray.push(randomElement);
      }
    }
    return randomArray;
  };

  window.tool = {
    generateRandomNumber: generateRandomNumber,
    generateRandomArray: generateRandomArray,
  };
})();
