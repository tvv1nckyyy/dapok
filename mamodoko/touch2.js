var $swipedir;
var $startX;
var $startY;
var $startclX;
var $startclY;
var $distX;
var $distY;
var $threshold = 100;
var $restraint = 100;
var $allowedTime = 300;
var $elapsedTime;
var $startTime;
//
var _kura = 1;
//
function bunulu(heleme) {
  alert("bunulu");
  alert(heleme.classList);
  heleme.scrollIntoView(
      {
       behavior:"smooth",
       block:"end",
       inline:"end"
      });
}
//
function vunulu() {
  //alert("vunulu");
  let cards = document.querySelectorAll(".card");
  let clh = cards[_kura].offsetTop;
  //let _clh = _card.clientHeight;
  //alert(_clh);
  let hofa = clh;
  alert(hofa);
  document.body.scrollTop = hofa;
  //window.scrollBy(0,_clh);
}
//
function swipe_right() {
  let ha = 1;
  alert("swipe_right");
}
//
function swipe_left() {
  let ha = 1;
  alert("swipe_left");
}
//
function swipe_up() {
  alert("swipe_up");
  alert(window._kura);
  let cards = document.querySelectorAll(".card");
  alert(cards.length);
  //bunulu(cards[window._kura]);
  vunulu();
  if(window._kura == cards.length-1) {
    window._kura = 0;
  } else {
     window._kura++;
  }
}
//
function swipe_down() {
  alert("swipe_down");
  
}
//
function touch_start($e) {
  let $touchobj = $e.changedTouches[0];
  $swipedir = 'none';
  $startX = $touchobj.pageX;
  $startY = $touchobj.pageY;
  $startclX = $touchobj.clientX;
  $startclY = $touchobj.clientY;
  $startTime = new Date().getTime();
  $e.preventDefault();
}
function touch_move($e) {
  $e.preventDefault();
}
function touch_end($e) {
  $e.preventDefault();
  var $touchobj = $e.changedTouches[0];
  $endX = $touchobj.pageX;
  $endY = $touchobj.pageY;
  $endclX = $touchobj.clientX;
  $endclY = $touchobj.clientY;
  $distX = $endclX - $startclX;
  $distY = $endclY - $startclY;
  //
  //alert($startX+","+$startY);
  //alert($startclX+","+$startclY);
  //alert($endX+","+$endY);
  //alert($endclX+","+$endclY);
  //
  /*
  if(
    (Math.abs($distX) >= $threshold) && 
    (Math.abs($distY) <= $restraint)
  ) {
  */
  if(Math.abs($distX) > Math.abs($distY)) {
    if($distX < 0) {
      swipe_right();
      $swipedir = "right";
    } else {
      swipe_left();
      $swipedir = "left";
    }
  } else {
  /*
  } else if(
    (Math.abs($distY) >= $threshold) && 
    (Math.abs($distX) <= $restraint)
  ) {
  */
    if ($distY < 0) {
      swipe_up();
      $swipedir = "up";
    } else {
      swipe_down();
      $swipedir = "down";
    }
  //}
  }
}
//
function touch() {
  document.addEventListener("touchstart", touch_start);
  document.addEventListener("touchmove", touch_move);
  document.addEventListener("touchend", touch_end);
}
//
document.addEventListener("DOMContentLoaded",touch);
