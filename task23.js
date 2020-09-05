function task23(num1,num2){
    var sum=num1+num2;
    var default_val=80;
    if(sum>=50 && sum<=80){
        default_val=65;
    }
    else{
        default_val=80;
    }
    return defaut_val;
}
module.exports=task23;
