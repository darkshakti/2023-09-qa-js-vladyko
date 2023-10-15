// Задание 1:

// В файле tale.js cоздать функцию kolobok.
// Функция kolobok принимает на вход имя персонажа, возвращает, что сделал колобок после встречи с персонажем.
// Список персонажей: дедушка; заяц; лиса.

function kolobok(name) {
    let kolobokAction;

    switch (name) {
        case 'дедушка':
            kolobokAction = 'Я от дедушки ушёл';
            break;

        case 'лиса':
            kolobokAction = 'Меня съели';
            break;

        case 'заяц':
            kolobokAction = 'Пошли в бар';
            break;

        default:
            kolobokAction = 'Встретил рассвет на Бали';
    }

    return kolobokAction;
}

console.log(kolobok('дедушка')); // Я от дедушки ушёл
console.log(kolobok('лиса')); // Меня съели
console.log(kolobok('заяц')); // Пошли в бар
console.log(kolobok('волк')); // Встретил рассвет на Бали

// Задание 2:

// В файле tale.js cоздать функцию newYear.
// Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
// Функция возвращает: "Дед Мороз! Дед Мороз! Дед Мороз!" или "Снегурочка! Снегурочка! Снегурочка!";
// В функции используйте шаблонные строки;

function newYear(name) {
    return `${name}! ${name}! ${name}!`;
}

console.log(newYear('Дед Мороз')); // Дед Мороз! Дед Мороз! Дед Мороз!
console.log(newYear('Снегурочка')); // Снегурочка! Снегурочка! Снегурочка!
console.log(newYear('')); // ! ! !
