'use strict';

const dataFromUser = prompt('Введіть строку:');
const dataForDel = prompt('Введіть символи, які потрібно видалити:');

if (!dataFromUser?.trim() || !dataForDel?.trim()) {
    alert('Помилка, спробуйте ще раз.');
}

const resultAfterDel = getDelFromUser(dataFromUser, dataForDel);
function getDelFromUser(strToArr, arr) {
    let result;
    strToArr = dataFromUser.split('');
    arr = dataForDel.split('');
    for (let i = 0; i < strToArr.length; i++) {
        if (arr.includes(strToArr[i])) {
            strToArr.splice(i, 1);
            i--;
        }
    }
    result = strToArr.join('');
    return result;
}
alert(`Після видалення елементів ви отримали: ${resultAfterDel}!`);


// -------------------------------------------------------------------------------------------------------------------

// const resultAfterDel = getDelFromUser("Введіть строку:", ['Введіть символи, які потрібно видалити:']);
// function getDelFromUser(message, items) {
//
//     let result;
//
//     let messageList = prompt(message);
//     messageList = messageList.split('');
//
//     let delFromMessageList = prompt(items);
//     delFromMessageList = delFromMessageList.split('');
//
//     for (let i = 0; i < messageList.length; i++) {
//         if (delFromMessageList.includes(messageList[i])) {
//             messageList.splice(i, 1);
//             i--;
//         }
//     }
//
//     result = messageList.join('');
//     return result;
// }
// alert(`Після видалення елементів ви отримали: ${resultAfterDel}!`);

// ---------------------------------------------------------------------------------------------------------------------

// prompt("Введите строку:");
// prompt("Введите символы, которые нужно удалить:");
//
// const message = 'hello world';
// const items = ['l','d'];
// const messageList = message.split('');
//
// for (let i = 0; i < messageList.length; i++) {
//     if (items.includes(messageList[i])) {
//         messageList.splice(i, 1);
//         i--;
//     }
// }
// const result = messageList.join('');
// console.log(result);
//
// const message = getStrFromUser();
// function getStrFromUser() {
//     let data;
//     do {
//         data = prompt('Введіть строку:');
//     }
//     while (!data?.trim());
//     return data;
// }
// alert(`Ви ввели: ${message}`);

// ----------------------------------------------------------------------------------------------------------------

