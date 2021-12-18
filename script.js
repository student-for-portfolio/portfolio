$(function(){
  const mediaQueryList = window.matchMedia("(max-width:520px)");
  const listener = (event) => {
    if (event.matches) {
      $('.slide').removeClass('active');
      $('.slide-second').removeClass('sensitive');
      $('.slide-first').removeClass('relative');
      $('.change-btn').hide();
      $('.hell-btn').hide();
      $('.heaven-btn').hide();
      $('.next-btn').show();
      $('.next-first-btn').show();
      $('.next-second-btn').show();
      $('.god').prepend('<li class="slide active device"><img src="img/IMG_2747.jpg"></li>');
      $('.revenge').prepend('<li class="slide-second sensitive game"><img src="img/IMG_2883.jpg"></li>');
      $('.beginning').prepend('<li class="slide-first relative power"><img src="img/IMG_3089.jpg"></li>');
    } else {
      $('.slide').removeClass('active');
      $('.slide-second').removeClass('sensitive');
      $('.slide-first').removeClass('relative');
      $('.change-btn').hide();
      $('.hell-btn').hide();
      $('.heaven-btn').hide();
      $('.next-btn').show();
      $('.next-first-btn').show();
      $('.next-second-btn').show();
      $('.positive').addClass('active');
      $('.tomato').addClass('sensitive');
      $('.beef').addClass('relative');
      $('.device').remove();
      $('.game').remove();
      $('.power').remove();
    }
  };
  mediaQueryList.addEventListener("change", listener);
  listener(mediaQueryList)
  function toggleChangeBtn() {
  var slideIndex = $('.slide').index($('.active'));
  $('.change-btn').show();
  if (slideIndex == 0) {
    $('.prev-btn').hide();
  } else if (slideIndex == $('.slide').length-1) {
    $('.next-btn').hide();
  }
}
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });
function ChangeBtn() {
var slideIndex = $('.slide-second').index($('.sensitive'));
$('.hell-btn').show();
if (slideIndex == 0) {
  $('.prev-second-btn').hide();
} else if (slideIndex == $('.slide-second').length-1) {
  $('.next-second-btn').hide();
}
}
$('.hell-btn').click(function() {
  var $displaySlide = $('.sensitive');
  $displaySlide.removeClass('sensitive');
  if ($(this).hasClass('next-second-btn')) {
    $displaySlide.next().addClass('sensitive');
  } else {
    $displaySlide.prev().addClass('sensitive');
  }
  ChangeBtn();
});
function Btn() {
var slideIndex = $('.slide-first').index($('.relative'));
$('.heaven-btn').show();
if (slideIndex == 0) {
  $('.prev-first-btn').hide();
} else if (slideIndex == $('.slide-first').length-1) {
  $('.next-first-btn').hide();
}
}
$('.heaven-btn').click(function() {
  var $displaySlide = $('.relative');
  $displaySlide.removeClass('relative');
  if ($(this).hasClass('next-first-btn')) {
    $displaySlide.next().addClass('relative');
  } else {
    $displaySlide.prev().addClass('relative');
  }
  Btn();
});
});
