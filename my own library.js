function isTouching(oo,io){
if (oo.x - io.x < io.width/2 + oo.width/2
  && io.x - oo.x < io.width/2 + oo.width/2
  && oo.y - io.y < io.height/2 + oo.height/2
  && io.y - oo.y < io.height/2 + oo.height/2) 
 { return true
}
else{
  return false
}
}