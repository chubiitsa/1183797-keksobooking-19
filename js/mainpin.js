'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');

  var getMainPinAddress = function () {
    var x = parseInt(mapPinMain.style.left.slice(0, 3), 10) + Math.floor(mapPinMain.clientWidth / 2);
    var y = parseInt(mapPinMain.style.top.slice(0, 3), 10) + Math.floor(mapPinMain.clientHeight / 2);
    return 'left: ' + x + ', right: ' + y;
  };

  var getMainPinLocation = function () {
    var x = parseInt(mapPinMain.style.left.slice(0, 3), 10) + Math.floor(mapPinMain.clientWidth / 2);
    var y = parseInt(mapPinMain.style.top.slice(0, 3), 10) + Math.floor(mapPinMain.clientHeight + 20); // 20 - это примерная высота острой части - не могу ее точно найти
    return 'left: ' + x + ', right: ' + y;
  };

  mapPinMain.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      window.start.enablePage();
      window.mainpin.getAddress();
      window.server.load(window.start.successHandler, window.start.errorHandler);
    }
  });

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === window.const.ENTER_KEY) {
      window.start.enablePage();
      window.mainpin.getAddress();
      window.server.load(window.start.successHandler, window.start.errorHandler);
    }
  });

  window.mainpin = {
    getAddress: getMainPinAddress,
    getLocation: getMainPinLocation,
  };

})();
