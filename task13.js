function task13(year){
    var yes_or_no=0;
    if(year%4==0 && year%100==0){
     yes_or_no=1;
    }
    else if(year%400==0 && year%100==0){
        yes_or_no=1;
    }
else{
    console.log(yes_or_no);
}
return yes_or_no;
}
module.exports=task13;
