let name1 = prompt('Как тебя зовут?', 'Землянин');
// let age = prompt('Сколько тебе лет?', 22);

if (name1 === null) {
    name1 = 'Землянин';
}
// age = Number(age);
// let isBoss = confirm(`Тебя зовут ${name1}? И тебе ${age} года?`);

// if (name1 == "" || Number.isNaN(age) || isBoss == false) {
// alert ("Неправильное имя или возраст! Введите правильные данные!");
// location.reload();
// }
//____________________________________________________↓_innerHTML_↓_____________________________________________________

let NameVisitor = document.querySelector('.NameVisitor');
// NameVisitor.innerHTML = 'Привет, ' + name1 + '!';
// NameVisitor.textContent = 'Привет, ' + name1 + '!';
// NameVisitor.innerText = 'Привет, ' + name1 + '!';
NameVisitor.outerHTML = 'Привет, ' + name1 + '!';

//____________________________________________________↑_innerHTML_↑_____________________________________________________
