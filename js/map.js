'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinsMap = document.querySelector('.map__pins');

  window.mainpin.setMoveLimit(0, map.clientLeft + map.offsetWidth, window.const.TOP_LIMIT, window.const.BOTTOM_LIMIT);

  var enableMap = function () {
    map.classList.remove('map--faded');
  };

  var disableMap = function () {
    map.classList.add('map--faded');
    hidePins();
  };

  map.addEventListener('click', function (evt) {
    var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPins.forEach(function (mapPin) {
      mapPin.classList.remove('map__pin--active');
    });
    var element = evt.target.closest('.map__pin:not(.map__pin--main)');
    if (element) {
      element.classList.add('map__pin--active');
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

  window.filter.filter.onChange = window.debounce(function () {
    hidePins();
    window.card.close();
    var filteredData = window.filter.applyToData(window.app.getFlats());
    window.map.printPins(filteredData);
  });

  window.map = {
    enable: enableMap,
    disable: disableMap,
    printPins: printPins,
    hidePins: hidePins,
  };
})();
