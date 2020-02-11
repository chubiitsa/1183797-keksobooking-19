'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinsMap = document.querySelector('.map__pins');
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

  var successHandler = function (flats) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < flats.length; i++) {
      fragment.appendChild(window.data.renderPin(flats[i]));
    }
    pinsMap.appendChild(fragment);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: #503931;';
    node.style.position = 'absolute';
    node.style.width = '600px';
    node.style.minHeight = '80px';
    node.style.top = '260px';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '20px';
    node.style.color = 'white';
    node.style.borderRadius = '10px';
    node.style.opacity = '0.8';
    node.style.padding = '25px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.start = {
    enablePage: enablePage,
    getAddress: getAddress,
    successHandler: successHandler,
    errorHandler: errorHandler,
  };
})();
