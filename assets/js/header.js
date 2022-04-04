body = document.body;

// Scroll animation
window.addEventListener('scroll', () => {
    var scrolled = document.scrollingElement.scrollTop;
    body.style = "--scroll-ani:" + scrolled;
});
