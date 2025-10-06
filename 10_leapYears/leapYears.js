const leapYears = function(year) {
    if(year / 4 % 0 && year / 100 % 0 && year / 400 % 0){
        return true;
    }

    if(year % 4 == 0){
        if(year % 400  == 0){
            return true;
        }
        else if(year % 100 == 0 && year % 400 != 0){
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

//als jaar gedeeld door 4 100 en 400 - leapYear
