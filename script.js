window.addEventListener("load", function (_) {
  const pages = Array.from(document.querySelectorAll("#slider > .page"));
  const x = getComputedStyle(pages[0]).width;
  let now = 0;
  const [left, right] = [
    document.querySelector("#left"),
    document.querySelector("#right"),
  ];
  left.addEventListener("click", function (ev) {
    const page = pages[--now < 0 ? ++now : now];
    page.style.setProperty("width", x);
  });
  right.addEventListener("click", function (ev) {
    const page = pages[now++];
    if (now === 6) --now;
    page.style.setProperty("width", "0px");
  });
});
