'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapFiltersForm = map.querySelector('.map__filters');
  var typeFilter = mapFiltersForm.querySelector('#housing-type');
  var priceFilter = mapFiltersForm.querySelector('#housing-price');
  var roomsFilter = mapFiltersForm.querySelector('#housing-rooms');
  var guestsFilter = mapFiltersForm.querySelector('#housing-guests');
  var Price = {
    LOW: 0,
    MIDDLE: 1000,
    HIGH: 50000
  };

  var enableMapFilters = function () {
    window.tool.setDisabled(mapFiltersForm, false);
  };

  var disableMapFilters = function () {
    window.tool.setDisabled(mapFiltersForm, true);
    mapFiltersForm.reset();
  };

  var filterByType = function (it) {
    return (typeFilter.value === 'any') ? true : it.offer.type === typeFilter.value;
  };

  var filterByPrice = function (it) {
    var price = it.offer.price;
    switch (priceFilter.value) {
      case 'low':
        return price > Price.LOW && price < Price.MIDDLE;
      case 'middle':
        return price > Price.MIDDLE && price < Price.HIGH;
      case 'high':
        return price > Price.HIGH;
      default:
        return true;
    }
  };

  var filterByRooms = function (it) {
    return (roomsFilter.value === 'any') ? true : it.offer.rooms.toString() === roomsFilter.value;
  };

  var filterByGuests = function (it) {
    switch (guestsFilter.value) {
      case 'any':
        return true;
      case '0':
        return it.offer.guests.toString() === '0';
      default:
        return it.offer.guests.toString() >= guestsFilter.value;
    }
  };

  var getFilterByFeatures = function () {
    var checkedFeatures = Array.from(mapFiltersForm.querySelectorAll('.map__checkbox:checked'));
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

  mapFiltersForm.addEventListener('change', function () {
    window.filter.onChange();
  });

  window.filter = {
    enable: enableMapFilters,
    disable: disableMapFilters,
    applyToData: applyToData,
    onChange: function () {
    },
  };

})();
