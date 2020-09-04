function task16(number1,number2){
var check_number=false;
var sum=number1+number2;
if(number1===50 ||number2==50||sum===50){
    check_number=true;
}
else{
    check_number=false;
}
return check_number;

}
module.exports=task16;
