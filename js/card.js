'use strict';

(function () {
  var map = document.querySelector('.map');
  var cardTemplate = document.querySelector('#card')
    .content.querySelector('.map__card');

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

  var showCard = function (obj) {
    var card = document.querySelector('.map__card');
    var childElement = document.querySelector('.map__filters-container');
    if (card) {
      card.remove();
    }
    card = document.createDocumentFragment().appendChild(renderCard(obj));
    map.insertBefore(card, childElement);
    var cardCloseButton = card.querySelector('.popup__close');
    attachCloseCardEventTo(cardCloseButton);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === window.const.ESC_KEY) {
      closeCard();
    }
  };

  var attachCloseCardEventTo = function (button) {
    button.addEventListener('click', function () {
      closeCard();
    });

    button.addEventListener('keydown', function (evt) {
      if (evt.key === window.const.ENTER_KEY) {
        closeCard();
      }
    });
  };

  var closeCard = function () {
    document.querySelector('.map__card').remove();
    document.removeEventListener('keydown', onPopupEscPress);
  };

  window.card = {
    render: renderCard,
    show: showCard,
  };

  /*
  var printCard = function (printArea, obj) {
    var newCard = document.createDocumentFragment().appendChild(renderCard(obj));
    var childElement = document.querySelector('.map__filters-container');
    return printArea.insertBefore(newCard, childElement);
  };
   */
})();
