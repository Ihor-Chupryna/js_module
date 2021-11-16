// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrayNumb = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let i = 0;
while (i < arrayNumb.length) {
    console.log(arrayNumb[i]);
    i++;
}

// 2. перебрати його циклом for
for (let i = 0; i < arrayNumb.length; i++) {
    console.log(arrayNumb[i])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let k = 0;
while (k < arrayNumb.length) {
    if (k % 2 === 1) {
        console.log(arrayNumb[k])
    }
    k++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < arrayNumb.length; i++) {
    if (arrayNumb[i] % 2 === 1) {
        console.log(arrayNumb[i])
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let j = 0;
while (j < arrayNumb.length) {
    if (arrayNumb[j] % 2 === 0) {
        console.log(arrayNumb[j])
    }
    j++;
}

// . перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < arrayNumb.length; i++) {
    if (arrayNumb[i] % 2 === 0) {
        console.log(arrayNumb[i])
    }
}

// замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < arrayNumb.length; i++) {
    if (arrayNumb[i] % 3 === 0) {
        arrayNumb[i] = 'okten'
    }
    console.log(arrayNumb[i])
}

// 8. вивести масив в зворотньому порядку.
// console.log(arrayNumb.reverse());

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати його циклом while (зворотній)
let s = arrayNumb.length-1;
while (s >= 0) {
    console.log(arrayNumb[s])
    s--;
}

// перебрати його циклом for (зворотній)
for (let i = arrayNumb.length-1; i >= 0; i--) {
    console.log(arrayNumb[i])
}

// перебрати циклом while та вивести  числа тільки з непарним індексом (зворотній)
let y = arrayNumb.length-1;
while (y >= 0) {
    if (y % 2 === 1) {
        console.log(arrayNumb[y])
    }
    y--;
}

// перебрати циклом for та вивести  числа тільки з непарним індексом (зворотній)
for (let i = arrayNumb.length-1; i >= 0; i-- ) {
    if (i % 2 === 1) {
        console.log(arrayNumb[i])
    }
}

// перебрати циклом while та вивести  числа тільки парні  значення (зворотній)
let v = arrayNumb.length-1;
while (v >= 0) {
    if (arrayNumb[v] % 2 === 0) {
        console.log(arrayNumb[v])
    }
    v--;
}

// перебрати циклом for та вивести  числа тільки парні  значення (зворотній)
for (let i = arrayNumb.length-1; i >=0; i--) {
    if (arrayNumb[i] % 2 === 0) {
        console.log(arrayNumb[i])
    }
}

// замінити кожне число кратне 3 на слово "okten" (зворотній)
for (let i = arrayNumb.length-1; i >= 0; i--) {
    if (arrayNumb[i] % 3 === 0) {
        arrayNumb[i] = 'okten'
    }
    console.log(arrayNumb[i])
}