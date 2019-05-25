let money = prompt('ur budjet for month?', '');
let time = prompt('input date in format "YYY-MM-DD" ');
let costsRequired = prompt('input required costs article for this month');
let howMuch = prompt('how much?');


appData = {
    budjet: money,
    timeData: time,
    expenses: {
        costsRequired: costsRequired
    },
    optionalExpenses: {},
    income: [],
    saving: false

}

let budjetPerDay = alert('Your Budjet ' + money / 30);