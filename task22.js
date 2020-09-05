function task22(num1,num2,num3){
    var check_equality=false;
    var check_positive_or_negative=false;
if(num1>0 && num2>0 && num3>0){
    check_positive_or_negative=true;
    last_digit1=num1%10;
    last_digit2=num2%10;
    last_digit3=num3%10;
    if(last_digit1===last_digit2===last_digit3){
      check_equality=true;
    }
    else{
        check_equality=false;
    }
}
else{
    check_positive_or_negative=false;
}
return check_equality;
return check_positive_or_negative;
}
module.exports=task22;
