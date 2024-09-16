let count = 0;

// counting column
const mySection = document.getElementById("box-1");

mySection.onclick = () => {
    count++;
    document.getElementById("value").innerHTML = count;
};

// image changing column
const mySection2 = document.getElementById("box-2");

mySection2.onclick = () => {
    location.reload();    
};
// box slider column
function slide() {
    let sliderValue = document.getElementById("slider").value;
    let box = document.getElementById("box");
    box.style.left = sliderValue + "%";
};