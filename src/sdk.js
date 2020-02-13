const elements = document.querySelectorAll('div.likecoin-button-like');
elements.forEach((div) => {
  const likerId = div.getAttribute('data-liker-id');
  if (!likerId) {
    // eslint-disable-next-line no-console
    console.error('Cannot get data-liker-id attribute from LikeCoin button element');
    return;
  }
  let href = div.getAttribute('data-href');
  if (!href) {
    href = window.location.href;
  }
  href = encodeURIComponent(href);
  const src = `https://button.like.co/in/embed/${likerId}/button?referrer=${href}`;
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('scrolling', 'no');
  div.appendChild(iframe); // TODO: replace div by iframe, instead of appending iframe under div
});
