export default function removeHash() {
  let url = window.location.toString()
  window.history.replaceState('', document.title, url.split("#")[0])
}
