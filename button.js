function display(num) {
    if (num == 1)
    {
        return document.getElementById('show').innerHTML = 'showing banana';
    }
    else if (num == 2)
    {
        return document.getElementById('show').innerHTML = 'showing gold';
    }
    else
    {
        return document.getElementById('show').innerHTML = 'showing blue';
    }
}