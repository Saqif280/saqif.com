// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-63008523-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
	// ----------------------------------------
	// EVENT LISTENERS

	// slide to id
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;

		// add/remove active class
		$('a[href="'+$(this).attr("href")+'"]').addClass('active');
		$('a[href!="'+$(this).attr("href")+'"]').removeClass('active');

		$("body, html").animate({
			scrollTop: position
		}, 1000);
	});


	// preloader
	// https://ihatetomatoes.net/a-simple-one-page-template-with-a-preloading-screen/

	// number of loaded images for preloader progress
	var loadedCount = 0; // current number of images loaded
	var imagesToLoad = 1; // number of images to load
	var loadingProgress = 0; // timeline progress - starts at 0

	$('.portrait').imagesLoaded({
		background: true
	}).progress( function( instance, image ) {
		loadProgress();
	});

	function loadProgress(imgLoad, image)
	{
		//one more image has been loaded
		loadedCount++;

		loadingProgress = (loadedCount/imagesToLoad);

		// GSAP tween of our progress bar timeline
		TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});

	}

	//progress timeline
	var progressTl = new TimelineMax({
		paused: true,
		onUpdate: progressUpdate,
		onComplete: loadComplete
	});

	progressTl
	//tween the progress bar width
	.to($('.preloader-progress span'), 1, {width:100, ease:Linear.easeNone});

	//as the progress bar width updates and grows we put the percentage loaded in the screen
	function progressUpdate()
	{
		//the percentage loaded based on the tween's progress
		loadingProgress = Math.round(progressTl.progress() * 100);

		//we put the percentage in the screen
		$(".preloader-percentage").text(loadingProgress + '%');

	}

	function loadComplete() {

		// preloader out
		var preloaderOutTl = new TimelineMax();

		preloaderOutTl
		.to($('.preloader-progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn})
		.to($('.preloader-percentage'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
		.set($('body'), {className: '-=is-loading'})
		.set($('.section-hero'), {className: '+=is-loaded'})
		.to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
		.set($('#preloader'), {className: '+=is-hidden'})
		.from($('.section-hero'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
		.from($('.title'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.8')
		.from($('.bio'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.5')
		.from($('.topnav'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.5')
		.from($('.leftnav'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.5');

		// read in csv
		d3.csv("data/signiture.txt", parseLine, function (error, data) {
			setTimeout(function() {
				plotSigniture(data);
			}, 1500);
		});

		return preloaderOutTl;
	}


	// ----------------------------------------
	// SIGNITURE SCRIPTS

	// sig svg dimensions
	var width = 350;
	var height = width*0.65;
	var padding = 10;

	// create signiture svg
	var svg = d3.select("#signiture").append("svg")
	.attr("height", height)
	.attr("width", width);

	function plotSigniture(data) {
		// calculate bounds
		var xMax = d3.max(data.map(function (d) { return d.x; }));
		var xMin = d3.min(data.map(function (d) { return d.x; }));
		var yMax = d3.max(data.map(function (d) { return d.y; }));
		var yMin = d3.min(data.map(function (d) { return d.y; }));

		// define scales
		var xScale = d3.scaleLinear().domain([xMin, xMax]).range([padding, width-padding]);
		var yScale = d3.scaleLinear().domain([yMax, yMin]).range([height-padding, padding]);

		// path function
		var pathGenerator = d3.line()
		.curve(d3.curveBasis)
		.x(function (d) { return xScale(d.x); })
		.y(function (d) { return yScale(d.y); });

		// create path
		svg.append("path")
		.attr("class", "signiture")
		.attr("d",pathGenerator(data));
	}

	// parse data
	function parseLine(row) {
		row.x = Number(row.x);
		row.y = Number(row.y);
		return row;
	}



});


// when scroll
$(window).scroll(function(element){
	// parallax hero
	var scrollTop = $(window).scrollTop();
	var projectOffset = $('.section-projects').offset().top;
	var footerOffset = $('.section-footer').offset().top;
	var distanceProj = (projectOffset - scrollTop);
	var wHeight = $(window).height();
	var height = $(".section-hero").height();
	var factor = height-(height-scrollTop)
	$(".first-name").css("margin-top",factor/2);
	$(".intro, .signiture").css("opacity",(height-2*scrollTop)/(height));
	$(".section-leftnav2").css("opacity",5*(1.2*scrollTop-height)/(height));

	// update active links
	if(isScrolledIntoView(document.getElementById('about'))){
		$('a[href="#about"]').addClass('active');
		$('a[href!="#about"]').removeClass('active');
	}
	if(isScrolledIntoView(document.getElementById('portfolio'))){
		$('a[href="#portfolio"]').addClass('active');
		$('a[href!="#portfolio"]').removeClass('active');
	}
	if(isScrolledIntoView(document.getElementById('contact'))){
		$('a[href="#contact"]').addClass('active');
		$('a[href!="#contact"]').removeClass('active');
	}

	// scrollfire for projects
	if(isScrolledIntoView(document.getElementById('pc-sparkresume'))){
		setTimeout(function(){
			$('#pc-sparkresume').css("opacity",1);
		},0);
	}
	if(isScrolledIntoView(document.getElementById('pc-decompressay'))){
		setTimeout(function(){
			$('#pc-decompressay').css("opacity",1);
		},0);
	}
	// if(isScrolledIntoView(document.getElementById('pc-phonology'))){
	// 	setTimeout(function(){
	// 		$('#pc-phonology').css("opacity",1);
	// 	},0);
	// }
	if(isScrolledIntoView(document.getElementById('pc-spoilerblock'))){
		setTimeout(function(){
			$('#pc-spoilerblock').css("opacity",1);
		},0);
	}
	if(isScrolledIntoView(document.getElementById('pc-mosquebuddy'))){
		setTimeout(function(){
			$('#pc-mosquebuddy').css("opacity",1);
		},0);
	}
	if(isScrolledIntoView(document.getElementsByTagName('iframe')[0])){
		setTimeout(function(){
			$('iframe').addClass("slide");
		},0);
	}

	// scrollfire section colors
	if(isScrolledIntoView(document.getElementById('about'))){
		setTimeout(function(){
			// nothing
		},0);
	}
	if(isScrolledIntoView(document.getElementById('portfolio'))){
		setTimeout(function(){
			$('.section-projects').css('background-color','#F9FAFC');
			$('.section-resume').css('opacity',1);
			$('.section-footer').css('background-color','#F9FAFC');
			$('.leftnav2 li a').css('color','#000');
		},0);
	}
	if(isScrolledIntoView(document.getElementById('contact'))){
		setTimeout(function(){
			$('.section-projects').css('background-color','#009EEB');
			$('.section-resume').css('opacity',0);
			$('.section-footer').css('background-color','#009EEB');
			$('.leftnav2 li a').css('color','#fff');
			$('#pc-decompressay').css("opacity",0);
			$('#pc-phonology').css("opacity",0);
			$('#pc-spoilerblock').css("opacity",0);
			$('#pc-mosquebuddy').css("opacity",0);
			// $('#pc-sparkresume').css("opacity",0);
		},0);
	}

})

function isScrolledIntoView(el) {
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

	// Only completely visible elements return true:
	// var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// Partially visible elements return true:
	var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}
