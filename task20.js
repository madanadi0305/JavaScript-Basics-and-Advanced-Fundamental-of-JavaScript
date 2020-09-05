function task20(num1,num2,num3){
    var check=false;
    if((num1<=99 && num1>=50) || (num2<=99 && num2>=50) ||(num3<=99 && num3>=50)){
      check=true;
    }
    else{
        check=false;
    }
    return check;
}

module.exports=task20;
