window.onload = (function() {
    console.log("onload")
    var clearedTextBox = 0;
    var text_box = document.getElementById("textbox");
    var input = localStorage.getItem("input");
    if (input) {
        text_box.innerHTML = input;
    } else {
        text_box.innerHTML = "Type here!";
        text_box.onclick = function() {
            console.log("onclick")
            if (clearedTextBox === 0) {
                text_box.innerHTML = "";
                clearedTextBox = 1
            }
        };
    }
    text_box.oninput = function() {
        localStorage.setItem("input", text_box.innerHTML);
    }
});