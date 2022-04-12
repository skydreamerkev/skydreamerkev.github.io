function randomPage(pagelist) {
    var index = Math.floor(pagelist.length * Math.random());
    var url = pagelist[index]
    window.location.href = url;
}
