/* Open */
function openNav(id) {
    document.getElementById(id).style.height = "100%";
}

/* Close */
function closeNav(id) {
    document.getElementById(id).style.height = "0%";
}

function calculateBMI(){
  var heightFeet = document.getElementById("heightFeet").value;
  var heightInches = document.getElementById("heightInches").value;
  var weightPounds = document.getElementById("weightPounds").value;
	$('.odometer').html(123.12);
}

function clearBMICalculation(){
	$('.odometer').html(0);	
}

function showNutritionStats(){
	$(".nutrition-facts").fadeIn();
}

function hideNutritionStats(){
	$(".nutrition-facts").fadeOut();
}

/* JQuery to populate the food search box in the diet tracker app*/
$(document).ready(function(){
 var values = {};
 $(".nutrition-facts").fadeOut();
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
     // Create a dictionary of values to grab specific data from json file
     values[value.Display_Name] = {
     	"Calories" : value.Calories, "Portion_Amount" : value.Portion_Amount, "Grains" : value.Grains,
     	"Whole_Grains" : value.Whole_Grains, "Vegetables" : value.Vegetables, "Orange_Vegetables" : value.Orange_Vegetables,
     	"Drkgreen_Vegetables" : value.Drkgreen_Vegetables, "Starchy_vegetables" : value.Starchy_vegetables, "Other_Vegetables" : value.Other_Vegetables,
     	"Fruits" : value.Fruits, "Milk" : value.Milk, "Meats" : value.Meats,
     	"Soy" : value.Soy, "Drybeans_Peas" : value.Drybeans_Peas, "Oils" : value.Oils,
     	"Solid_Fats" : value.Solid_Fats, "Added_Sugars" : value.Added_Sugars, "Alcohol" : value.Alcohol, "Saturated_Fats" : value.Saturated_Fats
     };

     $('#foodSearchResults').append('<li class="list-group-item link-class">'+value.Display_Name+' | Calories: <span class="text-muted">'+value.Calories+'</span></li>');
    }
   });   
  });
 });
 
 $('#foodSearchResults').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  var displayName = $.trim(click_text[0]);
  $('#foodSearch').val(displayName);
  $("#foodSearchResults").html('');

  // Fill in all the nutrition values
  $("#calor").val($.trim(values[displayName]["Calories"]));
  $("#Portion_Amount").val(values[displayName]["Portion_Amount"]);
  $("#Grains").val(values[displayName]["Grains"]);
  $("#Whole_Grains").val(values[displayName]["Whole_Grains"]);
  $("#Vegetables").val(values[displayName]["Vegetables"]);
  $("#Orange_Vegetables").val(values[displayName]["Orange_Vegetables"]);
  $("#Drkgreen_Vegetables").val(values[displayName]["Drkgreen_Vegetables"]);
  $("#Starchy_vegetables").val(values[displayName]["Starchy_vegetables"]);
  $("#Other_Vegetables").val(values[displayName]["Other_Vegetables"]);
  $("#Fruits").val(values[displayName]["Fruits"]);
  $("#Milk").val(values[displayName]["Milk"]);
  $("#Meats").val(values[displayName]["Meats"]);
  $("#Soy").val(values[displayName]["Soy"]);
  $("#Drybeans_Peas").val(values[displayName]["Drybeans_Peas"]);
  $("#Oils").val(values[displayName]["Oils"]);
  $("#Solid_Fats").val(values[displayName]["Solid_Fats"]);
  $("#Added_Sugars").val(values[displayName]["Added_Sugars"]);
  $("#Alcohol").val(values[displayName]["Alcohol"]);
  $("#Saturated_Fats").val(values[displayName]["Saturated_Fats"]);
 });
});