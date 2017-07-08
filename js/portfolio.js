$(document).ready(function() {
	$(".album").on("click", function(e){
		e.preventDefault();
		$(".photos").hide();
		$($(this).attr("href")).show();
		$(".album").parent().removeClass("active-album");
		$(this).parent().addClass("active-album");
	})
});