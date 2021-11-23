// - Дано натуральное число n. Выведите все числа от 1 до n.
const showNumber = (index = 1, n) => {
    console.log(index);
    index++;
    if (index > n) {
        return;
    }
    showNumber(index, n);
}
showNumber(1, 15)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
function showNumberFromAtoB(numA, numB) {
   if (numA <= numB) {
       console.log(numA);
       numA++;
       if (numA > numB) {
           return;
       }
   }
   else if (numA >= numB) {
       console.log(numA);
       numA--;
       if (numA < numB) {
           return;
       }
   }
showNumberFromAtoB(numA, numB);
}
showNumberFromAtoB(1, 10);



