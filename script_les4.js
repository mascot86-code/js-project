
// Задание разложить число на десятнки, сотни и тд. Если превышает 999, предупредить пользователя.


    let max = 999;

    let digit = {
          number: parseInt(+prompt('Введите число от 0 до 999')),
          units: 0,
          tens: 0,
          hundreds: 0,
        };

       
        if (digit.number <= max){
          digit.units = parseInt(digit.number % 10);
          digit.tens = parseInt(digit.number / 10 % 10);
          digit.hundreds = parseInt(digit.number / 100 % 10);
        } else {
            digit.number > max;
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
 
        
    console.log(digit);
    



//Задание про корзину. Изначально решил пойти через объекты.

// Организуем массив объектов для хранения товаров в корзине.
let cart = [
    {good: 'Банан', price: 20, quantity: 3},
    {good: 'Киви', price: 30, quantity: 6},
    {good: 'Манго', price: 50, quantity: 8}
    ];
// Кладем еще какие-то товары в корзину    
    cart.push({good: 'Лимон', price: 70, quantity: 7});
    cart.push({good: 'Груша', price: 90, quantity: 12});
    
// Чекаем (выводим список товаров в консоль) товары в корзине с помощью for..of....    
    for(product of cart) {console.log (product)};

// Я посчитал, что работа с объектами в массиве нормальная на данный момент времени практика, поэтому решил воспользоваться методом reduce, чтобы посчитать итоговую стоимость корзины.
    const amount = cart.reduce ((total, product) => {return total+product.price*product.quantity}, 0); // 0 означем, что изначальна корзина пуста и ее стоимость равна нулю.
    
    console.log ('Стоимость корзины: ' +amount +' рублей(ля)');