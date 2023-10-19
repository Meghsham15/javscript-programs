// Set the date we're counting down to





class Countdown {
    constructor(time) {
        this.time = time;
    }

    setCountdown() {

        // let date = new Date().getDate();
        // let year = new Date().getFullYear();
        var countDownDate = new Date(this.time).getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

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
            document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countDown").innerHTML = "EXPIRED";
            }
        }, 1000);

    }

}

// time format - 
// "Aug 21, 2023 15:35"

let obj = new Countdown("Oct 19, 2023 10:05");
obj.setCountdown();






