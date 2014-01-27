function copyToClipboard(text) {
    var copyDiv = document.createElement('textarea');
    copyDiv.id = 'copydiv';

    document.body.appendChild(copyDiv);
    copyDiv.textContent = text;
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand('copy');
    document.body.removeChild(copyDiv);
}



chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

    console.log(request);
    if (request.action === 'copytoclipboard') {
        copyToClipboard(request.content);
        sendResponse({
            success: true
        });
    }
})