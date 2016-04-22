$(document).ready(function() {
  var quoteArr = ["The starting point of all achievement is desire. - Napoleon Hill", "Success consists of going from failure to failure without loss of enthusiasm. - Winston Churchill", "Try not to become a man of success, but rather try to become a man of value.- Albert Einstein", "Action is the foundational key to all success. - Pablo Picasso", "Desire is the key to motivation, but it's determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - that will enable you to attain the success you seek. - Mario Andretti", "Formal education will make you a living; self-education will make you a fortune.-Jim Rohn", "Success is not a good teacher, failure makes you humble. - Shah Rukh Khan", "It is never too late to be what you might have been.  - George Eliot", "Failure is the condiment that gives success its flavor. - Truman Capote", "Instead of giving a politician the keys to the city, it might be better to change the locks.  - Doug Larson", "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino", "You are never too old to set another goal or to dream a new dream. - C. S. Lewis", "It does not matter how slowly you go as long as you do not stop.  - Confucius", "Start where you are. Use what you have. Do what you can.  - Arthur Ashe", "You cannot have a positive life and a negative mind. - Joyce Meyer" ]

  var arrLength = quoteArr.length;

  function selectQuote(min, arrLength){
	  return Math.floor(Math.random()*(arrLength - min) + min);		
  }

  $("#selectQuote").on("click", function(){
    var quote = selectQuote(0, arrLength);
    $(".quotes").html(quoteArr[quote]);
     $("#tweetquote").attr("href","http://twitter.com/home?status=" + quoteArr[quote]);
  });
});