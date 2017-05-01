//Your JavaScript should read and display the initial value for each input, and then handle the change event for the inputs by displaying the new value. For most inputs, you can use jQuery's val()method. An exception is checkboxes, for which you can use jQuery's prop() method.
//text, password, submit, radio, checkbox, 

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  var tText = $('#tText');
  var tPass = $('#tPass');
  var tSubmit = $('#tSubmit');
  var tRadio = $('#tRadio');
  $('#tBody').keypress(function (e) {
    var key = e.which;
    if (key === 13) { // key code for 'enter'
      var textfield = $('#textfield').val();
      tText.text(textfield);
      var password = $('#password').val();
      tPass.text(password);
      e.preventDefault();
    }
  });
  
  $('input[name="color"]').change(function () {
     console.log("working");
    if($(this).val() === "green") {
//    if($('input: radio[name=color]').val() ==="green") {
      tRadio.text("green");
      }
    });
//    if($(this).attr('id') === 'green') {

//    if else ($(this).attr('id') === 'blue') {
//    $
//  }

  
  tSubmit.click(function () {
    event.preventDefault;         
  });
});

  console.log("working");