function task23(num1,num2){
    var sum=num1+num2;
    var default_value=80;
    if(sum>=50 && sum<=80){
        default_value=65;
    }
    else{
        default_value=80;
    }
    return defaut_value;
}
module.exports=task23;
