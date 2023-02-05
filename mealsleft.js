
//  expected inputs:
//      plan: "Banana", "Gold", "Blue"
//      daysleft: integer
var mealsleft = function (plan, daysleft) {
    const date = new Date();
    var isWeekend = (date.getDay() % 6 == 0);
    meals = daysleft;
    weeksleft = Math.floor(daysleft / 7);
    if (plan != 'Banana') {
        meals = meals - weeksleft;
        if (plan != 'Gold') {
            meals = meals - weeksleft;
        }
    }

    return (mealsleft * 3);
}