function task17(number){
    var check_number_in_range=false;
    if(number<=120 && number>=80)
    {
        check_number_in_range=true;
    }
    else if(number<=420 && number>=380){
        check_number_in_range=true;
    }
    else{
        check_number_in_range=false;
    }
    return check_number_in_range;
}
module.exports=task17;
