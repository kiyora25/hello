$(document).ready(function(){

$('.submenu').hide();
$('nav>ul>li').hover(
   function(){ 
    $('.submenu').stop().slideDown(250);
    $('header').addClass('active');
}
);

$('nav>ul>li').mouseleave(
    function(){
    $('.submenu').stop().slideUp(250);    
    $('header').removeClass('active');


});

// sec01

// 스크롤이벤트

$(window).scroll(function(){

// let value = $(this).scrollTop();

var scrollTop = $(this).scrollTop();
var circle = $('circle_1');

if (scrollTop >= 700) {
  circle.animate({
    top: '100px',
    left: '200px'
  }, 1000, function() {
    circle.animate({
      top: '50px',
      left: '50px'
    }, 1000);
  });
} else {
  circle.animate({
    top: '200px',
    left: '200px'
  }, 1000);
}
});


// });









// /sec01



// sec02 

var slides = document.querySelector('.slides'),
slide = document.querySelectorAll('.slides li'),
currentIdx = 0,
slideCount = slide.length,
slideWidth = 440,
slideMargin = 40,
prevBtn = document.querySelector('.prev'),
nextBtn = document.querySelector('.next');

slides.style.width =
(slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
  slides.style.left = -num * 363 + 'px';
  currentIdx = num;
}

nextBtn.addEventListener('click', function () {
  if( currentIdx < slideCount - 3){
    moveSlide(currentIdx + 1);
  }else{
    moveSlide(0);
  }   
});

prevBtn.addEventListener('click', function () {
  if( currentIdx > 0){
    moveSlide(currentIdx - 1);
  }else{
    moveSlide(slideCount - 3);
  }   
});

// /sec02 

});