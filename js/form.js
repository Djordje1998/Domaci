$(function() {
  var error_indicator = false;

  $("#firstName").focusout(function() {
    check_firstName();
  });
  $("#lastName").focusout(function() {
    check_lastName();
  });

  $("#phoneNumber").focusout(function() {
    check_phoneNumber();
  });

  $("#email").focusout(function() {
    check_email();
  });

  function check_firstName() {
    var username_length = $("#firstName").val().length;

    if (username_length < 2 || username_length > 20) {
      alert("Bad name, try again!");
      error_indicator = true;
    } else {
    }
  }

  function check_lastName() {
    var password_length = $("##lastName").val().length;

    if (password_length < 5) {
      alert("Bad last name, try again!");
      error_indicator = true;
    } else {
    }
  }

  function check_phoneNumber() {
    var password = $("#phoneNumber").val();
    if (password == NaN) {
      alert("Bad phone number, try again!");
      error_indicator = true;
    } else {
    }
  }

  function check_email() {
    var pattern = new RegExp(
      /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
    );

    if (pattern.test($("#email").val())) {
    } else {
      alert("Invalid email adress, try again!");
      error_indicator = true;
    }
  }

  document.querySelector("#applyBtn").addEventListener("click", function() {
    $("#applyBtn").submit(function() {
      check_firstName();
      check_lastName();
      check_phoneNumber();
      check_email();

      if (error_indicator == false) {
        alert("thank you");
        return true;
      } else {
        return false;
        s;
      }
    });
  });
});
