// TODO: Change is NOT debugged
'use strict';
function randomPage(pageList = false) {
    // defaults
    if (!pageList)
        if (pages) {
            pageList = pages;
            var pageListid = "global";
        }
        else throw ReferenceError('randomPage: Page list is missing (Global)');
    else if (pageList.type == "click") {
        var pageListid = pageList.target.id;
        if (pageList.pointerType != 'mouse' && this.itemList) {
            console.debug('randomPage: Its a non-pointer event');
            console.info('event info: ', pageList);
            console.log("randomPage: Redirect has been rejected.");
            return;
        }
        if (this.itemList) pageList = this.itemList;
        else if (pages) {
            if (pageListid) {
                console.warn("randomPage: This is not a global random button, but no page list found");
                console.info('event info: ', pageList);
                console.trace("randomPage: traceback");
                console.warn("randomPage: Using global page list in a non global request.");
            }
            pageList = pages;
        } else {
            pageListid = "global";
        }
    }
    else throw ReferenceError('randomPage: Page list is missing (Event)');

    // if empty
    if (!pages.length) {
        console.debug("randomPage: Empty page list, category might be empty.");
        console.log("randomPage: Redirect has been rejected.");
        return;
    }

    // Read data
    /*/ TODO: not debugged part
    if (localStorage.urls) var urlsAll = JSON.parse(localStorage.urls);
    else var urlsAll = {};
    var urls = urlsAll[pageListid];
    if (!urls) {
        urls = [];
        urlsAll = {};
    }
    /**/
    if (localStorage.urls) var urls = JSON.parse(localStorage.urls);
    else var urls = [];
    // not debugged part end

    // main
    if (urls.length >= pageList.length) urls = [];
    var url = pages[0];
    for (let i = 0; i < 8; i++) {
        var index = Math.floor(pageList.length * Math.random());
        url = pages[index];
        if (urls.includes(url)) continue;
        else {
            urls.push(url);
            break;
        }
    };

    // Save data
    /*/ TODO: not debugged part
    urlsAll[pageListid] = urls;
    localStorage.urls = JSON.stringify(urlsAll);
    /**/
    localStorage.urls = JSON.stringify(urls);
    // not debugged part end

    // redirect
    window.location.href = url;

    /*
    What does this function do:
        Randomly select the page eight times and visit the first page that has never been visited.
        If there are no pages that have never been visited, the last page selected is visited.
        If all pages have been visited, reset page visited status

    The performance of this function:
        In most cases, the pages will not appear twice, but there is still a small chance of drawing the same pages. Once all pages have been looked, it restart from the beginning.
    */
};

function getPageListForNav(navItem) {
    var rawList = navItem.children[2];
    var rawListLength = rawList.childElementCount;
    var outputList = [];
    for (let index = 0; index < rawListLength; index++)
        outputList.push(rawList.children[index].children[0].href);
    return outputList;
};
