// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

const checkEmail = (email = ' ') => {
    let arr = [];
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@')
            arr.push(email[i]);
    }
    let result = email.toLowerCase();
    let searchA = result.search('@');
    let searchB = result.replace('.', '}').search('}')
    if (result.includes('@') && searchB >= searchA + 3 && arr.length === 1) {
        console.log('valid mail');
    } else {
        console.log('not valid name');
    }
    console.log(result);
}

checkEmail('someeMAIL@gmail.com');

//- відсортувати його в спадаючому порядку за кількістю елементів в полі modules
const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const sortModulesElement = coursesArray.sort((a, b) => {
    return b.modules.length - a.modules.length;
});
console.log(sortModulesElement);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symbol = "о";
let string = "Астрономия это наука о небесных объектах";
const count = (str, stringSearch) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringSearch)
            arr.push(str[i]);
    }
    return arr.length
}
document.writeln(count(string, symbol));

// Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
const cutString = (str, n) => {
  return  str.split(' ').splice(0, n).join(' ');
}
document.writeln(cutString(str, 5));
