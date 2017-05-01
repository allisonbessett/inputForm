//Your JavaScript should read and display the initial value for each input, and then handle the change event for the inputs by displaying the new value. For most inputs, you can use jQuery's val()method. An exception is checkboxes, for which you can use jQuery's prop() method.
//text, password, submit, radio, checkbox, 

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
  var tText = $('#tText');
  var tPass = $('#tPass');
  var tSubmit = $('#tSubmit');
  var tRadio = $('#tRadio');
  var tCheckbox = $('#tCheckbox');
  var tColor = $('#tColor');
  var tDate = $('#tDate');
  var tTime = $('#tTime');
  var tEmail = $('#tEmail');
  var tMonth = $('#tMonth');
  var tAmount = $('#tAmount');
  
  var favoriteColor = $('#favoriteColor');
  $('#tBody').keypress(function (e) {
    var key = e.which;
    if (key === 13) { // key code for 'enter'
      var textfield = $('#textfield').val();
      tText.text(textfield);
      var password = $('#password').val();
      tPass.text(password);
      var time = $('#time').val(); // time not working 
      tTime.text(time);
      var email = $('#email').val();
      tEmail.text(email);
      var amount = $('#amount').val();
      tAmount.text(amount);
      e.preventDefault();
    }
  });
  
  $('input[name="color"]').click(function () {
    if ($(this).val() === "green") {
      tRadio.text("green");
    } else if ($(this).val() === "blue") {
      tRadio.text("blue");
    } else {
      tRadio.text("red");
    }
  });
  
  console.log("working");
  $(":checkbox").click(function () {
    var str = "";
  
    if ($("#la").is(':checked')) {
      str = str + " LA";
    }
    if ($("#ny").is(':checked')) {
      str = str + " NY";
    }
    if ($("#wadc").is(':checked')) {
      str = str + " WA DC";
    }
    tCheckbox.text(str);
  });
  
  favoriteColor.click(function () { //color to hex not working
    favoriteColor.val(); 
    favoriteColor.toHexString();
    tColor.html(favoriteColor);
    event.preventDefault;
});

  tSubmit.click(function () { //submit
    event.preventDefault;       
  });
  $('input[type="date"]').click(function () { //date not working
    var date = $('#date').val();
    tDate.text(date);
  });
  $('input[type="month"]').click(function () { //month not working
    var month = $('#month').val();
    tMonth.text(month);
  });

});

