'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinsMap = document.querySelector('.map__pins');

  window.mainpin.setMoveLimit(0, map.clientLeft + map.offsetWidth, window.const.TOP_LIMIT, window.const.BOTTOM_LIMIT);

  var enableMap = function () {
    map.classList.remove('map--faded');
  };

  map.addEventListener('click', function (evt) {
    var element = evt.target.closest('.map__pin:not(.map__pin--main)');
    if (element) {
      var obj = window.app.getFlats()[parseInt(element.dataset.index, 10)];
      window.card.show(obj);
    }
  });

  var printPins = function (flats) {
    var printFlats = flats.slice(0, window.const.MAX_FLATS_NUMBER);
    var fragment = document.createDocumentFragment();
    printFlats.forEach(function (flat) {
      fragment.appendChild(window.pin.render(flat));
      pinsMap.appendChild(fragment);
    });
  };

  var hidePins = function () {
    var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPins.forEach(function (mapPin) {
      mapPin.remove();
    });
  };

  var updateSimilarFlats = function () {
    var sameTypeFlats = window.app.getFlats().filter(function (it) {
      if (flatType === 'any') {
        printPins(window.app.getFlats());
      }
      return it.offer.type === flatType;
    });
    window.map.printPins(sameTypeFlats);
  };

  var flatType;
  window.filter.filter.onTypeChange = function (type) {
    flatType = type;
    updateSimilarFlats();
  };

  window.map = {
    enable: enableMap,
    printPins: printPins,
    hidePins: hidePins,
  };
})();
