
/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

for (let i = 0; i < 11; i++) {
    (i === 0) ? console.log("0 - это ноль") :
        ((i > 0) && (i % 2) != 0) ? console.log(`${i} - это нечетное число`) :
            ((i > 0) && (i % 2) === 0) ? console.log(`${i} - это четное число`) : console.log("The END!");
};

*/

/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1);
arr1.splice(3, 2);
console.log(arr1);

*/

/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3

let Array1 = [];

for (let i = 0; i < 5; i++) {
    Array1[i] = Math.round(Math.random() * 10);
}
console.log(Array1);
let Summ = 0;
for (let i = 0; i < Array1.length; i++) {
    Summ = Array1[i] + Summ;
}
console.log(Summ);

let swap_bool = true;
let temp = 0;
while (swap_bool) {
    swap_bool = false;
    for (let i = 0; i < Array1.length - 1; i++) {
        if (Array1[i] > Array1[i + 1]) {
            temp = Array1[i + 1];
            Array1[i + 1] = Array1[i];
            Array1[i] = temp;
            swap_bool = true;
        };
    };
};
console.log(Array1);


*/
/*
Необходимо вывести горку в консоль (используя цикл for),
 как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

*/

