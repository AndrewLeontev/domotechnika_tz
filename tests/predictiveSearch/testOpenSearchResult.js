/*
|--------------------------------------------------------------------------
|  Открытие блока результатов 
|--------------------------------------------------------------------------
|
| Цель:
| проверить что на странице есть строка поиска и что при вводе текста
| в строку запроса - ниже появляется блок с результатами поиска
|
*/
module.exports = {
  'Open results block' : function (client) {
    client
      .url('https://domotekhnika.ru/')
      .waitForElementVisible('body', 1000)
      .assert.title('Интернет магазин бытовой техники и электроники - Домотехника')   // проверяем что у страницы есть нужный title и мы действительно на нужном сайте
      .assert.visible('input[type=text].form-control.w-100.pr-5')                     // проверяем что на сайте есть строка поиска
      .assert.visible('.input__icon')                                                 // проверяем что в сторке поиска есть иконка 
      .setValue('input[type=text].form-control.w-100.pr-5', 'пре')                    // "вводим" значение в строку поиска
      .pause(2000)  
      .assert.visible('#search-result')                                               // проверяем на всякий случай что оно все же отобразилось
      .end();
  }
};