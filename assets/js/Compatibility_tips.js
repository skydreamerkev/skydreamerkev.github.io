// 兼容性提示 Compatibility infomation

function Compatibility() {
    var userAgent = navigator.userAgent;
    if (
        (userAgent.indexOf("compatible") > -1 &&
            userAgent.indexOf("MSIE") > -1) ||
        (userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1)
    ) {
        document.getElementsByTagName("body")[0].innerHTML =
            "IE 浏览器不受支持,建议更换新版Edge浏览器.<br />IE browser is not supported.<br />It is recommended to replace it with the new version of edge (Chromium edge) browser.<br /><br />下载链接:<br />Download here:<br /><a href='https://www.microsoft.com/zh-cn/edge'>https://www.microsoft.com/zh-cn/edge</a><br />";

        //Formated info:
        //////////////////////////////////////////////////
        //IE 浏览器不受支持,建议更换新版Edge浏览器.
        //IE browser is not supported.
        //It is recommended to replace it with the new version of edge (Chromium edge) browser.
        //
        //下载链接:
        //Download here:
        //https://www.microsoft.com/zh-cn/edge
        //////////////////////////////////////////////////

        // Info in IE
    } else {
        function info(browser) {
            if (browser == "Chrome") {
                window.alert(
                    "你使用的是Chrome浏览器,\n已完成同内核浏览器上的兼容性测试,但此浏览器未经测试\n使用Edge可以获得最佳效果\n(English translation will shows next)"
                );
                window.alert(
                    "You are using Chrome browser,\nCompatibility testing has been completed on the same kernel browser,\nbut this browser has not been tested\nUse Edge to get the best results"
                );
                return;
            }
            infotext = [
                browser == "Edge" ? "旧版本(EdgeHTML内核)的" : "",
                browser == "Edge" ? "更新" : "使用",
                browser == "Edge" ? "an old version of " : "",
                browser == "Edge" ? "update" : "use",
            ];
            if (
                window.confirm(
                    "你使用的是" +
                    infotext[0] +
                    browser +
                    "浏览器,\n未在此浏览器内核上进行兼容性测试,建议" +
                    infotext[1] +
                    "Edge浏览器\n点击 确认 将打开Edge下载页\n(If you need English translation, please click Cancel)"
                )
            )
                window.location.href = "https://www.microsoft.com/zh-cn/edge";
            else if (
                window.confirm(
                    "You are using " +
                    infotext[2] +
                    browser +
                    " browser, \nNo compatibility testing on this browser kernel yet. \nIt is recommended to " +
                    infotext[3] +
                    ' the edge browser. \nClick "OK" to open the edge download page'
                )
            )
                window.location.href = "https://www.microsoft.com/zh-cn/edge";

            //Formated info:
            //
            //Chinese (Edge)
            //////////////////////////////////////////////////
            //你使用的是旧版本(EdgeHTML内核)的Edge浏览器,
            //未在此浏览器内核上进行兼容性测试,建议更新Edge浏览器
            //点击 确认 将打开Edge下载页
            //(If you need English translation, please click Cancel)
            //
            //English (Edge)
            //////////////////////////////////////////////////
            //You are using an old version of Edge browser (with EdgeHTML kernel),
            //No compatibility testing on this browser kernel yet.
            //It is recommended to update the Edge browser.
            //Click "OK" to open the Edge download page'
            //////////////////////////////////////////////////
            //
            //Chinese (Chrome)
            //////////////////////////////////////////////////
            //你使用的是Chrome浏览器,
            //已完成同内核浏览器上的兼容性测试,但此浏览器未经测试
            //使用Edge可以获得最佳效果
            //(English translation will shows next)
            //
            //English (Chrome)
            //////////////////////////////////////////////////
            //You are using Chrome browser,
            //Compatibility testing has been completed on the same kernel browser,
            //but this browser has not been tested
            //Use Edge to get the best results
            //////////////////////////////////////////////////
            //
            //Chinese (Not Edge)
            //////////////////////////////////////////////////
            //你使用的是(浏览器名)浏览器,
            //未在此浏览器内核上进行兼容性测试,建议使用Edge浏览器
            //点击 确认 将打开Edge下载页
            //(If you need English translation, please click Cancel)
            //
            //English (Not Edge)
            //////////////////////////////////////////////////
            //You are using (Browser name) browser,
            //No compatibility testing on this browser kernel yet.
            //It is recommended to update the Edge browser.
            //Click "OK" to open the Edge download page'
            //////////////////////////////////////////////////
        }
        if (userAgent.indexOf("Edge") > -1) info("Edge");
        else if (userAgent.indexOf("Edg") == -1)
            if (userAgent.indexOf("Chrome") > -1) info("Chrome");
            else if (userAgent.indexOf("Opera") > -1) info("Opera");
            else if (userAgent.indexOf("Firefox") > -1) info("Firefox");
            else if (userAgent.indexOf("Safari") > -1) info("Safari");
            else info("unknown");
    }
}
time = new Date();
if (!localStorage.comptime || parseInt(localStorage.comptime) + 2592000000 < time) { // 2,592,000,000ms = 30day
    Compatibility();
    localStorage.comptime = time - 0; // only store numbers
}
