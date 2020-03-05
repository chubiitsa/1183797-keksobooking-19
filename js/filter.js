'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapFilters = map.querySelector('.map__filters');
  var typeFilter = mapFilters.querySelector('#housing-type');
  var priceFilter = mapFilters.querySelector('#housing-price');
  var roomsFilter = mapFilters.querySelector('#housing-rooms');
  var guestsFilter = mapFilters.querySelector('#housing-guests');

  var enableMapFilters = function () {
    window.tool.setDisabled(mapFilters, false);
  };

  var disableMapFilters = function () {
    window.tool.setDisabled(mapFilters, true);
  };

  var filterByType = function (it) {
    return (typeFilter.value === 'any') ? true : it.offer.type === typeFilter.value;
  };

  var filterByPrice = function (it) {
    var price = it.offer.price;
    switch (priceFilter.value) {
      case 'low':
        return price > 0 && price < 10000;
      case 'middle':
        return price > 10000 && price < 50000;
      case 'high':
        return price > 50000;
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

  mapFilters.addEventListener('change', function () {
    window.filter.onChange();
  });

  window.filter = {
    enable: enableMapFilters,
    disable: disableMapFilters,
    applyToData: applyToData,
    onChange: function () {},
  };

})();
