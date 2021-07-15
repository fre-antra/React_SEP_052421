const yourDate = new Date();
const offset = yourDate.getTimezoneOffset();
var convertedDate = new Date(yourDate.getTime() - (offset*60*1000));
const formattedDate = convertedDate.toISOString().split('T')[0];

console.log("{0}  {1}".format("aa", "bb"));