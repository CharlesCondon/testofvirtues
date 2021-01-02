// function to calculate how many boxes were checked and return score on screen
$(document).ready(function() {
  $("#results").hide();

  $('#calculate').click(function() {
    var checkboxes = $('input:checkbox:checked').length;
    var virtue = 100 - checkboxes;
    var final = virtue + "%";
    $('#total').html(final);
    $("#results").show();            
    $("#test").hide();
    
    ga('send', {
      hitType: 'event',
      eventCategory: 'Score',
      eventAction: 'Total',
      eventLabel: virtue.toString(),
      eventValue: virtue
    });
  })
});
