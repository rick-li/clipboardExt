chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'doCopy1') {
        copy(document.title + '\n' + location.href);
    }
    if (request.action === 'doCopy2') {
        copy('[URL=' + location.href + ']' + document.title + '[/URL]');
    }
});

function copy(text) {
    chrome.extension.sendMessage({
            action: 'copytoclipboard',
            content: text
        },
        function(response) {
            if (response.success) {
                noty({
                    text: "复制成功",
                    type: 'alert',
                    dismissQueue: true,
                    timeout: 1200,
                    layout: "topLeft",
                    theme: 'defaultTheme'
                });
            }
        });
}