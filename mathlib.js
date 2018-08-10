module.exports = function (){
    return {
      add: function(num1, num2) {
          sum = num1 + num2 
           console.log("Sum is: " + sum)
      },
      multiply: function(num1, num2) {
           mult = num1 * num2
           console.log("Mult is: " + mult)
      },
      square: function(num) {
           sq = num * num
           console.log("Square is: " + sq)
      },
      random: function(num1, num2) {
            random = Math.floor(Math.random(num1, num2) * 100)
            console.log("Random number is: " + random)
      }
    }
  };