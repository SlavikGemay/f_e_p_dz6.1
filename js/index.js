'use strict';

const resultAfterDel = getDelFromUser("Введіть строку:", ['Введіть символи, які потрібно видалити:']);
alert(`Після видалення елементів ви отримали: ${resultAfterDel}!`);
function getDelFromUser(message, items) {

    let result;

    let messageList;
    do {
        messageList = prompt(message);
    }
    while (!messageList?.trim());
    alert(`Ви ввели: ${messageList}`);
    messageList = messageList.split('');

    let delFromMessageList;
    do {
        delFromMessageList = prompt(items);

    }
    while (!delFromMessageList?.trim());
    alert(`Потрібно видалити: ${delFromMessageList}`);
    delFromMessageList = delFromMessageList.split('');

    for (let i = 0; i < messageList.length; i++) {
        if (delFromMessageList.includes(messageList[i])) {
            messageList.splice(i, 1);
            i--;
        }
    }
    result = messageList.join('');
    return result;
}

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

