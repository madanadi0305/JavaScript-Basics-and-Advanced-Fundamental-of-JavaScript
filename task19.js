function task19(number){
    var check_multiple_of_3_or_7=false;
    if(number%3==0||number%7==0){
        check_multiple_of_3_or_7=true;
    }
    else{
        check_multiple_of_3_or_7=false;
    }
    return check_multiple_of_3_or_7;
}
module.exports=task19;
