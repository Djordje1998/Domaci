eventListeners();
function eventListeners() {
  const ui = new UI();

  const link = document.querySelectorAll(".picture-item_icon");

  link.forEach(function(item) {
    item.addEventListener("click", function(event) {
      ui.showWin(event);
    });
  });

  document
    .querySelector(".picture-win_close")
    .addEventListener("click", function() {
      ui.closeWin();
    });
}

function UI() {}

UI.prototype.showWin = function(event) {
  if (event.target.parentElement.classList.contains("picture-item_icon")) {
    let id = event.target.parentElement.dataset.id;
    const win = document.querySelector(".picture-win");
    const winItem = document.querySelector(".picture-win_item");

    win.classList.add("picture-win-show");
    winItem.style.backgroundImage = `url(image/img-${id}.jpg)`;
  }
};

UI.prototype.closeWin = function() {
  document.querySelector(".picture-win").classList.remove("picture-win-show");
};
