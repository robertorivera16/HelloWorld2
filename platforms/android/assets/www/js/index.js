

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

  $("#submit-btn").click(function(){
    localforage.length().then(function(length){
      var textInputVal = document.getElementById('number').value;

      var key = length.toString();
      console.log(typeof key);
      console.log(key);



      localforage.setItem(key, textInputVal).then(function(value1){
        alert("Value Stored: " + value1);
      });
    });
  });

  $("#clear-btn").click(function(){
    localforage.clear().then(function(){
      alert("Data Cleared");
    });
  });

  $("#showData-btn").click(function(){
    localforage.length().then(function(length) {
      // Loop over each of the items.
      for (var i = 0; i < length; i++) {
        // Get the key.
        localforage.key(i).then(function(key) {
          // Retrieve the data.

          localforage.getItem(key).then(function(value){
            alert(value);
          });
        });
      }
    });
  });


});
