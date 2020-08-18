jQuery(document).ready(function ($) {
  $('#process').on('click', function (e) {
    var fromString = $('#from').val();
    var toString = $('#to').val();
    var inputString = $('#input').val();

    var fromArray = fromString.split("\n");
    var toArray = toString.split("\n");

    // console.log(fromArray);

    if (fromArray.length !== toArray.length) {
      alert('Length of FROM and TO list is not the same');
      return;
    }

    var newInputString = inputString;
    for (var i = 0; i < fromArray.length; i++) {
      newInputString = newInputString.replace(new RegExp(fromArray[i].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), "g"), toArray[i]);
    }

    $('#input').val(newInputString);
  });
  $(".textarea").linedtextarea();
});
