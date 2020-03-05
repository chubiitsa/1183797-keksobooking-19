'use strict';

(function () {
  var map = document.querySelector('.map');
  var pinsMap = document.querySelector('.map__pins');
  var data = [];

  window.mainpin.setMoveLimit(0, map.clientLeft + map.offsetWidth, window.const.TOP_LIMIT, window.const.BOTTOM_LIMIT);

  var enableMap = function () {
    map.classList.remove('map--faded');
  };

  var disableMap = function () {
    map.classList.add('map--faded');
    hidePins();
    window.card.close();
    window.mainpin.setInitialPosition();
    window.filter.disable();
  };

  var loadData = function (arr) {
    for (var j = 0; j < arr.length; j++) {
      arr[j].index = j;
    }
    data = arr;
    printPins(data);
    window.filter.enable();
  };

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

  map.addEventListener('click', function (evt) {
    var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPins.forEach(function (mapPin) {
      mapPin.classList.remove('map__pin--active');
    });
    var element = evt.target.closest('.map__pin:not(.map__pin--main)');
    if (element) {
      element.classList.add('map__pin--active');
      var obj = data[parseInt(element.dataset.index, 10)];
      window.card.show(obj);
    }
  });

  window.filter.onChange = window.tool.debounce(function () {
    window.card.close();
    hidePins();
    var filteredData = window.filter.applyToData(data);
    window.map.printPins(filteredData);
  });

  window.map = {
    enable: enableMap,
    disable: disableMap,
    printPins: printPins,
    hidePins: hidePins,
    load: loadData,
  };
})();
