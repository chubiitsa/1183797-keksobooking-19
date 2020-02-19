'use strict';

(function () {
  var updateSimilarFlats = function () {
    var sameTypeFlats = window.start.getFlats().filter(function (it) {
      if (flatType === 'any') {
        window.pin.print(window.start.getFlats());
      }
      return it.offer.type === flatType;
    });
    window.pin.print(sameTypeFlats);
  };

  var flatType;
  window.filter.filter.onTypeChange = function (type) {
    flatType = type;
    updateSimilarFlats();
  };

  window.similar = {
    update: updateSimilarFlats,
  };
})();
