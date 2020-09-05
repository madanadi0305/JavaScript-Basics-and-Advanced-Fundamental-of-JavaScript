function task21(num1,num2,num3){
var greatest=num3;
if(num1>greatest && (num1>num2)){
  greatest=num1;
}
else if((num2>greatest)&& (num2>num1)){
    greatest=num2;
}
else{
    greatest=num3;
}
return greatest;
}


module.exports=task21;
