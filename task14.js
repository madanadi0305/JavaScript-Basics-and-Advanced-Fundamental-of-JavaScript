function task14(number){
    var result=0;
    var difference=0;
if(number<13){
difference=13-number;
result=difference;
}
else{
    difference=number-13;
    result=difference*2;
}
var output=result;
return output;
}
module.export=task14;
