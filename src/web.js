const style = document.createElement('style');
style.innerHTML = `
.likecoin-button {
  position: relative;
  width: 100%;
  max-width: 485px;
  max-height: 240px;
  margin: 0 auto;
}
.likecoin-button > div {
  padding-top: 49.48454%;
}
.likecoin-button > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;
document.body.appendChild(style);

const elements = document.querySelectorAll('.likecoin-embed.likecoin-button');
elements.forEach((div) => {
  const { likerId, iscnId, puid } = div.dataset;
  const href = div.dataset.href || window.location.href;

  if (!iscnId && !likerId) {
    // eslint-disable-next-line no-console
    console.error('Cannot get data-liker-id attribute from LikeCoin button element');
    return;
  }

  let src = iscnId
    ? `https://button.like.co/in/embed/iscn/button?iscn_id=${encodeURIComponent(
      iscnId,
    )}`
    : `https://button.like.co/in/embed/${likerId}/button?referrer=${encodeURIComponent(
      href,
    )}`;

  // Get platform user ID, e.g. Author
  if (puid) {
    src = `${src}&puid=${puid}`;
  }

  // eslint-disable-next-line no-param-reassign
  div.textContent = ''; // clear all children before injecting
  // Inject a spacer for maintaining the aspect ratio for the `<iframe/>`
  div.appendChild(document.createElement('div'));

  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('scrolling', 'no');
  div.appendChild(iframe);
});
