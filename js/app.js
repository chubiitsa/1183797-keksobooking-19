'use strict';

(function () {
  var activeStatus = false;

  var isActive = function () {
    return activeStatus;
  };

  var disablePage = function () {
    activeStatus = false;
    window.map.disable();
    window.form.disable();
    var position = window.mainpin.getPosition();
    window.form.fillAddress(position.x, position.y);
  };

  var enablePage = function () {
    activeStatus = true;
    window.server.load(successHandler, errorHandler);
    window.map.enable();
    window.form.enable();
  };

  var successHandler = function (arr) {
    var data = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].offer) {
        data.push(arr[i]);
      }
    }
    window.map.load(data);
  };

  var errorHandler = function (errorMessage) {
    window.message.printError(errorMessage);
    disablePage();
  };

  var onMoveMainPin = function (x, y) {
    window.form.fillAddress(x, y);
  };

  var onClickMainPin = function (x, y) {
    window.form.fillAddress(x, y);
  };

  var saveAdForm = function (formData) {
    window.server.save(formData, onSaveSuccess, onSaveError);
  };

  var onSaveSuccess = function () {
    window.message.printSuccess();
    disablePage();
  };

  var onSaveError = function (error) {
    window.message.printError(error);
  };

  document.addEventListener('DOMContentLoaded', function () {
    disablePage();
  });

  window.app = {
    disablePage: disablePage,
    enablePage: enablePage,
    onMoveMainPin: onMoveMainPin,
    onClickMainPin: onClickMainPin,
    isActive: isActive,
    saveAdForm: saveAdForm,
  };
})();
