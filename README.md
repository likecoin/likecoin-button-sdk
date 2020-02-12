# LikeCoin button SDK

This is a script for embeding [LikeCoin button](https://like.co/in/creator) into webpages.

## Usage

1. Add the following `div` tag into the webpage at the position for embedding LikeCoin button:

`<div class="likecoin-button-like" data-liker-id="{YOUR_LIKECOIN_ID}" data-href="YOUR_WEBPAGE_URL"></div>`

Here, `data-liker-id` is required and refers to your LikeCoin ID, where `data-href` is optional and refers to your page's canonical URL. If omitted, the SDK will use the current URL of the browser.

2. Add the following `script` tag at the end of the `body` tag:

`<script src="sdk.js"></script>`

See `dist/index.html` as an example.

## Build

1. `npm install`
2. `npm run build`