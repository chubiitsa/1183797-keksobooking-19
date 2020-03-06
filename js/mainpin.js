'use strict';

(function () {
  var PIN_HEIGHT = 22;
  var mainPin = document.querySelector('.map__pin--main');

  var mainPinInitialCoords = {
    x: mainPin.offsetLeft,
    y: mainPin.offsetTop,
  };

  var setInitialPosition = function () {
    mainPin.style.left = mainPinInitialCoords.x + 'px';
    mainPin.style.top = mainPinInitialCoords.y + 'px';
  };

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
      y = mainPin.offsetTop + mainPin.offsetHeight + PIN_HEIGHT;
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
    var top = position.y - mainPin.offsetHeight - PIN_HEIGHT;
    mainPin.style.left = left + 'px';
    mainPin.style.top = top + 'px';
  };

  mainPin.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    if (evt.button === 0) {
      if (!window.app.isActive()) {
        window.app.enablePage();
        window.app.onClickMainPin(getPosition().x, getPosition().y);
      }
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
    if (evt.key === window.tool.ENTER_KEY) {
      if (!window.app.isActive()) {
        window.app.enablePage();
        window.app.onClickMainPin(getPosition().x, getPosition().y);
      }
    }
  });

  window.mainpin = {
    getPosition: getPosition,
    setPosition: setPosition,
    setMoveLimit: setMoveLimit,
    setInitialPosition: setInitialPosition,
  };

})();
