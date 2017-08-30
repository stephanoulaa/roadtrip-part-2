//var items = [
//    {
//        item: 'water bottles',
//        weight: 1,
//        cost: 1.5,
//    },
//    {
//        item: 'car tires',
//        weight: 22,
//        cost: 80,
//    },
//    {
//        item: 'shoes',
//        weight: 2.5,
//        cost: 35,
//    },
//    {
//        item: 'snacks',
//        weight: 0.33,
//        cost: 3,
//    }
//]

$(document).ready(function() {
  var waterCount = 0
  var tireCount = 0
  var shoeCount = 0
  var snackCount = 0
  var totalPriceCount = 0
  var totalWeightCount = 0
  //add total count
  var totalCountP = [{item: water, price: 1.5}, {item: tire, price: 80}, {item: shoe, price: 35}, {item: snack, price: 3}];
  var totalCountW = [{item: water, weight: 1}, {item: tire, weight: 22}, {item: shoe, weight: 2.5}, {item: snack, weight: 1}];
  $("#waterCounter").text("Count: "+waterCount)
  $("#tireCounter").text("Count: "+tireCount)
  $("#shoeCounter").text("Count :"+shoeCount)
  $("#snackCounter").text("Count :"+snackCount)
  $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
  $(".totalWeightCount").text("Total Weight: "+totalWeightCount +" lbs")
    
  $("#waterIncrease").click(function() {
    waterCount++
    totalPriceCount += 1.5
    totalWeightCount += 1
    $("#waterCounter").text("Count: "+waterCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  if (totalWeightCount > 200 || totalPriceCount > 200) {
      $('#validate').addClass('invalid')
  }
  })
  $("#waterDecrease").click(function() {
    waterCount--
    totalPriceCount -= 1.5
    totalWeightCount -= 1
    $("#waterCounter").text("Count: "+waterCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
    
  $("#tireIncrease").click(function() {
    tireCount++
    totalPriceCount += 80
    totalWeightCount += 22
    $("#tireCounter").text("Count: "+tireCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
  $("#tireDecrease").click(function() {
    tireCount--
    totalPriceCount -= 80
    totalWeightCount -= 22
    $("#tireCounter").text("Count: "+tireCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
  $("#shoeIncrease").click(function() {
    shoeCount++
    totalPriceCount += 35
    totalWeightCount += 2.5
    $("#shoeCounter").text("Count: "+shoeCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
  $("#shoeDecrease").click(function() {
    shoeCount--
    totalPriceCount -= 35
    totalWeightCount -= 2.5
    $("#shoeCounter").text("Count: "+shoeCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
  $("#snackIncrease").click(function() {
    snackCount++
    totalPriceCount += 3
    totalWeightCount += 1
    $("#snackCounter").text("Count: "+snackCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
  $("#snackDecrease").click(function() {
    snackCount--
    totalPriceCount -= 3
    totalWeightCount -= 1
    $("#snackCounter").text("Count: "+snackCount)
    $(".totalPriceCount").text("Total Price: $"+totalPriceCount)
    $(".totalWeightCount").text("Total Weight: "+totalWeightCount + " lbs")
  })
  $("#validate").click(function() {
      $.post(`/validate-cargo`, {price: totalPriceCount, weight: totalWeightCount} function(data){
        //send info back
          console.log(data);
          $("#validateP").text(data)
    if (totalPriceCount > 200 && totalWeightCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total weight limit of 200 lbs and price limit of $200. Please make changes accordingly.")
    } else if (totalWeightCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total weight limit of 200 lbs. Please make changes accordingly.")
    } else if(totalPriceCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total price limit of $200. Please make changes accordingly.")
        //FIX THIS
//    } else if (totalCountP > 200 && totalCountW > 200){
//      $("#validateP").text("Oops! Your have gone over your total limit of $200 and 200 lbs for all items. Please make changes accordingly.")
//    } else if (totalCountP > 200 ){
//      $("#validateP").text("Oops! Your have gone over your total limit of $200 for all items. Please make changes accordingly.")
//    } else if (totalCountW > 200){
//      $("#validateP").text("Oops! Your have gone over your total limit of 200 lbs for all items. Please make changes accordingly.")
    } else {
          $("#validateP").text(' ')
      })
    }
  })
})