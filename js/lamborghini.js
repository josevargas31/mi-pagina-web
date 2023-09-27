let boxSlider = document.getElementById("boxSlider");
let iconChevronLeft = document.getElementById("iconChevronLeft");
let iconChevronRight = document.getElementById("iconChevronRight");
let signal1 = document.getElementById("signal1");
let signal2 = document.getElementById("signal2");
let signal3 = document.getElementById("signal3");
let signal4 = document.getElementById("signal4");
let signal5 = document.getElementById("signal5");
let signal6 = document.getElementById("signal6");
/* Cuando haga click en el "boxSlider se ejucutara el siguiente funcion" */
iconChevronRight.addEventListener("click", function() {
    /* clasList lista de clases */
    if (boxSlider.classList.contains("box-slider-1")) {
        boxSlider.classList.remove("box-slider-1")
        boxSlider.classList.add("box-slider-2")
        signal1.classList.remove("signal-select")
        signal2.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-2")) {
        boxSlider.classList.remove("box-slider-2")
        boxSlider.classList.add("box-slider-3")
        signal2.classList.remove("signal-select")
        signal3.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-3")) {
        boxSlider.classList.remove("box-slider-3")
        boxSlider.classList.add("box-slider-4")
        signal3.classList.remove("signal-select")
        signal4.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-4")) {
        boxSlider.classList.remove("box-slider-4")
        boxSlider.classList.add("box-slider-5")
        signal4.classList.remove("signal-select")
        signal5.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-5")) {
        boxSlider.classList.remove("box-slider-5")
        boxSlider.classList.add("box-slider-6")
        signal5.classList.remove("signal-select")
        signal6.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-6")) {
        boxSlider.classList.remove("box-slider-6")
        boxSlider.classList.add("box-slider-1")
        signal6.classList.remove("signal-select")
        signal1.classList.add("signal-select")
    }
});

iconChevronLeft.addEventListener("click", function() {
    /* clasList lista de clases */
    if (boxSlider.classList.contains("box-slider-6")) {
        boxSlider.classList.remove("box-slider-6")
        boxSlider.classList.add("box-slider-5")
        signal6.classList.remove("signal-select")
        signal5.classList.add("signal-select")
    }

    else if (boxSlider.classList.contains("box-slider-5")) {
        boxSlider.classList.remove("box-slider-5")
        boxSlider.classList.add("box-slider-4")
        signal5.classList.remove("signal-select")
        signal4.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-4")) {
        boxSlider.classList.remove("box-slider-4")
        boxSlider.classList.add("box-slider-3")
        signal4.classList.remove("signal-select")
        signal3.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-3")) {
        boxSlider.classList.remove("box-slider-3")
        boxSlider.classList.add("box-slider-2")
        signal3.classList.remove("signal-select")
        signal2.classList.add("signal-select")
    }
    else if (boxSlider.classList.contains("box-slider-2")) {
        boxSlider.classList.remove("box-slider-2")
        boxSlider.classList.add("box-slider-1")
        signal2.classList.remove("signal-select")
        signal1.classList.add("signal-select")
    }


});