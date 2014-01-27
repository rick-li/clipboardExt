function copy() {

    //Get Input Element
    var copyDiv = document.getElementById('text');

    //Give the text element focus
    copyDiv.focus();

    //Select all content
    document.execCommand('SelectAll');

    //Copy Content
    document.execCommand("Copy", false, null);
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copy").onclick = copy;
});