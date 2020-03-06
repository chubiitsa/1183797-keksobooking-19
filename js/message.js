'use strict';

(function () {
  var main = document.querySelector('main');
  var successTemplate = document.querySelector('#success')
    .content.querySelector('.success');
  var errorTemplate = document.querySelector('#error')
    .content.querySelector('.error');


  var printSuccessMessage = function () {
    var successMessage = successTemplate.cloneNode(true);
    main.appendChild(successMessage);

    var onEscPress = function (evt) {
      if (evt.key === window.tool.ESC_KEY) {
        successMessage.remove();
        document.removeEventListener('keydown', onEscPress);
      }
    };

    document.addEventListener('keydown', onEscPress);

    document.addEventListener('click', function () {
      successMessage.remove();
      document.removeEventListener('keydown', onEscPress);
    });
  };

  var printErrorMessage = function (error) {
    var errorMessage = errorTemplate.cloneNode(true);
    errorMessage.querySelector('.error__message').textContent = error;
    main.appendChild(errorMessage);

    var errorButton = errorMessage.querySelector('.error__button');

    errorButton.addEventListener('click', function () {
      errorMessage.remove();
    });

    var onEscPress = function (evt) {
      if (evt.key === window.tool.ESC_KEY) {
        errorMessage.remove();
        document.removeEventListener('keydown', onEscPress);
      }
    };

    document.addEventListener('keydown', onEscPress);

    document.addEventListener('click', function () {
      errorMessage.remove();
      document.removeEventListener('keydown', onEscPress);
    });
  };

  window.message = {
    printSuccess: printSuccessMessage,
    printError: printErrorMessage,
  };
})();
