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
        .from($('.section-hero'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2');

		// read in csv
		d3.csv("data/signiture.txt", parseLine, function (error, data) {
			setTimeout(function() {
				plotSigniture(data);
			}, 1000);
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
	var height = $(".section-hero").height();
	var factor = height-(height-document.documentElement.scrollTop)
	$(".first-name").css("margin-top",factor/2);
	$(".intro, .signiture").css("opacity",(height-2*document.documentElement.scrollTop)/(height));
	// $(".bg-wrapper").css("opacity",(10*document.documentElement.scrollTop-height)/(height*2));
})
