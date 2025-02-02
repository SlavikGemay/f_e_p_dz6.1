'use strict';

const resultAfterDel = getDelFromUser("Введіть строку:", ['Введіть символи, які потрібно видалити:']);
function getDelFromUser(message, items) {

    let result;

    let messageList = prompt(message);
    messageList = messageList.split('');

    let delFromMessageList = prompt(items);
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
alert(`Після видалення елементів ви отримали: ${resultAfterDel}!`);