const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches("#ella")) {
    e.target.classList.toggle("pink");
    e.target.innerHTML = "<p>Tqm desconocido</p>";

    setInterval(() => {
      e.target.innerHTML = "";
    }, 10000);
  }
});
