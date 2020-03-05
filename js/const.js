'use strict';

(function () {
  var FLAT_TYPES_DICT = {'palace': 'Дворец', 'flat': 'Квартира', 'house': 'Дом', 'bungalo': 'Бунгало'};
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var MAX_FLATS_NUMBER = 5;
  var PIN_HEIGHT = 22;
  var TOP_LIMIT = 130;
  var BOTTOM_LIMIT = 630;
  var PREVIEW_WIDTH = 70;
  var PREVIEW_HEIGHT = 70;
  var PREVIEW_BORDER_RADIUS = 5;
  var DEFAULT_AVATAR_SRC = 'img/muffin-grey.svg';
  var DEBOUNCE_INTERVAL = 500; // ms

  window.const = {
    FLAT_TYPES_DICT: FLAT_TYPES_DICT,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
    MAX_FLATS_NUMBER: MAX_FLATS_NUMBER,
    PIN_HEIGHT: PIN_HEIGHT,
    TOP_LIMIT: TOP_LIMIT,
    BOTTOM_LIMIT: BOTTOM_LIMIT,
    PREVIEW_WIDTH: PREVIEW_WIDTH,
    PREVIEW_HEIGHT: PREVIEW_HEIGHT,
    PREVIEW_BORDER_RADIUS: PREVIEW_BORDER_RADIUS,
    DEFAULT_AVATAR_SRC: DEFAULT_AVATAR_SRC,
    DEBOUNCE_INTERVAL: DEBOUNCE_INTERVAL,
  };
})();
