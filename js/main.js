'use strict';

var flats = [];
var flatTypes = ['palace', 'flat', 'house', 'bungalo'];
var checkinTimes = ['12:00', '13:00', '14:00'];
var checkoutTimes = ['12:00', '13:00', '14:00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var quantityOfFlats = 8;
var map = document.querySelector('.map');
var pinsMap = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');
var pinWidth = 50;
var pinHeight = 70;

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var getRandomArray = function (arr) {
  var randomArray = [];
  var randomArrayLength = getRandomNumber(1, arr.length);
  while (randomArray.length < randomArrayLength) {
    var randomElement = arr[getRandomNumber(0, arr.length)];
    if (randomArray.indexOf(randomElement) < 0) {
      randomArray.push(randomElement);
    }
  }
  return randomArray;
};

for (var i = 1; i <= quantityOfFlats; i++) {
  var flatLocation = {
    x: getRandomNumber(25, 1175),
    y: getRandomNumber(200, 700)
  };
  flats.push({
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },
    offer: {
      'title': 'Проверка',
      'address': flatLocation.x + ', ' + flatLocation.y,
      'price': 0,
      'type': flatTypes[getRandomNumber(0, flatTypes.length)],
      'rooms': 0,
      'guests': 0,
      'checkin': checkinTimes[getRandomNumber(0, checkinTimes.length)],
      'checkout': checkoutTimes[getRandomNumber(0, checkoutTimes.length)],
      'features': getRandomArray(features),
      'description': '',
      'photos': getRandomArray(photos)
    },
    location: flatLocation
  });
}

map.classList.remove('map--faded');

var renderFlat = function (flat) {
  var flatPin = pinTemplate.cloneNode(true);

  flatPin.style = 'left: ' + (flat.location.x - pinWidth / 2) + 'px; top: ' + (flat.location.y - pinHeight) + 'px';
  flatPin.querySelector('img').src = flat.author.avatar;
  flatPin.querySelector('img').alt = flat.offer.title;
  return flatPin;
};

var printFlats = function (flatsArr) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < flatsArr.length; j++) {
    fragment.appendChild(renderFlat(flatsArr[j]));
  }
  return fragment;
};

pinsMap.appendChild(printFlats(flats));


