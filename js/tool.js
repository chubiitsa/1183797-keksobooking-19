'use strict';

(function () {

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
      }, window.const.DEBOUNCE_INTERVAL);
    };
  };

  window.tool = {
    setDisabled: setDisabled,
    debounce: debounce,
  };
})();
