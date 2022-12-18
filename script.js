var day = document.getElementById('day');
var hour = document.getElementById('hour');
var minute = document.getElementById('min');
var second  = document.getElementById('sec');
var message = document.getElementById('message');

var countDownDate = new Date('dec 31, 2022 23:59:59').getTime();

// set interval for every second

var x = setInterval(function() {
 //get todays date 

 var todayDate = new Date().getTime();
 var distance = countDownDate - todayDate;
 day.innerText = Math.floor(distance/(1000*60*60*24));
 hour.innerText = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
 minute.innerText = Math.floor(distance % (1000*60*60)/(1000*60));
 second.innerText = Math.floor(distance % (1000*60) / 1000);
 

 //if countdown is over 

 if (distance < 0) {
    clearInterval(x);
    day.innerText = 0;
    hour.innerText = 0;
    minute.innerText = 0;
    second.innerText = 0;
    message.hidden = false;
    

 }
},1000);