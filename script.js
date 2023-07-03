var n = 0;
var m = 0;
var x = 0;
while (n<80) {
  n++;
  var w = Math.floor((Math.random()*140)+1);
  var h = Math.floor((Math.random()*300)+1);
  var sx = Math.floor((Math.random()*100)+1);
  var sy = Math.floor((Math.random()*100)+1);
  var t = (Math.random()*10)+1;
  document.body.insertAdjacentHTML('beforeend', '<div class="space" style="width:'+w+'px;height:'+h+'px;left:'+sx+'%;top:'+sy+'%;animation-duration:'+t+'s;"></div>');
}
while (m<80) {
  m++;
  var w = Math.floor((Math.random()*140)+1);
  var h = Math.floor((Math.random()*300)+1);
  var sx = Math.floor((Math.random()*100)+1);
  var sy = Math.floor((Math.random()*100)+1);
  var t = (Math.random()*10)+1;
  document.body.insertAdjacentHTML('beforeend', '<div class="space purple" style="width:'+w+'px;height:'+h+'px;left:'+sx+'%;top:'+sy+'%;animation-duration:'+t+'s;"></div>');
}
