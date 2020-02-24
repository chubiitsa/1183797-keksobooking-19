'use strict';

(function () {
  var map = document.querySelector('.map');

  var cardTemplate = document.querySelector('#card')
    .content.querySelector('.map__card');
  var photoTemplate = document.querySelector('#card')
    .content.querySelector('.popup__photo');


  var printFeatures = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      var feature = document.createElement('li');
      var featureClass = 'popup__feature--' + arr[i];
      feature.classList.add('popup__feature', featureClass);
      fragment.appendChild(feature);
    }
    return fragment;
  };

  var printPhotos = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      var photo = photoTemplate.cloneNode(true);
      photo.src = arr[i];
      fragment.appendChild(photo);
    }
    return fragment;
  };

  var renderCard = function (obj) {
    var flatCard = cardTemplate.cloneNode(true);
    flatCard.querySelector('.popup__title').textContent = obj.offer.title;
    flatCard.querySelector('.popup__text--address').textContent = obj.offer.address;
    flatCard.querySelector('.popup__text--price').textContent = obj.offer.price + '₽/ночь';
    flatCard.querySelector('.popup__type').textContent = window.const.FLAT_TYPES_DICT[obj.offer.type];
    flatCard.querySelector('.popup__text--capacity').textContent = obj.offer.rooms + ' комнаты для ' + obj.offer.guests + ' гостей';
    flatCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + obj.offer.checkin + ', выезд до ' + obj.offer.checkout;
    flatCard.querySelector('.popup__features').innerHTML = '';
    flatCard.querySelector('.popup__features').appendChild(printFeatures(obj.offer.features));
    flatCard.querySelector('.popup__description').textContent = obj.offer.description;
    flatCard.querySelector('.popup__photos').innerHTML = '';
    flatCard.querySelector('.popup__photos').appendChild(printPhotos(obj.offer.photos));
    flatCard.querySelector('img').src = obj.author.avatar;
    return flatCard;
  };

  var showCard = function (obj) {
    closeCard();
    var childElement = map.querySelector('.map__filters-container');
    var card = map.insertBefore(renderCard(obj), childElement);
    var closeButton = card.querySelector('.popup__close');
    closeButton.addEventListener('click', function () {
      closeCard();
    });
    document.addEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === window.const.ESC_KEY) {
      closeCard();
    }
  };

  var closeCard = function () {
    var card = map.querySelector('.map__card');
    if (card) {
      card.remove();
      document.removeEventListener('keydown', onPopupEscPress);
    }
  };

  window.card = {
    show: showCard,
    close: closeCard,
  };
})();
