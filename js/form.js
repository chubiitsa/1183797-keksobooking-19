'use strict';

(function () {
  var mapPinMain = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var adFormRoomNumber = adForm.querySelector('[name="rooms"]');
  var adFormCapacity = adForm.querySelector('[name="capacity"]');
  var adFormSubmitButton = adForm.querySelector('.ad-form__submit');

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
