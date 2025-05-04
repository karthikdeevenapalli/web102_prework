# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Karthik Deevenapalli**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **20** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [ ] List anything else that you can get done to improve the app functionality!

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src="prework-walkthrough.gif"
     title="Video Walkthrough"
     alt="GIF of app walkthrough" />


<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

During development, I encountered and resolved several challenges:

ID mismatches between HTML and JS
Initially, my getElementById(…) calls returned null because my HTML IDs didn’t exactly match the ones in index.js. Carefully renaming elements (e.g. id="contributions-card" vs. id="num-contributions") fixed the undefined-variable errors and let my stats populate.

Module import errors
My ES6 import (import GAMES_DATA from './games.js') failed until I declared my script tag with type="module" and placed it after all the DOM markup. Without that, nothing in index.js ran.

Re-rendering cards without duplication
When filtering, I needed to clear out existing game cards before adding the new set. Implementing and calling deleteChildElements(gamesContainer) prevented old cards from stacking up.

Number formatting quirks
Using .toLocaleString() neatly added thousands separators, but for currency I had to prepend a $ manually. I also verified in the console that my reduce sums matched expectations.


## License

    Copyright 2025 Karthik Deevenapalli

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
