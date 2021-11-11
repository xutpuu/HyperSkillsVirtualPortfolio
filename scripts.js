

function hideWindow(state) {
    let divWindow = document.querySelector("div.window");
    divWindow.style.display = state;
}

function hideMenu() {
    let x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}