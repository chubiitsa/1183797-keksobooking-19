'use strict';

(function () {
  var FLAT_TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var FLAT_TYPES_DICT = {'palace': 'Дворец', 'flat': 'Квартира', 'house': 'Дом', 'bungalo': 'Бунгало'};
  var CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
  var CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
  var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';

  window.const = {
    FLAT_TYPES: FLAT_TYPES,
    FLAT_TYPES_DICT: FLAT_TYPES_DICT,
    CHECKIN_TIMES: CHECKIN_TIMES,
    CHECKOUT_TIMES: CHECKOUT_TIMES,
    FEATURES: FEATURES,
    PHOTOS: PHOTOS,
    PIN_WIDTH: PIN_WIDTH,
    PIN_HEIGHT: PIN_HEIGHT,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
  };
})();
