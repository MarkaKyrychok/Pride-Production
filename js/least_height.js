function setEqualHeight(columns)
{
	var leastcolumn = 9999;
	columns.each(
function()
{
	currentHeight = $(this).find("img").height();
	if(currentHeight < leastcolumn)
	{
		leastcolumn = currentHeight;
	}
}
);
	columns.height(leastcolumn);
	columns.css("overflow", "hidden");
}
$(document).ready(function() {
setEqualHeight($(".two_columns>.wrapper_image"));
});