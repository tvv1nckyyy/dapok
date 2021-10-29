var $swipedir;
var $startX;
var $startY;
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
  heleme.scrollIntoView(
      {
       behavior:"smooth",
       block:"end",
       inline:"nearest"
      });
}
//
function swipe_right() {
  let ha = 1;
}
//
function swipe_left() {
  let ha = 1;
}
//
function swipe_up() {
  alert("swipe_up");
}
//
function swipe_down() {
  alert("swipe_down");
  let cards = document.querySelectorAll(".card");
  bunulu(cards[window._kura]);
  if(window._kura = cards.length-1) {
    window._kura = 0;
  } else {
     _kura++;
  }
}
//
function touch_start($e) {
  let $touchobj = $e.changedTouches[0];
  $swipedir = 'none';
  $startX = $touchobj.pageX;
  $startY = $touchobj.pageY;
  $startTime = new Date().getTime();
  $e.preventDefault();
}
function touch_move($e) {
  $e.preventDefault();
}
function touch_end($e) {
  var $touchobj = $e.changedTouches[0];
  $distX = $touchobj.pageX - $startX;
  $distY = $touchobj.pageY - $startY;
  if(
    (Math.abs($distX) >= $threshold) && 
    (Math.abs($distY) <= $restraint)
  ) {
    if($distX < 0) {
      swipe_right();
      $swipedir = "right";
    } else {
      swipe_left();
      $swipedir = "left";
    }
  } else if(
    (Math.abs($distY) >= $threshold) && 
    (Math.abs($distX) <= $restraint)
  ) {
    if ($distX < 0) {
      swipe_up();
      $swipedir = "up";
    } else {
      swipe_down();
      $swipedir = "down";
    }
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
