'use strict';

(function () {
  /*
  var pinsMap = document.querySelector('.map__pins');
  var pinTemplate = document.querySelector('#pin')
    .content.querySelector('.map__pin');
  var cardTemplate = document.querySelector('#card')
    .content.querySelector('.map__card');

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

  // функция создания DOM-элемента на основе JS-объекта


  var renderPin = function (obj) {
    var flatPin = pinTemplate.cloneNode(true);
    flatPin.setAttribute('style', 'left: ' + obj.location.x + 'px; top: ' + obj.location.y + 'px');
    flatPin.querySelector('img').src = obj.author.avatar;
    flatPin.querySelector('img').alt = obj.offer.title;
    return flatPin;
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

//printPinsToMap(pinsMap, generateFlatsArray());

  var renderCard = function (obj) {
    var flatCard = cardTemplate.cloneNode(true);

    flatCard.querySelector('.popup__title').textContent = obj.offer.title;
    flatCard.querySelector('.popup__text--address').textContent = obj.offer.address;
    flatCard.querySelector('.popup__text--price').textContent = obj.offer.price + '₽/ночь';
    flatCard.querySelector('.popup__type').textContent = window.const.FLAT_TYPES_DICT[obj.offer.type];
    flatCard.querySelector('.popup__text--capacity').textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
    flatCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
    var featuresList = flatCard.querySelector('.popup__features').querySelectorAll('.popup__feature');
    for (var n = 0; n < featuresList.length; n++) {
      var queryElement = featuresList[n];
      var isElementFound = false;
      for (var j = 0; j < obj.offer.features.length; j++) {
        if (queryElement.className.search('--' + obj.offer.features[j]) > -1) {
          isElementFound = true;
          break;
        }
      }
      if (!isElementFound) {
        queryElement.style.display = 'none';
      }
    }
    flatCard.querySelector('.popup__description').textContent = obj.offer.description;
    var popupPhotoImg = flatCard.querySelector('.popup__photos').querySelector('img');
    if (obj.offer.photos.length > 0) {
      popupPhotoImg.src = obj.offer.photos[0];
      for (var i = 1; i < obj.offer.photos.length; i++) {
        var sourceImage = popupPhotoImg.cloneNode(true);
        sourceImage.src = obj.offer.photos[i];
        flatCard.querySelector('.popup__photos').appendChild(sourceImage);
      }
    } else {
      flatCard.querySelector('.popup__photos').style.display = 'none';
    }
    flatCard.querySelector('img').src = obj.author.avatar;
    return flatCard;

  };

  var createFragmentFromObject = function (obj) {
    var fragment = document.createDocumentFragment();
    var elementToAdd = renderCard(obj);
    return fragment.appendChild(elementToAdd);
  };

  var printCard = function (printArea, obj) {
    var childElement = document.querySelector('.map__filters-container');
    var newCard = createFragmentFromObject(obj);
    return printArea.insertBefore(newCard, childElement);
  };

//printCard(map, generateFlatsArray()[3]);

   */
})();

