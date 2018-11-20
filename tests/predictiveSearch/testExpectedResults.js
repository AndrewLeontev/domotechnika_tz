/*
|--------------------------------------------------------------------------
|  Релевантные результаты в блоке
|--------------------------------------------------------------------------
|
| Цель: 
| проверить что результаты поиска в блоке релевантны и соответствуют
| ожидаемым
|
*/
module.exports = {
  'Open results block' : function (client) {
    client
      .url('https://domotekhnika.ru/')
      .waitForElementVisible('body', 1000)                                               // проверяем что в сторке поиска есть иконка 
      .setValue('input[type=text].form-control.w-100.pr-5', 'пре')                    // "вводим" значение в строку поиска
      .waitForElementVisible('#search-result', 2000)                                  // ждем пока отобразиться окно результатов
      .assert.containsText('div.search-result__wrap a:first-child', 'Переходники')    // проверяем соответствует первый результат поиска ожидаемому 
      .assert.containsText('div.search-result__wrap a:first-child', '(категория)')    // проверяем соответствует первый результат поиска ожидаемому 
      .assert.containsText('div.search-result__wrap a:nth-child(4)', 'Переходники Vertex')    // проверяем соответствует 4 результат поиска ожидаемому 
      .assert.containsText('div.search-result__wrap a:nth-child(4)', 'от 290 р.')     // проверяем соответствует первый результат поиска ожидаемому 
      .assert.containsText('.search-result__product-wrap:first-child', 'Фильтр для воды Аквафор ПРЕМИУМ') // проверяем есть ли в форме результатов кнопка "показать все результаты"
      .click('div.search-result__wrap a:first-child')                                 // переход по первой ссылке из результатов поиска
      .waitForElementVisible('body', 1000)                                            // ждем загрузки страницы
      // проверяем что мы попали на нужную страницу
      .assert.title('Купить Переходники недорого в интернет магазине Домотехника. Отзывы реальных покупателей, большой каталог, описания Владивосток')
      .assert.visible('#catalogContent')
      .assert.containsText('.product-card.col-6.col-md-4:first-child', 'Переходник Gembird A-DPM-HDMIF 20M/19F')
      .end();
  }
};