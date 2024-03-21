const screen = document.querySelector(".screen");

function addToScreen(input) {
    screen.value += input;
}

function clearScreen() {
    screen.value = "";
}

function answer() {
    try {
        screen.value = eval(screen.value);
    }
    catch(error) {
        screen.value = "ERROR";
    }
}
