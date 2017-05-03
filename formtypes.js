//Your JavaScript should read and display the initial value for each input, and then handle the change event for the inputs by displaying the new value. For most inputs, you can use jQuery's val()method. An exception is checkboxes, for which you can use jQuery's prop() method.
//text, password, submit, radio, checkbox, 

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    var tText = $('#tText'), tPass = $('#tPass'), tSubmit = $('#tSubmit'),
    tRadio = $('#tRadio'), tCheckbox = $('#tCheckbox'), tColor = $('#tColor'),
    tDate = $('#tDate'), tLocal = $('#tLocal'), tEmail = $('#tEmail'),
    tMonth = $('#tMonth'), tAmount = $('#tAmount'), 
    tDate = $('#tDate'), tMonth = $('#tMonth'), tRange = $('#tRange'), 
    tSearch = $('#tSearch'), tTel = $('#tTel'), tColor = $('#tColor'), 
    tLink = $('#tLink'), tWeek = $('#tWeek'), tArea = $('#tArea'), tSelect = $('#tSelect');
  
  
  $('#tBody').change(function (e) {
    
//    var key = e.which;
//    if (key === 13) { // key code for 'enter'
    var textfield = $('#textfield').val();
    tText.text(textfield);

    var password = $('#password').val();
    tPass.text(password);

    var color = $('#color').val();
    tColor.text(color);

    var date = $('#date').val();
    tDate.text(date);

    var local = $('#local').val(); 
    tLocal.text(local);

    var email = $('#email').val();
    tEmail.text(email);

    var month = $('#month').val();
    tMonth.text(month);

    var amount = $('#amount').val();
    tAmount.text(amount);

    var range = $('#range').val();
    tRange.text(range);

    var search = $('#search').val();
    tSearch.text(search);
    var tel = $('#tel').val();
    tTel.text(tel);

    var link = $('#link').val();
    tLink.text(link);

    var week = $('#week').val();
    tWeek.text(week);

    var area = $('#area').val();
    tArea.text(area);

    var select = $('#select').val();
    tSelect.text(select);

    e.preventDefault();
  
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

  tSubmit.click(function () { //submit
    event.preventDefault;       
  });

});

