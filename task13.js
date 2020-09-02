function task13(year){
    let yes_or_no=1;
    if(year%4===0 || year%100===0){
     //yes_or_no=1;
     //console.log(yes_or_no);
     //return yes_or_no;
    }
    else if(year%400===0 && year%100===0){
       // yes_or_no=1;
       // console.log(yes_or_no);
    }
else{
  yes_or_no=0;
   // console.log(yes_or_no);
    
    return yes_or_no;
}
return yes_or_no;
}
//document.getElementById('para1').innerHTML=task13(1982);
module.exports=task13;
