// function to calculate how many boxes were checked and return score on screen
$(document).ready(function() {
  $("#results").hide();

  $('#calculate').click(function() {
    var checkboxes = $('input:checkbox:checked').length;
    var virtue = 100 - checkboxes;
    virtue = virtue + "%";
    $('#total').html(virtue);
    $("#results").show();            
    $("#test").hide();
  })
});
