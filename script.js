window.addEventListener("load", function (_) {
  function sleep(ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
    });
  }
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
  setInterval(async function () {
    if (now === pages.length - 1)
      for (let i = 0; i < 6; i++) {
        await sleep(333);
        left.click();
      }
    else right.click();
  }, 3000);
});
