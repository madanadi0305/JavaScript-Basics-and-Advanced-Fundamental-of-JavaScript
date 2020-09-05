function task18(number1,number2){
    var check_condition=false;
    if((number1>0 && number2<0) ||(number1<0 && number2>0))
    {
        check_condition=true;
    }
    else{
        check_condition=false;
    }
    return check_condition;
}
module.exports=task18;
