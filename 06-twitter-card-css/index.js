document.addEventListener("click", (e) => {
  if (e.target.matches("#user-follow-btn")) {
    // alert("you touched on Follow btn");
    window.open("https://jonmircha.com");
  }

  // console.log(e.target);

  if (e.target.matches(".img-card-post img")) {
    let $figure = document.querySelector("div figure");
    // console.log($figure.children);

    if ($figure.children[1] === document.querySelector(".span-post")) {
      return false;
    }

    // console.log("hi");
    let $img = e.target,
      $span = document.createElement("span");

    $span.classList.add("span-post");
    $span.textContent = $img.alt.toUpperCase();
    // console.log($span);

    $img.insertAdjacentElement("afterend", $span);
  }
});
