$(document).ready(function() {
    var clearedTextBox = 0;
    $("#textbox").focusin(function() {
        if (clearedTextBox === 0) {
            $("#textbox").html("");
            clearedTextBox = 1
        }
    });
});