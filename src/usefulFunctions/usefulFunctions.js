
export function containsItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}

export function beautifulDate(date) {
    let dateString = date.getDate() + '.';

    if (date.getMonth() < 9) {
        dateString = dateString + '0' + (date.getMonth() + 1) + '.';
    }
    else {
        dateString = dateString + (date.getMonth() + 1) + '.';
    }

    dateString = dateString + date.getFullYear();

    return dateString
}

export function beautifulTime(date) {
    let timeString = date.getHours() + ':';

    if (date.getMinutes() < 10) {
        timeString = timeString + '0' + date.getMinutes();
    }
    else {
        timeString = timeString + date.getMinutes();
    }

    return timeString
}

export function random5() {
    return Math.floor(Math.random()*90000) + 10000;
}

