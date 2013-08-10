$(function(){
  $('.chosen-select').chosen({no_results_text: "Click to choose options"});

  $('#submit-form').click(function () {
    var validForm = true;
    var errors = [];

    $('.input-item.required').each(function () {
      var i = $(this).find('input,select,textarea').first();
      console.log(i.val())
      if (i.val() === null || i.val() === "") {
        validForm = false;
        errors.push("Please fill in the " + i.closest('.input-item').find('label').text() + " field");
      }
    });

    if (!validForm) {
      $('#form-status').html(errors.join("<br>")).show();
      return false;
    }
  });
});