// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2030 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Seconds ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//

const submitBtn = document.querySelector("button");
const form = document.getElementById('form');
const log = document.getElementById('log');

let reload = function() {
  window.location.reload();
}

// Password matching 

function passwordConfirmation() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("secondPassword").value;
 
  if (password != confirmPassword) {
    log.textContent = `❌ Passwords don't match!`;
} else if(password == "") {
    log.textContent = `⚠️ Looks like you are missing something...`;
} else if((password == confirmPassword) && (password.length >= 8)) {
    log.textContent = `🚀 Submitting...!`;
    setTimeout(function() {reload()}, 1000) 
    }
}

// Submit button and form

submitBtn.addEventListener('click', function() {
  passwordConfirmation();
  form.requestSubmit();
})

form.addEventListener('submit', function(e) {
  e.preventDefault()
});

