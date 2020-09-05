function task27(num1,num2,num3){
    var result=40;
    if((num1===num2)&&(num1===num3)&&(num1===num3)){
        result=30;
    }
    else if((num1===num2) || (num2===num3) || (num1===num3)){
        result=20;
    }
    else{
        result=40;
    }
    return result;
}

module.exports=task27;
