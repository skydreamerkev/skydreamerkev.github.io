'use strict';
function randomPage(pageList = false) {
    if (!pageList)
        if (pages) pageList = pages;
        else throw ReferenceError('Page list is missing (Global)');
    else if (pageList.type == "click")
        if (pageList.pointerType != 'mouse' && this.itemList) return;
        if (this.itemList) pageList = this.itemList;
        else if (pages) {
            pageList = pages;
            console.warn("This is not a global random button, but no random list was found");
        }
        else throw ReferenceError('Page list is missing (Event)');
    if (localStorage.urls) var urls = JSON.parse(localStorage.urls);
    else var urls = [];
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
    localStorage.urls = JSON.stringify(urls);
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
