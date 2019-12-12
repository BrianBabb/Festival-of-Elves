$(document).ready(function() {
  $.get("/child-data/1", function(result) {
    console.log(result);
  });
});

// $('.btn-check-in').on('click', function(event){

// }