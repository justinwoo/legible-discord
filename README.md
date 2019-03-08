# Legible Discord

Discord is too difficult for me to read with its default theme, so I made this. Do not use without reading the source code yourself.

## Installation

Open <chrome://extensions/> and drag `legible-discord.user.js` in.

## Code comments

* I hardcoded Noto Sans CJK JP, because that's the font I use. You might install it yourself or replace it. See <https://www.google.com/get/noto/>

* I use an interval because I do not know how else to know if the Discord application has finished loading.

* I iterate all of the divs in the page looking for "markup" as an infix, because the "CSS-in-JS" library used by Discord prevents me from being able to target the markup regularly. It's 2019 and this is what I have had to come up with.

## Contribution guidelines

* Do not change the default font from Noto Sans CJK JP.
