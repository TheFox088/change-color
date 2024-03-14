function changeColor() {
    let box = document.getElementById("colorBox");
    let currentColor = box.style.backgroundColor;

    // Toggle between two colors
    if (currentColor === "blue") {
        box.style.backgroundColor = "red";
    } else {
        box.style.backgroundColor = "blue";
    }
}

