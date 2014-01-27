+ function() {
    window.onload = function(argument) {

        var btn1 = document.createElement('button');
        btn1.innerText = "复制格式1"
        btn1.style.position = "fixed";
        btn1.style.top = '5px';
        btn1.style.right = '10px';
        btn1.style.zIndex = 9999;
        btn1.id = 'btn1';
        var btn2 = document.createElement('button');
        btn2.innerText = "复制格式2"
        btn2.style.position = "fixed";
        btn2.style.top = '30px';
        btn2.style.right = '10px';
        btn2.style.zIndex = 9999;
        btn2.id = 'btn2';
        document.body.appendChild(btn1);
        document.body.appendChild(btn2);


        btn1.addEventListener('click', function() {
            copy(document.title + '\n' + location.href);
        });
        btn2.addEventListener('click', function() {
            copy('[URL=' + location.href + ']' + document.title + '[/URL]');
            // copy(document.title + '\n' + location.href
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
    }
}();