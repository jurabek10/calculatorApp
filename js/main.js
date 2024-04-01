(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let value = event.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", (event) => {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", (event) => {
    screen.value = "";
  });
})();
