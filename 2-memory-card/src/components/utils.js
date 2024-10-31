function generateRandomCards(count, minValue=1, maxValue=1025) {
    const generatedArray = [];

    while(generatedArray.length < count) {
        const num = Math.floor(Math.random() * maxValue);
        if (!generatedArray.includes(num) && num >= minValue) {
            generatedArray.push(num);
        };
    };

    return generatedArray;
};

function shuffleArray(array) {
    const duplicateArray = [...array];
    for (let i = duplicateArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [duplicateArray[i], duplicateArray[j]] = [duplicateArray[j], duplicateArray[i]];
    };

    return duplicateArray;
};

export { generateRandomCards, shuffleArray };