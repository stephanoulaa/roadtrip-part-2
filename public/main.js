var items = [
    {
        item: 'water bottles',
        weight: 1,
        cost: 1.5,
    },
    {
        item: 'car tires',
        weight: 22,
        cost: 80,
    },
    {
        item: 'shoes',
        weight: 2.5,
        cost: 35,
    },
    {
        item: 'snacks',
        weight: 0.33,
        cost: 3,
    }
]

$(document).ready(function() {
  var waterCount = 0
  var tireCount = 0
  var shoeCount = 0
  var snackCount = 0
  var totalPriceCount = 0
  var totalWeightCount = 0
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
    if (totalPriceCount > 200 && totalWeightCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total weight limit of 200 lbs and price limit of $200. Please make changes accordingly.")
    } else if (totalWeightCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total weight limit of 200 lbs. Please make changes accordingly.")
    } else if(totalPriceCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total price limit of $200. Please make changes accordingly.")
    } else {
      $("#validateP").text('')
    }
  })
})