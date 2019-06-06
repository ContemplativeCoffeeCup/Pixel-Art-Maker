// makeGrid function for creating a table
function makeGrid() {
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  $('#pixelCanvas').find('*').remove();
  for (var row = 1; row <= height; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (col = 1; col <= width; col++) {
      $('tr:last').append('<td></td>');
    };
  };
};

// Running the makeGrid function when user's data is submitted
$('#submit').click(function() {
 event.preventDefault();
 makeGrid();
});

// Set the background color of the selected cell
$('#pixelCanvas').on('click', 'td', function() {
  var colorPicked = $('#colorPicker').val();
  $(this).css('background-color', colorPicked);
});
