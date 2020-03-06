'use strict';

(function () {
  var DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';
  var PREVIEW_WIDTH = 70;
  var PREVIEW_HEIGHT = 70;
  var PREVIEW_BORDER_RADIUS = 5;
  var adForm = document.querySelector('.ad-form');
  var adFormFields = adForm.querySelectorAll('fieldset');
  var adFormResetButton = adForm.querySelector('.ad-form__reset');
  var adFormSubmitButton = adForm.querySelector('.ad-form__submit');
  var adFormAvatarChooser = adForm.querySelector('.ad-form__field input[type=file]');
  var adFormPhotoChooser = adForm.querySelector('.ad-form__upload input[type=file]');
  var adFormAddress = adForm.querySelector('[name="address"]');
  var adFormRoomNumber = adForm.querySelector('[name="rooms"]');
  var adFormCapacity = adForm.querySelector('[name="capacity"]');
  var adFormFlatType = adForm.querySelector('[name="type"]');
  var adFormPrice = adForm.querySelector('[name="price"]');
  var adFormCheckin = adForm.querySelector('[name="timein"]');
  var adFormCheckout = adForm.querySelector('[name="timeout"]');

  var disableForm = function () {
    adForm.reset();
    adForm.classList.add('ad-form--disabled');
    window.tool.setDisabled(adFormFields, true);
    document.querySelector('.ad-form-header__preview img').src = DEFAULT_AVATAR_SRC;
    document.querySelector('.ad-form__photo').innerHTML = '';
  };

  var enableForm = function () {
    window.tool.setDisabled(adFormFields, false);
    adForm.classList.remove('ad-form--disabled');
  };

  var fillAddress = function (x, y) {
    adFormAddress.value = x + ', ' + y;
    adFormAddress.readOnly = true;
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

  adFormSubmitButton.addEventListener('click', function () {
    checkValidityCapacity();
  });

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.app.saveAdForm(new FormData(adForm));
  });

  adFormResetButton.addEventListener('click', function () {
    window.app.disablePage();
  });

  adFormAvatarChooser.addEventListener('change', function () {
    var preview = document.querySelector('.ad-form-header__preview img');
    window.photos.changePreview(adFormAvatarChooser, preview);
  });

  adFormPhotoChooser.addEventListener('change', function () {
    var photoContainer = document.querySelector('.ad-form__photo');
    photoContainer.innerHTML = '';
    var preview = photoContainer.appendChild(document.createElement('img'));
    preview.style.width = PREVIEW_WIDTH + 'px';
    preview.style.height = PREVIEW_HEIGHT + 'px';
    preview.style.borderRadius = PREVIEW_BORDER_RADIUS + 'px';
    window.photos.changePreview(adFormPhotoChooser, preview);
  });

  window.form = {
    fillAddress: fillAddress,
    disable: disableForm,
    enable: enableForm,
  };
})();
