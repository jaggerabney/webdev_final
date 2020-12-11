var slideIndex = 0;
var imageTimer = 5000; // time to change image in ms
loop();

function loop() {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(loop, imageTimer);
}

function fade(element, opacityIncrement, step, speed) {
    var initialOpacity;
    opacityIncrement = opacityIncrement || 0;
    step = step || 5; // how much opacity is increased 
    speed = speed || 50; // in ms

    initialOpacity = setInterval(function() {
        var currentOpacity = opacityIncrement / 100; // to convert to decimal
        opacityIncrement += step;
        if (currentOpacity > 1 || currentOpacity < 0) {
            clearInterval(opacityIncrement);
            return;
        }
        element.style.opacity = currentOpacity;
    }, speed);
}