(function ($) {
	$(document).ready(function() {
		// Mobile Menu
		$('#menu-push').toggle(function(){
			$('#block-om-maximenu-om-maximenu-1').slideDown(200);
		}, function(){
			$('#block-om-maximenu-om-maximenu-1').slideUp(200);
		});
	});
})(jQuery);
