window.onload = (function() {
    console.log("onload")
    var clearedTextBox = 0;
    var text_box = document.getElementById("textbox");
    text_box.onclick = (function() {
        console.log("onclick")
        if (clearedTextBox === 0) {
            text_box.innerHTML = "";
            clearedTextBox = 1
        }
    });
});