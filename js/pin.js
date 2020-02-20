'use strict';

(function () {
  var pinsMap = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin')
      .content.querySelector('.map__pin');

  // функция создания DOM-элемента на основе JS-объекта
  var renderPin = function (obj) {
    var flatPin = pinTemplate.cloneNode(true);
    flatPin.setAttribute('style', 'left: ' + obj.location.x + 'px; top: ' + obj.location.y + 'px');
    flatPin.querySelector('img').src = obj.author.avatar;
    flatPin.querySelector('img').alt = obj.offer.title;
    flatPin.dataset.index = obj.index;
    return flatPin;
  };

  var printPins = function (flats) {
    var takeNumber = (flats.length > window.const.MAX_FLATS_NUMBER) ? window.const.MAX_FLATS_NUMBER : flats.length;

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderPin(flats[i]));
    }
    pinsMap.appendChild(fragment);
  };

  var hidePins = function () {
    var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPins.forEach(function (mapPin) {
      mapPin.remove();
    });
  };

  window.pin = {
    render: renderPin,
    print: printPins,
    hide: hidePins,
  };
})();

