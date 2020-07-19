var countDownDate = new Date("Sep 5, 2020 11:11:11").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // make countdown two digit number
    function makeTwoDigit(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }


    // if (days < 10) { days = "0" + days; }
    // if (hours < 10) { hours = "0" + hours; }
    // if (minutes < 10) { minutes = "0" + minutes; }
    // if (seconds < 10) { seconds = "0" + seconds; }

    // Output the result in an element with id="count-down"
    document.getElementById("count-down").innerHTML = `
    <div class="flex-container">
    <div>${makeTwoDigit(days)}</div>
    <p class="lineheight">:</p>
    <div>${makeTwoDigit(hours)}</div>
    <p class="lineheight">:</p>
    <div>${makeTwoDigit(minutes)}</div> 
    <p class="lineheight">:</p>
      <div>${makeTwoDigit(seconds)}</div>
  
  </div> 
`;
    /* <div class="col">
        <h2 class="pb-4"> <span class="round-border py-3 px-3 text-white font-none">${makeTwoDigit(days)}</span></h2>
        <p class="text-white "><b>Days</b></p>
    </div>
    <p class="text-white lead pl-3"><b>:</b></p>
    <div class="col">
        <h2 class="pb-4"><span class="round-border py-3 px-3 text-white font-none">${makeTwoDigit(hours)}</span>
        </h2>
        <p class="text-white"><b>Hours</b></p>
    </div>
    <p class="text-white lead pl-3"><b>:</b></p>
    <div class="col">
        <h2 class="pb-4"><span class="round-border py-3 px-3 text-white font-none"> ${makeTwoDigit(minutes)}</span></h2>
        <p class="text-white"><b>Minutes</b></p>
    </div>
    <p class="text-white lead pl-3"><b>:</b></p>
    <div class="col">
        <h2 class="pb-4"><span class="round-border py-3 px-3 text-white font-none"> ${makeTwoDigit(seconds)}</span></h2>
        <p class="text-white"><b>Seconds</b></p>
    </div> */
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("count-down").innerHTML = "EXPIRED";
    }
}, 1000);