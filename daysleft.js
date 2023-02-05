
var ending_dates = ['03/24/23',
                    '06/15/23',
                    '12/15/23',
                    '03/22/24',
                    '06/13/24',
                    '12/13/24',
                    '03/14/25',
                    '06/12/25',
                    '12/12/25',
                    '03/20/26',
                    '06/11/26'];

var starting_dates = ['01/06/23',
                      '04/03/23',
                      '09/23/23',
                      '01/05/24',
                      '04/01/24',
                      '09/21/24',
                      '01/03/25',
                      '03/31/25',
                      '09/20/25',
                      '01/05/26', 
                      '03/30/26'];

function makeDates(list) {
    var date_list = [];
    for (let i = 0; i < list.length; i++) {
        date_list.push(new Date(list[i]))
    };
    return date_list;
}

var daysleft = function (starts, ends) {
    const date = new Date();
    curr_start = starts[0];
    curr_end = ends[0];
    for (let i = 0; starts[i] < date; i++) {
        curr_start = starts[i];
        curr_end = ends[i];
    }
    const diffTime = Math.abs(curr_end - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (0 < diffDays) {
        return diffDays;
    } else {
        return 0;
    }
}

document.write(daysleft(makeDates(starting_dates), makeDates(ending_dates))); 