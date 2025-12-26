async function loadPart(targetId, fileName) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const response = await fetch(fileName);
  const html = await response.text();
  target.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  loadPart("site-header", "header.html");
  loadPart("site-footer", "footer.html");
});
