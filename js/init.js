(function () {
  console.log("app.js");
  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
  });

  overworld.init();
})();
