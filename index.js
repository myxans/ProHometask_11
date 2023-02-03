let array = prompt('Введіть слова або числа через кому')

let arr = array.split(', ');

alert(`Наш масив ${arr.join(', ')}`);

arr.sort(function (a, b) {
    return a - b;
});

alert(` масив за зростанням ${arr}`);

(arr.splice(1, 3));

alert(`Видалення елементів з масиву з 2 по 4 (включно!). ${(arr)}`);