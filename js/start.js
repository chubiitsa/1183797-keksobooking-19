'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapPinMain = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adFormAddress = adForm.querySelector('[name="address"]');
  var adFormFieldsets = adForm.querySelectorAll('fieldset');
  var mapFiltersContainer = document.querySelector('.map__filters');
  var mapFilters = mapFiltersContainer.querySelectorAll('input, select');

  var disablePage = function () {
    for (var i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].setAttribute('disabled', 'disabled');
    }
    for (var j = 0; j < mapFilters.length; j++) {
      mapFilters[j].setAttribute('disabled', 'disabled');
    }
    var x = parseInt(mapPinMain.style.left.slice(0, 3), 10) + Math.floor(mapPinMain.clientWidth / 2);
    var y = parseInt(mapPinMain.style.top.slice(0, 3), 10) + Math.floor(mapPinMain.clientHeight / 2);
    adFormAddress.setAttribute('placeholder', 'left: ' + x + ', right: ' + y);
  };

  var enablePage = function () {
    for (var i = 0; i < adFormFieldsets.length; i++) {
      adFormFieldsets[i].removeAttribute('disabled');
    }
    for (var j = 0; j < mapFilters.length; j++) {
      mapFilters[j].removeAttribute('disabled');
    }
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
  };

  var getAddress = function () {
    var x = parseInt(mapPinMain.style.left.slice(0, 3), 10) + Math.floor(mapPinMain.clientWidth / 2);
    var y = parseInt(mapPinMain.style.top.slice(0, 3), 10) + Math.floor(mapPinMain.clientHeight + 20); // 20 - это примерная высота острой части - не могу ее точно найти
    adFormAddress.setAttribute('placeholder', 'left: ' + x + ', right: ' + y);
  };

  document.addEventListener('DOMContentLoaded', function () {
    disablePage();
  });

  window.start = {
    enablePage: enablePage,
    getAddress: getAddress,
  };
})();
