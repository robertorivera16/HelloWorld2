$(document).ready(function(){
    $(".say-hi-btn").click(function(){
        var hello = $(".helloworld-text");
        hello.css({
          "color":"white",
          "text-shadow": "2px 2px 40px black"
        });

        hello.animate({
          "font-size": "150px"
        }).fadeOut("slow").fadeIn("slow");


    });
});
