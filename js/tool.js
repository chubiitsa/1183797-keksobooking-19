'use strict';

(function () {
  var ENTER_KEY = 'Enter';
  var ESC_KEY = 'Escape';
  var DEBOUNCE_INTERVAL = 500; // ms

  var setDisabled = function (collection, boolean) {
    for (var j = 0; j < collection.length; j++) {
      collection[j].disabled = boolean;
    }
  };

  var debounce = function (cb) {
    var lastTimeout = null;
    return function () {
      var parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.tool = {
    setDisabled: setDisabled,
    debounce: debounce,
    ENTER_KEY: ENTER_KEY,
    ESC_KEY: ESC_KEY,
  };
})();
