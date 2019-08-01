/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    var length = array.length;

    for (let i = 0; i < length; i++) {
        fn(array[i], i, array);
      
    } 
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var length = array.length;
    var resultArray = [];

    for (let i = 0; i < length; i++) {
        resultArray.push(fn(array[i], i, array)); 
    }
    
    return resultArray;  
}
/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var length = array.length;
    var prev = initial;

    for (let i = 0; i < length; i++) {
        if (prev === undefined) {
            prev = array[0];
        } else {
            prev = fn(prev, array[i], i, array);
        }
    }
    
    return prev;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    var resArr = [];
    var resultArray = [];
    var resArr = Object.keys(obj);    
    var result = '';

    for (let i = 0; i < resArr.length; i++) {
        result = resArr[i];
        result = result.toUpperCase();
        resultArray.push(result);
    }

    return resultArray;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
