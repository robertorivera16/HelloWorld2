
$(document).ready(function(){
  //Two Local Forage instances, one for the Local Input Page -- nA
  //the other for the Phone Directory Page -- contactData
  var nA = localforage.createInstance({
    name: "number array"
  });

  var contactData = localforage.createInstance({
    name: "Contact Data"
  });

  //Boolean variable to determine if the Contact Data (Name & Phone-Number), that is retrieved from an
  //internet page, is added or not. Used in $("#displayContactInfo-btn").click(...)
  var dataAdded = false;

  //$(...) ---> JQuery

  //When the button with class say-hi-btn is pressed
  //the text with class helloworld-text is modified.
  //Certain attributes like color and text-shadow is added to it.
  //Then the JQuery function animate is used.
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

  //Returns the Hello World text to its initial style.
  $(".hello-reset-btn").click(function(){
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
    var JSONService = 'http://beta.json-generator.com/api/json/get/EJz5aVtQM';

    contactData.length().then(function(length){
      if (length === 0) {
        $.getJSON(JSONService, function(data) {
          alert("Contact Information Recieved");
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

  $("#displayContactInfo-btn").click(function(){
    if (!dataAdded) {


      contactData.length().then(function(length) {
        // Loop over each of the items.
        if(length != 0){
          for (var i = 0; i < length; i++) {
            // Get the key.
            contactData.key(i).then(function(key) {
              // Retrieve the data.
              contactData.getItem(key).then(function(value){
                $( "<li><div class='collapsible-header'>"+ key +"</div><div class='collapsible-body'><p>"+ value +"</p></div></li>" ).insertBefore( ".list-e" );
              });

            });
          }
          dataAdded = true;
        }else alert("No Data to show.");
      });
    }else alert("Data Already added.");
  });


});
