'use strict';

(function () {
  var main = document.querySelector('main');
  var successMessage = document.querySelector('#success')
    .content.querySelector('.success').cloneNode(true);
  var errorMessage = document.querySelector('#error')
    .content.querySelector('.error').cloneNode(true);

  var printSuccessMessage = function () {
    main.appendChild(successMessage);

    var onEscPress = function (evt) {
      if (evt.key === window.const.ESC_KEY) {
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
    errorMessage.querySelector('.error__message').innerHTML = error;
    main.appendChild(errorMessage);

    var errorButton = errorMessage.querySelector('.error__button');

    errorButton.addEventListener('click', function () {
      errorMessage.remove();
    });

    var onEscPress = function (evt) {
      if (evt.key === window.const.ESC_KEY) {
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
