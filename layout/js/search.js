$( function() {
    var availableTags = [
     /* "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "jquery",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "hakim"
             "layout/images/b1.jpg",
            "Flowers for graduaition",
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
         
            "layout/images/b2.jpg",
           "Flowers for weddings",
           "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        
            "layout/images/b3.jpg",
          "Boquate",
           "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
        

    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  */



//// filter 

$(document).ready(function(){
  $("#tags").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#flowers div h3 ").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});