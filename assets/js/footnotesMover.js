footnotes = document.querySelector("#content > div.footnotes");
footnotes_target = document.querySelector("#footnotes-target");

footnotes_target.outerHTML = footnotes.outerHTML;
footnotes.outerHTML = "";
