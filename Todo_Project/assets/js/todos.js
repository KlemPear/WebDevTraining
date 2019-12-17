console.log("Connected!");

// Check off specific Todos by clicking on it
// select the ul that will always be on the page at the begining
// and specify inside on() to listen to li inside the ul
// even if li is created later
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// Click on X to delete Todos
$("ul").on("click", "span", function(event){
    // the next $(this) refers to the span, so we use parent()
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); // this $(this) refers to the li
    });
    event.stopPropagation();
});

// Creation of new Todos
$("input[type='text']").keypress(function(event){
    // check if enter is pressed, key code is 13
    if (event.which === 13) {
        // grabbing newx todo text from input
        var todoText = $(this).val();
        // clear the input content
        $(this).val("");
        // create a new li and add it to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-edit").click(function(){
  $("input[type='text']").fadeToggle();
});
