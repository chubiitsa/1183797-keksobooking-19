'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var adFormAddress = adForm.querySelector('[name="address"]');
  var adFormRoomNumber = adForm.querySelector('[name="rooms"]');
  var adFormCapacity = adForm.querySelector('[name="capacity"]');
  var adFormFlatType = adForm.querySelector('[name="type"]');
  var adFormPrice = adForm.querySelector('[name="price"]');
  var adFormSubmitButton = adForm.querySelector('.ad-form__submit');
  var adFormCheckin = adForm.querySelector('[name="timein"]');
  var adFormCheckout = adForm.querySelector('[name="timeout"]');
  var adFormFields = adForm.querySelectorAll('fieldset');
  var adFormResetButton = adForm.querySelector('.ad-form__reset');

  var disableForm = function () {
    for (var i = 0; i < adFormFields.length; i++) {
      adFormFields[i].setAttribute('disabled', 'disabled');
    }
    adForm.classList.add('ad-form--disabled');
  };

  var enableForm = function () {
    for (var i = 0; i < adFormFields.length; i++) {
      adFormFields[i].removeAttribute('disabled');
    }
    adForm.classList.remove('ad-form--disabled');
  };

  var fillAddress = function (x, y) {
    adFormAddress.value = 'left: ' + x + ', top: ' + y;
    adFormAddress.setAttribute('readonly', 'readonly');
  };

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
        value = 0;
        break;
      case 'flat':
        value = 1000;
        break;
      case 'house':
        value = 5000;
        break;
      case 'palace' :
        value = 10000;
        break;
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

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.app.saveAdForm();
    window.app.disablePage();
  });

  adFormResetButton.addEventListener('click', function () {
    window.app.disablePage();
  });

  window.form = {
    fillAddress: fillAddress,
    disable: disableForm,
    enable: enableForm,
    adForm: adForm,
    adFormPrice: adFormPrice,
  };
})();
