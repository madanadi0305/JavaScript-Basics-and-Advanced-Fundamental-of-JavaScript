function task24(){
    var direction=null;
    var direction_integer=null;
    switch(direction_integer){
      case 1:
      direction='East';
      break;
      case 2:
      direction='West';
      break;
      case 3:
      direction='North';
      break;
      case 4:
      direction='South';
      break;
      default:
      direction='invalid';
    }
    return direction;
}
module.exports=task24;
