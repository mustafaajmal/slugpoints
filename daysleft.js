var daysleft = function (starts, ends) {
    const date = new Date();
    curr_start = starts[0];
    curr_end = ends[0];
    for (let i = 0; starts[i] < date; i++) {
        curr_start = starts[i];
        curr_end = ends[i];
    }
    const diffTime = Math.abs(curr_end - date);
    const diffDays = Math.ceil(diffTime / (100 * 60 * 60 * 24));
    if (0 < diffDays) {
        return diffDays;
    } else {
        return 0;
    }
}