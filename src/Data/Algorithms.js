export const getData = (idList = [], objectList = [], forColumn = false) => {
    const data = {};

    objectList.forEach((card) => {
        if (idList.includes(card.cardId)) {
            if (card.id !== "" && forColumn === false) {
                data[card.id] = card;
            } else {
                data[card.cardId] = card;
            }
        }
    });

    return data;
};

const getMonthName = (monthNumber) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
        return monthNames[monthNumber - 1];
    } else {
        return "Invalid Month";
    }
};

export const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const monthNumber = today.getMonth() + 1; // Add 1 because months are zero-based
    const monthName = getMonthName(monthNumber); // Convert numeric month to name
    const day = String(today.getDate()).padStart(2, '0');

    return {
        "year": year,
        "month": monthName, // Use the month name
        "day": day,
        "date": ${year}-${String(monthNumber).padStart(2, '0')}-${day}
    };
};


export const getTime = () => {
    const today = new Date();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    return {
        "hr": hours,
        "min": minutes,
        "sec": seconds,
        "time": ${hours}:${minutes}:${seconds}
    };
};