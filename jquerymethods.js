$("h1").text("New Title through jQuery/JS!")

$('li').html("<a href='https://www.google.com' target=_blank>Click me to go to google.com</a>")

$('img').css("width")
//^enter into console to check current width
"1533px"
//^result

$('img').css("width", "500px")

$('img').attr("src", "https://images.unsplash.com/photo-1524698604136-5a02fb1f7ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80");

$('h1').addClass("correct");

$("h2").click(function(){
	alert("h2 clicked!");
})

$("button").click(function(){
	var text = $(this).text();
	console.log("You Clicked" + text);
});

$("input").keypress(function(event){
	if(event.which === 13){
		alert("You Hit Enter!");
	}
});

