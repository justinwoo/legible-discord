// ==UserScript==
// @name Legible Discord
// @description Make Discord easier to read by setting the font and colors
// @match https://discordapp.com/channels/*
// @version 1.1
// ==/UserScript==

function log(msg) {
  console.log(`Legible Discord: ${msg}`);
}

log("Legible Discord is active.");

var body = document.body;
var array = Array.from;

body.style.fontFamily = "Noto Sans CJK JP";
log("Applied font family.");

function mkChangeStyleInterval(keyword, onFound) {
  var intervalId = setInterval(() => {
    var keywordClass = array(document.querySelectorAll("div"))
      .flatMap(c => array(c.classList))
      .find(c => c.includes(keyword));

    if (keywordClass) {
      onFound(keywordClass);
      clearInterval(intervalId);
    } else {
      log(`Could not find ${keyword} class. Trying again in 1s`);
    }
  }, 2000);
}

mkChangeStyleInterval("markup", markupClass => {
  document.querySelector("textarea").style.color = "#111111";
  console.log("Set text area color style.");
  var style = document.createElement("style");
  style.innerText = "." + markupClass + "{color:#111111!important}";
  body.append(style);
  log("Appended font color style.");
});
