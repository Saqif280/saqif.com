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

	// read in csv
	d3.csv("data/signiture.txt", parseLine, function (error, data) {
		setTimeout(function() {
			plotSigniture(data);
		}, 0);
	});
});


// // when scroll
// $(window).scroll(function(element){
// 	var height = $(".section-hero").height();
// 	var factor = height-(height-document.documentElement.scrollTop)
// 	$(".first-name").css("margin-top",factor/2);
// })