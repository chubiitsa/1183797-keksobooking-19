'use strict';

(function () {

  var URL = 'https://js.dump.academy/keksobooking';
  var StatusCode = {
    OK: 200,
  };
  var TIMEOUT_IN_MS = 10000;

  var createXHR = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = TIMEOUT_IN_MS;

    return xhr;
  };

  var load = function (onSuccess, onError) {
    var serverData = createXHR(onSuccess, onError);

    serverData.open('GET', (URL + '/data'));
    serverData.send();
  };

  var save = function (data, onSuccess, onError) {
    var serverData = createXHR(onSuccess, onError);

    serverData.open('POST', URL);
    serverData.send(data);
  };

  window.server = {
    load: load,
    save: save,
  };
})();
