function task26(num1,num2){
   var sum=num1+num2;
   var result=false;
    if(num1===8 && num2===8){
        result=true;
    }
    else if(sum===8){
     result=true;
    }
    else{
        result=false;
    }
}
var output=task26(3,5);
module.exports=task26;
