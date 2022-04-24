'use strict';
function randomPage(pageList = false) {
    // defaults
    if (!pageList)
        if (pages) pageList = pages;
        else throw ReferenceError('randomPage: Page list is missing (Global)');
    else if (pageList.type == "click")
        if (pageList.pointerType != 'mouse' && this.itemList) {
            console.warn('randomPage: Its a non-pointer event, event info:', pageList);
            console.warn("randomPage: Redirect has been rejected.");
            return;
        }
        if (this.itemList) pageList = this.itemList;
        else if (pages) {
            pageList = pages;
            console.warn("randomPage: This is not a global random button, but no page list found, event info:", pageList);
            console.warn("randomPage: Using global page list in a non global request.");
        }
    else throw ReferenceError('randomPage: Page list is missing (Event)');

    // if empty
    if (!pages.length) {
        console.warn("randomPage: Empty page list, category might be empty.");
        console.warn("randomPage: Redirect has been rejected.");
        return;
    }

    // Read data
    if (localStorage.urls) var urls = JSON.parse(localStorage.urls);
    else var urls = [];

    // main
    if (urls.length >= pages.length) urls = [];
    var url = pages[0];
    for (let i = 0; i < 8; i++) {
        var index = Math.floor(pages.length * Math.random());
        url = pages[index];
        if (urls.includes(url)) continue;
        else {
            urls.push(url);
            break;
        }
    };

    // Save data
    localStorage.urls = JSON.stringify(urls);

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
