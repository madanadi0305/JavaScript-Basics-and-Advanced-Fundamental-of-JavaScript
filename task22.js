function task22(number1,number2,number3){
    var check_equality=false;
    var check_sign=false;
    var check_equality_final=false;
    if((number1>0) && (number2>0) && (number3>0)){
        check_sign=true;
     if((number1%10===number2%10)&&(number1%10===number3%10)&&(number2%10===number3%10) ){
       check_equality=true;
     }
     else{
         check_equality=false;
     }
     check_equality_final=check_equality;
    }
    else{
    check_sign=false;
    }
    return check_equality_final;
}
module.exports=task22;
