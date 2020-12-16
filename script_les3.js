//Цикл без тела

for (let i = 0; i <= 9; console.log(i++)) { /* пусто */ };

// Вывести простые числа от 1 до 100 с помощью цикла while



// Простые числа через while

let i = 1;

nextNum: while (i < 100) {
    i++;
    let j = 2;
    while (j < i) {
        if (i % j == 0) {
            continue nextNum;    
        }
        j++;
    }
    console.log (i);
}


// Простые числа. Через цикл for на мой взгляд более удобно решить данную задачу)
nextNum:
for (let i = 2; i <= 100; i++) {
for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextNum;
  }
  alert( i );  
}



// Задание про пирамиду с 20 рядами

let a = 'x';

for (let i = 0; i < 20; i++) {

a+='x';
console.log(a);

}


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





