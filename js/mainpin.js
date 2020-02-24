'use strict';

(function () {
  var mainPin = document.querySelector('.map__pin--main');

  var limit = {
    left: -Infinity,
    right: Infinity,
    top: -Infinity,
    bottom: Infinity
  };

  var setMoveLimit = function (minX, maxX, minY, maxY) {
    limit.left = minX;
    limit.right = maxX;
    limit.top = minY;
    limit.bottom = maxY;
  };

  var getPosition = function () {
    var y;
    if (window.app.isActive()) {
      y = mainPin.offsetTop + mainPin.offsetHeight + window.const.PIN_HEIGHT;
    } else {
      y = mainPin.offsetTop + Math.round(mainPin.clientHeight / 2);
    }
    return {
      x: mainPin.offsetLeft + Math.round(mainPin.offsetWidth / 2),
      y: y,
    };
  };

  var setPosition = function (position) {
    var left = position.x - Math.round(mainPin.offsetWidth / 2);
    var top = position.y - mainPin.offsetHeight - window.const.PIN_HEIGHT;
    mainPin.style.left = left + 'px';
    mainPin.style.top = top + 'px';
  };

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    if (evt.button === 0) {
      window.app.enablePage();
      window.app.onClickMainPin(getPosition().x, getPosition().y);
      window.server.load(window.app.successHandler, window.app.errorHandler);
    }

    var startX = evt.clientX;
    var startY = evt.clientY;
    var startPosition = getPosition();

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shiftX = moveEvt.clientX - startX;
      var shiftY = moveEvt.clientY - startY;

      var x = startPosition.x + shiftX;
      x = Math.max(limit.left, x);
      x = Math.min(limit.right, x);
      var y = startPosition.y + shiftY;
      y = Math.max(limit.top, y);
      y = Math.min(limit.bottom, y);
      setPosition({x: x, y: y});

      window.app.onMoveMainPin(x, y);

    };

    var onMouseUp = function () {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  mainPin.addEventListener('keydown', function (evt) {
    if (evt.key === window.const.ENTER_KEY) {
      window.app.enablePage();
      window.app.onClickMainPin(getPosition().x, getPosition().y);
      window.server.load(window.app.successHandler, window.app.errorHandler);
    }
  });

  window.mainpin = {
    getPosition: getPosition,
    setMoveLimit: setMoveLimit,
  };

})();
