'use strict';

(function () {
  var activeStatus = false;

  var disablePage = function () {
    activeStatus = false;
    window.card.close();
    window.mainpin.setInitialPosition();
    var position = window.mainpin.getPosition();
    window.map.disable();
    window.filter.disable();
    window.form.fillAddress(position.x, position.y);
    window.form.disable();
  };

  var enablePage = function () {
    activeStatus = true;
    window.server.load(window.app.successHandler, window.app.errorHandler);
    window.map.enable();
    window.filter.enable();
    window.form.enable();
    window.form.fillAddress();
  };

  var isActive = function () {
    return activeStatus;
  };

  document.addEventListener('DOMContentLoaded', function () {
    disablePage();
  });

  var similarFlats = [];

  var successHandler = function (arr) {
    for (var j = 0; j < arr.length; j++) {
      arr[j].index = j;
    }
    similarFlats.length = 0;
    for (var i = 0; i < arr.length; i++) {
      similarFlats.push(arr[i]);
    }
    window.map.printPins(arr);
  };

  var getFlats = function () {
    return similarFlats;
  };

  var onMoveMainPin = function (x, y) {
    window.form.fillAddress(x, y);
  };

  var onClickMainPin = function (x, y) {
    window.form.fillAddress(x, y);
  };

  var saveAdForm = function () {
    window.server.save(new FormData(window.form.adForm), window.message.printSuccess, window.message.printError);
    window.form.adForm.reset();
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


  window.app = {
    disablePage: disablePage,
    enablePage: enablePage,
    successHandler: successHandler,
    errorHandler: errorHandler,
    getFlats: getFlats,
    onMoveMainPin: onMoveMainPin,
    onClickMainPin: onClickMainPin,
    isActive: isActive,
    saveAdForm: saveAdForm,
  };
})();
