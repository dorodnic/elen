document.addEventListener("DOMContentLoaded", function (event) {
    console.log("2");

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (eventData) {
  
        // gamma: Tilting the device from left to right. Tilting the device to the right will result in a positive value.
        var tiltLR = eventData.gamma;
  
        // beta: Tilting the device from the front to the back. Tilting the device to the front will result in a positive value.
        var tiltFB = eventData.beta;


        console.log(tiltLR, tiltFB);

        const h = document.getElementById("header");
        if (h) {
            const x = 50 + tiltLR/40;
            const y = 50 + tiltFB/40;
            h.style.cssText = `background: url("2.jpg") no-repeat ${x}% ${y}%; background-size: 150% auto;`;
        }

      }, false);
    }
});