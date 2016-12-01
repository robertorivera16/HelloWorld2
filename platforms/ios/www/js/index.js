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

    $(".back-btn").click(function(){
      var hello = $(".helloworld-text");
      hello.css({
        "color":"black",
        "text-shadow": "1px 1px 10px white"
      });
      hello.animate({
        "font-size": "8px"
      });
    });
});
