/* Open */
function openNav(id) {
    document.getElementById(id).style.height = "100%";
}

/* Close */
function closeNav(id) {
    document.getElementById(id).style.height = "0%";
}

/* Calculate BMR based on Harris-Benedict Formula:
  1. Calculate your BMR (basal metabolic rate):

  Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years )
  Men: BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in years )
  2. Multiply your BMR by the appropriate activity factor, as follows:

     Sedentary (little or no exercise): BMR x 1.2
     Lightly active (light exercise/sports 1-3 days/week): BMR x 1.375
     Moderately active (moderate exercise/sports 3-5 days/week): BMR x 1.55
     Very active (hard exercise/sports 6-7 days a week): BMR x 1.725
     Extra active (very hard exercise/sports & physical job or 2x training): BMR x 1.9
  3. Your final number is the approximate number of calories you need each day to maintain your weight.*/
function calculateBMR(){
	var gender = document.getElementById("genderBMR").value;

	var dob = document.getElementById("dobBMR").value;
	var ageYears = getAge(dob);

	var heightFeet = parseInt(document.getElementById("heightFeetBMR").value);
  	var heightInches = parseInt(document.getElementById("heightInchesBMR").value);
  	var totalInches = (heightFeet * 12) + heightInches;

  	var weightPounds = parseFloat(document.getElementById("weightPoundsBMR").value);

  	var bmr = gender.toLowerCase() == "male" ? 66 + (((6.23 * weightPounds) + (12.7 * totalInches)) - (6.8 * ageYears)) : 655 + (((4.35 * weightPounds) + (4.7 * totalInches)) - (4.7 * ageYears));

	// Lightly active (light exercise/sports 1-3 days/week): BMR x 1.375
  	var lightActivity = bmr * 1.375;

  	// Moderately active (moderate exercise/sports 3-5 days/week): BMR x 1.55
  	var moderateActivity = bmr * 1.55;

  	// Very active (hard exercise/sports 6-7 days a week): BMR x 1.725
  	var highActivity = bmr * 1.725;

  	// Extra active (very hard exercise/sports & physical job or 2x training): BMR x 1.9
  	var extremeActivity = bmr * 1.9;

  	$('.odometer').html(bmr);
}

function clearBMRCalculation(){
	$('.odometer').html(0);
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function calculateBMI(){
  	var heightFeet = parseInt(document.getElementById("heightFeetBMI").value);
  	var heightInches = parseInt(document.getElementById("heightInchesBMI").value);
  	var totalInches = (heightFeet * 12) + heightInches;

  	var weightPounds = parseFloat(document.getElementById("weightPoundsBMI").value);

  	var bmi = 703 * (weightPounds / Math.pow(totalInches, 2));

  	$('.odometer').html(bmi);
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
  showNutritionStats()
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