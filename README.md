# Introduction

This userscript will automatically read Netflix captions (subtitles) for you.
Additionally you can check episode or movie name (Ctrl shift E) and remaining time (ctrl shift r)

## Usage

1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=es) for your browser of choice. You have extensions for Safari, Chrome, and probably Firefox and all the others.
2. Give it any permisions it might need, depending on the browser you are using you will need to do different things. Check your browser for any prompts.
3. Create a new userscript by going to the Tampermonkey icon on the toolbar (f6 in Chrome or interact with the Safari toolbar) and paste in the code found in captionReader.js. Note that the editor in Tampermonkey is inaccessible, you'll need to use Vscode or something else if you want to edit the file.

The script uses ARIA to relay the text to the screen reader. Please make sure that reading dynamic content changes (NVDA) or read live regions (VoiceOver) is turned on. This has been tested with Google Chrome, Edge and Safari.

Hotkeys:

- CTRL shift E: Say video title (episode / movie)
- Ctrl shift r: say remaining time (in hours/minutes/seconds or whatever your netflix displays).

## Known issues

Currently this script has an issue where some lines of text are read together. This is because I am grabbing all the text with jquery and not separating it. This will be fixed in a future release.

## Troubleshooting

If you have any problems or questions, please open an issue or a Pull Request. Any feedback is welcome.
