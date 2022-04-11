footnotes = document.querySelector("#content > div.footnotes");

if (footnotes) {
    footnotes_target = document.querySelector("#footnotes-target");

    footnotes_target.outerHTML = footnotes.outerHTML;
    footnotes.outerHTML = "";
} else
    document.getElementById("footnote-title").style.display = "none";
