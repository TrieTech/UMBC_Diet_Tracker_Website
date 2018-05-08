/* Open */
function openNav(id) {
    document.getElementById(id).style.height = "100%";
}

/* Close */
function closeNav(id) {
    document.getElementById(id).style.height = "0%";
}

/* JQuery to populate the food search box in the diet tracker app*/
$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#foodSearch').keyup(function(){
  $('#foodSearchResults').html('');
  $('#state').val('');
  var searchField = $('#foodSearch').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('./food.json', function(data) {
   $.each(data, function(key, value){
    if (value.Display_Name.search(expression) != -1 || value.Calories.search(expression) != -1)
    {
     $('#foodSearchResults').append('<li class="list-group-item link-class">'+value.Display_Name+' | Calories: <span class="text-muted">'+value.Calories+'</span></li>');
    }
   });   
  });
 });
 
 $('#foodSearchResults').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#foodSearch').val($.trim(click_text[0]));
  $("#foodSearchResults").html('');
  $("#calor").val($.trim(click_text[1].split(":")[1]));
 });
});