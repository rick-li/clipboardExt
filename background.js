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

var ctx1 = chrome.contextMenus.create({
    title: '复制标题格式1',
    type: 'normal',
    onclick: function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'doCopy1'
            }, function(response) {

            });
        });

    }
});

var ctx2 = chrome.contextMenus.create({
    title: '复制标题格式2',
    type: 'normal',
    onclick: function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'doCopy2'
            }, function(response) {

            });
        });
    }
});


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action === 'copytoclipboard') {
        copyToClipboard(request.content);
        sendResponse({
            success: true
        });
    }
})