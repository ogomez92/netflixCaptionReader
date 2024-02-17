// ==UserScript==
// @name         Netflix A11y
// @namespace    https://*.netflix.com
// @version      0.1
// @description  try to take over the world!
// @author       Oriol Gomez
// @match        https://*.netflix.com/*
// @run-at document-end
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

/* global $ */

(function () {
  // Create an ARIA region
  const speaker = document.createElement('p');

  document.body.appendChild(speaker);
  speaker.setAttribute('aria-live', 'polite');

  // DOM Class where captions are stored on the page
  const NETFLIX_CAPTION_ELEMENT_CLASS = '.player-timedtext-text-container';

  let previousText = '';

  const speakCaptions = function () {
    let text = '';
    // grab all subtitles on the page in a single DOM node array
    // TODO: separate the text into different strings and add newlines
    const all = $(`${NETFLIX_CAPTION_ELEMENT_CLASS} > span`);

    // If none are found, clear ARIA region
    if (all.length < 1) {
      previousText = '';
      text = '';
    } else {
      text = all.text();
    }
    if (previousText !== text) {
      speaker.innerHTML = text;
      previousText = text;
    }
  };

  // Check continuously. 200 ms shouldn't affect CPU
  setInterval(speakCaptions, 200);

  // If CTRL shift r is pressed, report title remaining by getting the span with the data-uia="controls-time-remaining" and putting it as speaker innerText
  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyR') {
      event.preventDefault()
      const remaining = document.querySelector('span[data-uia="controls-time-remaining"]')
      speaker.innerText = remaining.innerText
    }

    if (event.ctrlKey && event.shiftKey && event.code === 'KeyE') {
      event.preventDefault()
      const title = document.querySelector('div[data-uia="video-title"]')
      // Get the text of all spans contained inside this div
      const spans = title.querySelectorAll('span')
      const text = Array.from(spans).map(span => span.innerText).join(' ')
      speaker.innerText = text
    }
  })
}());
