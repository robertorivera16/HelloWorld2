
$(document).ready(function(){
  var nA = localforage.createInstance({
    name: "number array"
  });

  var contactData = localforage.createInstance({
    name: "Contact Data"
  });


  $(".say-hi-btn").click(function(){
    var hello = $(".helloworld-text");
    hello.css({
      "color":"white",
      "text-shadow": "2px 2px 40px black"
    });

    hello.animate({
      "font-size": "120px"
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

  $("#saveNum-btn").click(function(){
    nA.length().then(function(length){
      var textInputVal = document.getElementById('number').value;

      var key = length.toString();

      //For testing purposes
      console.log(typeof key);
      console.log(key);


      if(textInputVal != ""){
        nA.setItem(key, textInputVal).then(function(value1){
          alert("Value Stored: " + value1);
        });
      }else alert("Empty Input. Write a number");
    });
  });

  $("#clear-btn").click(function(){
    nA.clear().then(function(){
      alert("Data Cleared");
    });
  });

  $("#showData-btn").click(function(){
    nA.length().then(function(length) {
      // Loop over each of the items.
      if(length != 0){
        for (var i = 0; i < length; i++) {
          // Get the key.
          nA.key(i).then(function(key) {
            // Retrieve the data.

            nA.getItem(key).then(function(value){
              alert(value);
            });
          });
        }
      }else alert("No Data to show.");
    });
  });

  $("#directory-btn").click(function(){
    var JSONService = 'http://beta.json-generator.com/api/json/get/41Bp9XdmM';
    contactData.length().then(function(length){
      if (length === 0) {
        $.getJSON(JSONService, function(data) {
          alert("success");
        })

        .done(function( data ) {
          $.each( data.contacts, function( i, item ) {
            contactData.setItem(item.name, item.phone);
          });
        });
      }else{
        alert("Data Fetched");
      }
    });

  });


});
