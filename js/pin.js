'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin')
    .content.querySelector('.map__pin');

  // функция создания DOM-элемента на основе JS-объекта
  var renderPin = function (obj) {
    var flatPin = pinTemplate.cloneNode(true);
    flatPin.setAttribute('style', 'left: ' + obj.location.x + 'px; top: ' + obj.location.y + 'px');
    flatPin.querySelector('img').src = obj.author.avatar;
    flatPin.querySelector('img').alt = obj.offer.title;

    flatPin.addEventListener('click', function () {
      window.card.show(obj);
    });

    flatPin.addEventListener('keydown', function (evt) {
      if (evt.key === window.const.ENTER_KEY) {
        window.card.show(obj);
      }
    });

    return flatPin;
  };
  window.pin = {
    render: renderPin,
  };
})();

/*
// функция для создания массива из 8 сгенерированных JS объектов
  var generateFlatsArray = function () {
    var flats = [];
    for (var i = 1; i < 8; i++) {
      var flatLocation = {
        x: window.tool.generateRandomNumber((-window.const.PIN_WIDTH / 2), pinsMap.clientWidth - window.const.PIN_WIDTH / 2), // 4.5 При ограничении перемещения метки по горизонтали её острый конец должен указывать на крайнюю точку блока.
        y: window.tool.generateRandomNumber(130, 630) // 4.4 Для удобства пользователей значение Y-координаты адреса должно быть ограничено интервалом от 130 до 630. Значение X-координаты адреса должно быть ограничено размерами блока, в котором перемещается метка.
      };
      flats.push({
        author: {
          avatar: 'img/avatars/user0' + i + '.png'
        },
        offer: {
          title: 'Проверка',
          address: 'Координаты места: ' + (flatLocation.x + window.const.PIN_WIDTH / 2) + ', ' + (flatLocation.y + window.const.PIN_HEIGHT), // 4.3. Формат значения поля адреса: {{x}}, {{y}}, где {{x}} и {{y}} это координаты, на которые метка указывает своим острым концом. Например, если метка .map__pin--main имеет CSS-координаты top: 200px; left: 300px, то в поле адрес должно быть записано значение 300 + расстояние до острого конца по горизонтали, 200 + расстояние до острого конца по вертикали. Координаты не должны быть дробными.
          price: 0,
          type: window.const.FLAT_TYPES[window.tool.generateRandomNumber(0, window.const.FLAT_TYPES.length)],
          rooms: 0,
          guests: 0,
          checkin: window.const.CHECKIN_TIMES[window.tool.generateRandomNumber(0, window.const.CHECKIN_TIMES.length)],
          checkout: window.const.CHECKOUT_TIMES[window.tool.generateRandomNumber(0, window.const.CHECKOUT_TIMES.length)],
          features: window.tool.generateRandomArray(window.const.FEATURES),
          description: '',
          photos: window.tool.generateRandomArray(window.const.PHOTOS)
        },
        location: flatLocation
      });
    }
    return flats;
  };

// функция заполнения блока DOM-элементами на основе массива JS-объектов
  var createFragmentFromArray = function (flatsArr) {
  var fragment = document.createDocumentFragment();
    for (var j = 0; j < flatsArr.length; j++) {
      fragment.appendChild(renderPin(flatsArr[j]));
    }
    return fragment;
  };

// функция добавления блока с DOM-элементами на страницу
  var printPinsToMap = function (printArea, arr) {
    return printArea.appendChild(createFragmentFromArray(arr));
  };

  */
