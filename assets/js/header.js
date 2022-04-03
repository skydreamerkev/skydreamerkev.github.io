obj = document.body;

// Scroll animation

var scrollIndex = 2.5
// This variable controls the scale of the scrolling animation.
window.addEventListener('scroll', () => {
    var scrolled = document.scrollingElement.scrollTop;
    var winHeight = window.screen.height;
    var docHeight = document.scrollingElement.scrollHeight;

    if (winHeight * scrollIndex < docHeight) var durationHeight = winHeight;
    else var durationHeight = (docHeight - winHeight) * (1 - (1 / scrollIndex));
    o = (durationHeight < scrolled) ? 1 : (scrolled / durationHeight);
    // Output: Percentage of animation.
    body.style = "--scroll-ani:" + o;
});
