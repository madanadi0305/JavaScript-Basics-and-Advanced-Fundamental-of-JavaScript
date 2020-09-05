function task28(base,perpendicular){
var area_right_triangle=0.5*base*perpendicular;
var side=base;
var area_square=side*side;
var result=area_right_triangle;
if(area_square>area_right_triangle){
    result=area_square;
}
else{
    result=area_right_triangle;
}
return result;
}
module.exports=task28;
