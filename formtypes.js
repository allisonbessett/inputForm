//Your JavaScript should read and display the initial value for each input, and then handle the change event for the inputs by displaying the new value. For most inputs, you can use jQuery's val()method. An exception is checkboxes, for which you can use jQuery's prop() method.
//text, password, submit, radio, checkbox, 

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  var tText = $('#tText');
  var tPass = $('#tPass');
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
  console.log("working");
});
