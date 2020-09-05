function task24(direction_integer){
    var direction="Wrong Input";
    //var direction_integer=1;
    switch(direction_integer){
      case 1:
      direction="East";
      break;
      case 2:
      direction="West";
      break;
      case 3:
      direction="North";
      case 4:
      direction="South";
      break;
      default:
      direction="Wrong Input";
    }
    return direction;
}
module.exports=task24;
