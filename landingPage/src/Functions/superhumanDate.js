import { compareTwoStrings } from 'string-similarity';
import { parse as chronoParse } from 'chrono-node';

export async function findBestMatch(inputString) {

    return new Promise((resolve, reject) => {
        let bestMatch = { bestMatch: { rating: -1 } };

        const stringList = [
            "tomorrow",
            "today",
            "day after tomorrow",
            "next week",
            "next month",
            "next Monday",
            "next Tuesday",
            "next Wednesday",
            "next Thursday",
            "next Friday",
            "next Saturday",
            "next Sunday",
        ];

        let numericalStringList = [
            "in X days",
            "in X weeks",
            "in X months",
        ]
        
        const parsedDate = chronoParse(inputString, new Date(), { forwardDate: true });
        if (parsedDate && parsedDate.length > 0) {
            // If it can, return the parsed date as it is a specific date
            const date = parsedDate[0].start.date();
            // Check if the date is in the future
            if (date > new Date()) {
                const result = {
                    text: date.toLocaleString('en-US', { weekday: 'long', day: 'numeric', month: 'long' }),
                    date: date
                };

                resolve(result);
            }

        } else {

            const hasNumber = /\d/.test(inputString);

            if (hasNumber) {
                const firstNumericalCharacter = inputString.match(/\d/)[0];
                numericalStringList = numericalStringList.map(string => string.replace('X', firstNumericalCharacter));
                numericalStringList.forEach((string) => {
                    const match = compareTwoStrings(inputString, string);
                    if (match > bestMatch.bestMatch.rating) {
                        bestMatch = { bestMatch: { target: string, rating: match } };
                    }
                });
            } else {
                stringList.forEach((string) => {
                    const match = compareTwoStrings(inputString, string);
                    if (match > bestMatch.bestMatch.rating) {
                        bestMatch = { bestMatch: { target: string, rating: match } };
                    }
                });
            }
        }
        const parsedBestMatch = chronoParse(bestMatch.bestMatch.target, new Date(), { forwardDate: true });
        if (parsedBestMatch && parsedBestMatch.length > 0) {
            const date = parsedBestMatch[0].start.date();
            if (date !== null) {
                const result = {
                    text: `${bestMatch.bestMatch.target}, ${date.toLocaleString('en-US', {day: 'numeric', month: 'long' })}`,
                    date: date
                };

                resolve(result);
            }
        }
    });
}
