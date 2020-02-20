'use strict';

(function () {

  var map = document.querySelector('.map');

  var enableMap = function () {
    map.classList.remove('map--faded');
  };

  map.addEventListener('click', function (evt) {
    var element = evt.target.closest('.map__pin:not(.map__pin--main)');
    if (element) {
      var obj = window.start.getFlats()[parseInt(element.dataset.index, 10)];
      window.card.show(obj);
    }
  });

  window.map = {
    enable: enableMap,
  };
})();
