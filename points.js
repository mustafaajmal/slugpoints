const f = require('fs')
const readline = require('readline')
var date_file = 'quarters.txt'
var r = readline.createInterface({
    input : f.createReadStream(date_file)
})

r.on('line', function (text) {
    console.log(text);
})
