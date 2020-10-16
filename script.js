window.addEventListener("load", function (_) {
  const pages = Array.from(document.querySelectorAll("#slider > .page"));
  let now = 0;
  const [left, right] = [
    document.querySelector("#left"),
    document.querySelector("#right"),
  ];
  left.addEventListener("click", function (_ev) {
    const page = pages[--now < 0 ? ++now : now];
    page.style.setProperty("width", "100vw");
  });
  right.addEventListener("click", function (_ev) {
    const page = pages[now++];
    if (now === pages.length) return now--;
    page.style.setProperty("width", "0px");
  });
});
