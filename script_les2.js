// Задача 1. Почему код даёт именно такие результаты?

    var a = 1, b = 1, c, d;
    c = ++a; alert(c); // 2 /* ++a означает что мы к переменной а прибавляем единицу */
    d = b++; alert(d); // 1 /* ++ после переменной означает, что мы прибавляем единицу, но выводим предыдущее  значение переменной */
    c = (2+ ++a); alert(c); // 5 /* т.к. в первом примере мы прибавили единицу в переменную а ее значение стало равно 	
                   // 2.В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5 */
    d = (2+ b++); alert(d); // 4 /* т.к. во втором примере мы прибавили единицу в переменную b ее значение стало равно 	
                    //2.В данном примере прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4 */
    alert(a); // 3	/* прибавили единицу в примере 1 и примере 3 */
    alert(b); // 3	/* прибавили единицу в примере 2 и примере 4 */


   // Задача 2. Чему будет равен x в примере ниже?

let a = 2;
let x = 1 + (a *= 2); // выражение в () равно 4 а = 2*2;

console.log (x); // 5


// Объявить две целочисленные переменные — a и b


let a = parseInt(+prompt ('Введите значение а: '));
let b = parseInt(+prompt ('Введите значение b: '));

if (a > 0 && b > 0) {

alert (a - b);


} else if (a < 0 && b < 0) {

alert (a * b);

} else if (a > 0 && b < 0 || a < 0 && b > 0) {


alert (a + b);

}



//Задача 5. Реализовать четыре основные арифметические операции в виде функций


function sum (a,b) {

return a + b;

}

let resultSum = sum (1 , 2);

document.write('Результат сложения: ' +resultSum +'<br />' +'<br />');

function sub (a,b) {

    return a - b;
}

let resultSub = sub (2 , 5 );

document.write('Результат вычитания: ' +resultSub +'<br />' +'<br />');


function mult (a,b) {

    return a * b;
}

let resultMult = mult (11 , 5 );

document.write('Результат умножения: ' +resultMult +'<br />' +'<br />');


function div (a,b) {

    return a / b;
}

let resultDiv = div (15 , 25 );

document.write('Результат деления: ' +resultDiv +'<br />' +'<br />');


// Задача 4. Присвоить переменной а значение в промежутке [0..15].

let name = prompt('Представьтесь пожалуйста: ')
let a = +prompt('А теперь введите число от 1 до 15');

switch (a) {

case 1: 

alert('Ваше значение ' + a); break;

case 2: 

alert('Ваше значение ' + a); break;

case 3: 

alert('Ваше значение ' + a); break;

case 4: 

alert('Ваше значение ' + a); break;

case 5: 

alert('Ваше значение ' + a); break;

case 6: 

alert('Ваше значение ' + a); break;

case 7: 

alert('Ваше значение ' + a); break;

case 8: 

alert('Ваше значение ' + a); break;

case 9: 

alert('Ваше значение ' + a); break;

case 10: 

alert('Ваше значение ' + a); break;

case 11: 

alert('Ваше значение ' + a); break;

case 12: 

alert('Ваше значение ' + a); break;

case 13: 

alert('Ваше значение ' + a); break;

case 14: 

alert('Ваше значение ' + a); break;

case 15: 

alert('Ваше значение ' + a); break;

default:

alert('Диапазон всего до 15 чисел.' + ' До свидания, ' +name +'!'); break;


}


//Задача 6.



function mathOperation(arg1, arg2, operation) {

switch(operation) {

case 'сложение': 
return arg1+arg2; break;

case 'вычитание':
return arg1-arg2; break;

case 'умножение':
return arg1*arg2; break;

case 'деление':
return arg1/arg2; break;

}


}




//Циклы

for (let i = 0; i <= 9; i++) console.log(i);






