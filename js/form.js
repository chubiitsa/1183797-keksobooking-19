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
    var roomsNumber = adFormRoomNumber.value;
    var capacity = adFormCapacity.value;
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
    var flatType = adFormFlatType.value;
    var value;

    switch (flatType) {
      case 'bungalo':
        value = 0; break;
      case 'flat':
        value = 1000; break;
      case 'house':
        value = 5000; break;
      case 'palace' :
        value = 10000; break;
      default:
        value = 1000;
    }

    adFormPrice.setAttribute('min', value);
    adFormPrice.setAttribute('placeholder', value);
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
