'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adFormRoomNumber = adForm.querySelector('[name="rooms"]');
  var adFormCapacity = adForm.querySelector('[name="capacity"]');
  var adFormFlatType = adForm.querySelector('[name="type"]');
  var adFormPrice = adForm.querySelector('[name="price"]');
  var adFormSubmitButton = adForm.querySelector('.ad-form__submit');
  var adFormCheckin = adForm.querySelector('[name="timein"]');
  var adFormCheckout = adForm.querySelector('[name="timeout"]');

  var checkValidityCapacity = function () {
    var roomsNumber = adFormRoomNumber.selectedOptions[0].value;
    var capacity = adFormCapacity.selectedOptions[0].value;
    adFormCapacity.setCustomValidity('');
    if (roomsNumber === '100' && capacity > 0) {
      adFormCapacity.setCustomValidity('Такое обычно арендуют для вечеринок. Выберите вариант Не для гостей');
      return;
    }
    if (roomsNumber < capacity) {
      adFormCapacity.setCustomValidity('Для ' + capacity + ' гостей должно быть не меньше ' + capacity + ' комнат!');
    }
  };

  var setMinPrice = function () {
    var flatType = adFormFlatType.selectedOptions[0].value;
    if (flatType === 'bungalo') {
      adFormPrice.setAttribute('min', '0');
      adFormPrice.setAttribute('placeholder', '0');
    }
    if (flatType === 'flat') {
      adFormPrice.setAttribute('min', '1000');
      adFormPrice.setAttribute('placeholder', '1000');
    }
    if (flatType === 'house') {
      adFormPrice.setAttribute('min', '5000');
      adFormPrice.setAttribute('placeholder', '5000');
    }
    if (flatType === 'palace') {
      adFormPrice.setAttribute('min', '10000');
      adFormPrice.setAttribute('placeholder', '10000');
    }
  };

  adFormCheckin.addEventListener('change', function () {
    adFormCheckout.value = adFormCheckin.value;
  });

  adFormCheckout.addEventListener('change', function () {
    adFormCheckin.value = adFormCheckout.value;
  });

  adFormFlatType.addEventListener('change', function () {
    setMinPrice();
  });

  adFormRoomNumber.addEventListener('change', function () {
    checkValidityCapacity();
  });

  adFormCapacity.addEventListener('change', function () {
    checkValidityCapacity();
  });

  adFormSubmitButton.addEventListener('click', function () {
    checkValidityCapacity();
  });

  mapPinMain.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      window.start.enablePage();
      window.start.getAddress();
      window.server.load(window.start.successHandler, window.start.errorHandler);
    }
  });

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === window.const.ENTER_KEY) {
      window.start.enablePage();
      window.start.getAddress();
      window.server.load(window.start.successHandler, window.start.errorHandler);
    }
  });
})();
