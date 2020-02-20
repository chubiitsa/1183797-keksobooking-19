'use strict';

(function () {

  var disablePage = function () {
    window.form.disable();
    window.filter.disable();
    window.form.fillAddressPlaceholder();
  };

  var enablePage = function () {
    window.map.enable();
    window.form.enable();
    window.filter.enable();
    window.form.fillAddress();
  };

  document.addEventListener('DOMContentLoaded', function () {
    disablePage();
  });

  var similarFlats = [];

  var successHandler = function (flats) {
    for (var j = 0; j < flats.length; j++) {
      flats[j].index = j;
    }
    similarFlats.length = 0;
    for (var i = 0; i < flats.length; i++) {
      similarFlats.push(flats[i]);
    }
    window.pin.print(flats);
  };

  var getSimilarFlats = function () {
    return similarFlats;
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: #503931;';
    node.style.position = 'absolute';
    node.style.width = '600px';
    node.style.minHeight = '80px';
    node.style.top = '260px';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontSize = '20px';
    node.style.color = 'white';
    node.style.borderRadius = '10px';
    node.style.opacity = '0.8';
    node.style.padding = '25px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.start = {
    enablePage: enablePage,
    successHandler: successHandler,
    errorHandler: errorHandler,
    getFlats: getSimilarFlats,
  };
})();
