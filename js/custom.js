$(function(){
	'use strict';
		//scroll-spy & Smooth-scrolling
		var scrollLink = $('.scroll-link');
			$(scrollLink).on('click',function(event){
				event.preventDefault();
				$('html,body').animate({scrollTop: $(this.hash).offset().top-80},1000);
			});
			$(window).on('scroll',function(){
				var scrollTop = $(this).scrollTop();
				scrollLink.each(function(){
				var sectionhead = $(this.hash).offset().top-85;
				if(scrollTop >= sectionhead) {
					$(this).parent().addClass('active');
					$(this).parent().siblings().removeClass('active');
				}
				});
			});
	//this is for back-to-top and- sticky menu
	$('.back-to-top').on('click',function(){
		$('html,body').animate({scrollTop:0},1000);
	});

	$(window).on('scroll',function(){
		var btt= $(this).scrollTop();
		if(btt>1){
			$('.navbar').addClass('sticky-menu');
		}
		else{
			$('.navbar').removeClass('sticky-menu');
		}
		if(btt>350){
			$('.back-to-top').fadeIn(300);
		}
		else{
			$('.back-to-top').fadeOut(300);
		}
	})
    //banner-slider
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
        speed:1500,
        fade:true,
      });

      //typed-js
      $(".typed").typed({
		strings: [ "Designers.","Developers.", "Coders.","Future."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 800,
		// loop
		loop: true,
		// false = infinite
		loopCount: 0,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

	//counter-up
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});

	//progress-bar
	new WOW().init();

	//Feedback-slider
	$('.main-feedback-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.client-main',
		speed:1000,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 1,
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	  });
	  $('.client-main').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.main-feedback-slider',
		dots: true,
		autoplay:true,
		arrows:false,
		focusOnSelect: true,
		centerMode:true,
		centerPadding:'50px',
		speed:1000,
		infinite:true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 3,
				centerPadding: '40px',
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
				centerPadding: '40px',
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				fade:true,
				slidesToShow: 1,
				centerPadding: '40px',
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				fade:true,
				slidesToShow: 1,
				centerPadding: '40px',
			  }
			}
		  ]
	  });

	  //venobox
	  $(document).ready(function(){
		$('.venobox').venobox(); 
		});
	  //team-slider
	  $('.team-all-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
		pauseOnHover:true,
		infinite:true,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
			  }
			}
		  ]
	  });
	  
	//brand-slider
	$('.main-client-brand').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
		pauseOnHover:true,
		infinite:true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 3,
			  }
			}
		  ]
	  });

	  //preloader

      $(window).on('load',function(){
        $('.preloader').delay(500).fadeOut(300);
      });

});

//form-validation
var yourname= document.getElementById('username');
var fname_err=document.getElementById('err-name');
var label = document.getElementById('name_lab');

var gmail= document.getElementById('y_gmail');
var g_err= document.getElementById('err-gmail');
var gm_label= document.getElementById('gmail');
var regax= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var comment = document.getElementById('t-com');
var cmmnt_err = document.getElementById('err-cmmnt');

function signin(){
	if(yourname.value==''){
		fname_err.innerHTML='please enter your name';
		yourname.style.borderBottom='1px solid red';
		label.style.top='-17px';
		yourname.focus();
		return false;	
	}
	else if(gmail.value=='' || !regax.test(gmail.value)){
		g_err.innerHTML='please enter your valid gmail';
		gmail.style.borderBottom='1px solid red';
		gm_label.style.top='-17px';
		gmail.focus();
		return false;	
	}
	else if(comment.value==''){
		cmmnt_err.innerHTML='please enter your comment';
		comment.style.border='1px solid red';
		comment.focus();
		return false;	
	}
}

function valid(){
	if(yourname.value!=''){
		fname_err.innerHTML='';
		yourname.style.borderBottom='1px solid #FF8D40';
		label.style.top='-17px';
		label.style.color='#FF8D40';
		label.style.fontSize='14px';
	}
	if(gmail.value!=''){
		g_err.innerHTML='';
		gmail.style.borderBottom='1px solid #FF8D40';
		gm_label.style.top='-17px';
		gm_label.style.color='#FF8D40';
		gm_label.style.fontSize='14px';
	}
	if(comment.value!=''){
		cmmnt_err.innerHTML='';
		comment.style.border='1px solid #FF8D40';
		comment.focus();
	}
}

yourname.addEventListener('blur',valid);
gmail.addEventListener('blur',valid);
comment.addEventListener('blur',valid);