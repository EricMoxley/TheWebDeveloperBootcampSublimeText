// Comment : Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on "ban sign" (span) to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//allows you to click enter (13) to execute event
$("input[type='text']").keypress(function(event){
	if(event.which === 13){

//grabbing new todo text from input
		var todoText = $(this).val();
		//remove everything from input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-ban'></i></span> " + todoText + "</li>")
	}
})

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle()
})