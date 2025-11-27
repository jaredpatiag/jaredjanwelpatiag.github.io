$(document).ready( function() {

	// Logo
	var $logo 	= $('#logo');
    var $hellologo = $('#helloworld');
	 if (location.href.indexOf("#") != -1) {
        if(location.href.substr(location.href.indexOf("#"))!='#about'){
        	$logo.show();
        }
        else{
            $hellologo.show();
        }
    }
    
	// Show logo 
	$('#tab-container .tab a').click(function() {
	  
      $logo.slideDown('slow');
      $hellologo.slideUp('slow');

	});
	// Hide logo
	$('#tab-about').click(function() {
	  $logo.slideUp('slow');
      $hellologo.slideDown('slow');
	});	
function animMeter(){
    $(".meter > span").each(function() {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1200);
            });
}
animMeter();

      $('#tab-container').easytabs({
        animate			: true,
        updateHash		: true,
        transitionIn	: 'slideDown',
        transitionOut	: 'slideUp',
        animationSpeed	: 800,
        tabActiveClass	: 'active'}).bind('easytabs:midTransition', function(event, $clicked, $targetPanel){
            if($targetPanel.selector=='#family'){
                    animMeter();
            }
        });
    });

// Tab navigation function
var tabOrder = ['about', 'education', 'achievements', 'family', 'batchmates'];

function navigateTab(direction) {
    var currentHash = window.location.hash.replace('#', '') || 'about';
    var currentIndex = tabOrder.indexOf(currentHash);
    
    if (currentIndex === -1) currentIndex = 0;
    
    var newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % tabOrder.length;
    } else {
        newIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length;
    }
    
    var newTab = tabOrder[newIndex];
    
    // Trigger click on the corresponding tab
    $('.etabs .tab a[href="#' + newTab + '"]').click();
}
