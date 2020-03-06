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
    window.server.load(onLoadSuccess, onLoadError);
    window.map.enable();
    window.form.enable();
  };

  var onLoadSuccess = function (arr) {
    var data = arr.filter(function (ad) {
      return ad.offer;
    });
    window.map.load(data);
  };

  var onLoadError = function (errorMessage) {
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
