export const rounded = (number, roundedIndex) =>{
    const result = +number
    return Number.isInteger(result) ? number : `${result.toFixed(roundedIndex)}`;

}
export const getDate = ()=>{
    const date = new Date();
    const year = date.getFullYear();
    const month = (`${date.getMonth() + 1}`).length === 1 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    const day = date.getDate();
    return `${year}${month}${day}`
}