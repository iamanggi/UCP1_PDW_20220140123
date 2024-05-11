document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        var now = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        var time = now.toLocaleString('en-US', options); // Format the time as desired
        document.getElementById('current-time').textContent = time; // Update the current-time element with the formatted time
    }

    // Update the clock every second
    setInterval(updateClock, 1000);
});


