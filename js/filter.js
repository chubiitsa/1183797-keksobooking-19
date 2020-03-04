'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapFilters = map.querySelector('.map__filters');
  var typeFilter = mapFilters.querySelector('#housing-type');
  var priceFilter = mapFilters.querySelector('#housing-price');
  var roomsFilter = mapFilters.querySelector('#housing-rooms');
  var guestsFilter = mapFilters.querySelector('#housing-guests');

  var enableMapFilters = function () {
    for (var j = 0; j < mapFilters.length; j++) {
      mapFilters[j].removeAttribute('disabled');
    }
  };

  var disableMapFilters = function () {
    for (var j = 0; j < mapFilters.length; j++) {
      mapFilters[j].setAttribute('disabled', 'disabled');
    }
  };

  var filter = {
    onChange: function () {
    }
  };

  mapFilters.addEventListener('change', function () {
    filter.onChange();
  });

  var filterByType = function (it) {
    return (typeFilter.value === 'any') ? true : it.offer.type === typeFilter.value;
  };

  var filterByPrice = function (it) {
    var price = it.offer.price;
    var value;

    switch (priceFilter.value) {
      case 'any':
        value = price;
        break;
      case 'low':
        value = price > 0 && price < 10000;
        break;
      case 'middle':
        value = price > 10000 && price < 50000;
        break;
      case 'high':
        value = price > 50000;
        break;
    }

    return value;
  };

  var filterByRooms = function (it) {
    return (roomsFilter.value === 'any') ? true : it.offer.rooms.toString() === roomsFilter.value;
  };

  var filterByGuests = function (it) {
    if (guestsFilter.value === 'any') {
      return true;
    } else {
      return (guestsFilter.value === '0') ? (it.offer.guests.toString() === '0') : it.offer.guests.toString() >= guestsFilter.value;
    }
  };

  var getFilterByFeatures = function () {
    var checkedFeatures = Array.from(mapFilters.querySelectorAll('.map__checkbox:checked'));

    return function (it) {
      return checkedFeatures.every(function (feature) {
        return it.offer.features.includes(feature.value);
      });
    };
  };

  var applyToData = function (arr) {
    return arr.filter(filterByType)
      .filter(filterByPrice)
      .filter(filterByRooms)
      .filter(filterByGuests)
      .filter(getFilterByFeatures());
  };

  window.filter = {
    enable: enableMapFilters,
    disable: disableMapFilters,
    filter: filter,
    applyToData: applyToData,
  };

})();
