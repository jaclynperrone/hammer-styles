//= require jquery  
//= require bootstrap-sprockets
//= require_tree .

$(function(){
	var navigation = $('.navigation-ul');
	var navigationTop = navigation.offset().top;

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  console.log('scroll='+scroll+'top='+navigationTop);
	  if (scroll >= navigationTop) {
	    navigation.addClass('fixed-navigation');
	  } else {
	    navigation.removeClass('fixed-navigation');
	  }
	});
});