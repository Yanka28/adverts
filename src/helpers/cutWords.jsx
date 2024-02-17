 export const cutWords = (string) => { 
const words = string.split(", ");
    const lastTwoWords = words.slice(-2).join(" ");
    return lastTwoWords;
}
