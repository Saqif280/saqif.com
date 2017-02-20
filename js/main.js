// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-63008523-1', 'auto');
ga('send', 'pageview');

$( document ).ready(function() {
	// call onepage scroll
	
	$(".main").onepage_scroll();

  // ANIMATIONS
  var arrowAnDelay = 2500;
  setInterval(function(){
    $('.title-arrow').removeClass('bounce');
    //console.log("remove");
  }, arrowAnDelay);
	setInterval(function(){
    setTimeout(function(){
      $('.title-arrow').addClass('bounce');
      //console.log("add");
    }, 100);
  }, arrowAnDelay);

  //move down page on arrow click
  $(".uk-icon-angle-double-down").click(function(){
    $(".main").moveDown();
  });

  //   $(".main").moveDown();
});