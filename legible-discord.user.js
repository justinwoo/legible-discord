// ==UserScript==
// @name Legible Discord
// @description Make Discord easier to read by setting the font and colors
// @match https://discordapp.com/channels/*
// ==/UserScript==

function log(msg) {
  console.log(`Legible Discord: ${msg}`);
}

log("Legible Discord is active.");

var body = document.body;
var array = Array.from;

body.style.fontFamily = "Noto Sans CJK JP";
log("Applied font family.");

var intervalId = setInterval(function() {
  var markupClass = array(document.querySelectorAll("div"))
    .flatMap(c => array(c.classList))
    .find(c => c.includes("markup"));

  if (markupClass) {
    document.querySelector('textarea').style.color = '#111111';
    console.log("Set text area color style.");

    clearInterval(intervalId);
    var style = document.createElement("style");
    style.innerText = "." + markupClass + "{color:#111111!important}";
    body.append(style);
    log("Appended font color style.");
  } else {
    log("Could not find markup class. Trying again in 1s");
  }
}, 1000);
