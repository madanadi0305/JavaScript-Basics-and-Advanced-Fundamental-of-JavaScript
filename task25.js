function task25(num1,num2,choice){
    var output=null;
    switch(choice){
      case 1:
      output=num1+num2;
      break;
      case 2:
      output=num1-num2;
      break;
      case 3:
      output=num1*num2;
      break;
      case 4:
      output=num1/num2;
      break;
      default:
      output="Wrong Choice";
    }
    return output;
}
module.exports=task25;
