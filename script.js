var curday = function(){
    today = new Date();
    var date = " ";
    var month = " ";
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    if(mm = 1){
        month = "January"
    } else if(mm = 2){
        month = "February"
    } else if(mm = 3){
        month = "March"
    } else if(mm = 4){
        month = "April"
    } else if(mm = 5){
        month = "May"
    } else if(mm = 6){
        month = "June"
    } else if(mm = 7){
        month = "July"
    } else if(mm = 8){
        month = "August"
    } else if(mm = 9){
        month = "September"
    } else if(mm = 10){
        month = "October"
    } else if(mm = 11){
        month = "November"
    } else if(mm = 12){
        month = "December"
    };
    date = month + " " + dd + " " + yyyy; 
    return (date);
};
console.log(curday());
