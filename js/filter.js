'use strict';

(function () {
  var map = document.querySelector('.map');
  var mapFilters = map.querySelector('.map__filters');
  var flatTypeFilter = mapFilters.querySelector('#housing-type');

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
    onTypeChange: function () {},
  };

  flatTypeFilter.addEventListener('change', function () {
    window.card.close();
    window.map.hidePins();
    var newFlatType = flatTypeFilter.value;
    filter.onTypeChange(newFlatType);
  });

  window.filter = {
    enable: enableMapFilters,
    disable: disableMapFilters,
    filter: filter,
  };

})();
