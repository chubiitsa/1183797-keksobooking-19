'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin')
      .content.querySelector('.map__pin');

  var renderPin = function (obj) {
    var flatPin = pinTemplate.cloneNode(true);
    flatPin.setAttribute('style', 'left: ' + obj.location.x + 'px; top: ' + obj.location.y + 'px');
    flatPin.querySelector('img').src = obj.author.avatar;
    flatPin.querySelector('img').alt = obj.offer.title;
    flatPin.dataset.index = obj.index;
    return flatPin;
  };

  window.pin = {
    render: renderPin,
  };
})();

