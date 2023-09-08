const d = document,
  $cardTemplate = d.getElementById("card-template").content,
  $formTemplate = d.getElementById("form-template").content,
  $form = d.getElementById("todo-form"),
  $addForm = d.getElementById("add-form"),
  $formDiv = d.querySelector(".form-div"),
  $todo = d.getElementById("todo-cards"),
  $fragment = d.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:3000/todo"),
      json = await res.json();
    // console.log(json);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    for (let i = 0; i < json.length; i++) {
      // console.log(json[i]);
      $cardTemplate.querySelector(".num").textContent = i + 1;
      $cardTemplate.querySelector(".thing").textContent = `${json[i].thing}`;

      $cardTemplate.querySelector(".multiple-btn").dataset.id = json[i].id;
      $cardTemplate.querySelector(".multiple-btn").dataset.thing =
        json[i].thing;

      let $clone = d.importNode($cardTemplate, true);
      $fragment.appendChild($clone);
    }
    $todo.appendChild($fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";

    $todo.innerHTML += `
    <h3><i>Error ${err.status}: ${message}</i></h3>
    `;
  }
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
  if (e.target.matches("#todo-form *")) {
    e.preventDefault();
    if (!e.target.id.value) {
      try {
        let options = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              thing: e.target.thing.value,
            }),
          },
          res = await fetch("http://localhost:3000/todo", options),
          json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $todo.innerHTML += `
         <h3><i>Error ${err.status}: ${message}</i></h3>
        `;
      }
    } else {
      try {
        // PUT
        let options = {
            method: "PUT",
            headers: {
              "Content-type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              thing: e.target.thing.value,
            }),
          },
          res = await fetch(
            `http://localhost:3000/todo/${e.target.id.value}`,
            options
          );
        console.log(e.target.id.value);
        console.log(options);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $todo.innerHTML += `
         <h3><i>Error ${err.status}: ${message}</i></h3>
        `;
      }
    }
  }
});

d.addEventListener("click", async (e) => {
  if (e.target.matches("#add-form")) {
    if ($formDiv.hasChildNodes() === true) return;

    let $clone = d.importNode($formTemplate, true);
    $formDiv.appendChild($clone);
  }

  if (e.target.matches("#cancel")) {
    e.preventDefault();
    $formDiv.innerHTML = "";
    location.reload();
  }

  if (e.target.matches(".multiple-btn")) {
    let html = `
      <div class="modal-btn">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </idv>
    `;

    if (d.querySelector(".card").children[4] !== undefined) return;

    console.log(d.querySelector(".card").children[4]);
    e.target.insertAdjacentHTML("afterend", html);
  }

  if (e.target.matches(".edit-btn")) {
    // console.log("hiii");
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    let $multipleBtn = e.target.parentNode,
      $form = $formTemplate.querySelector("form");

    $multipleBtn = $multipleBtn.parentNode.querySelector(".multiple-btn");

    console.log($multipleBtn);

    d.getElementById("todo-form").querySelector("h2").textContent =
      "Edit thing";

    if ($formDiv.hasChildNodes()) {
      alert("finish the process or cancel in the button");
      return;
    }

    $form.thing.value = $multipleBtn.dataset.thing;
    $form.id.value = $multipleBtn.dataset.id;

    let $clone = d.importNode($formTemplate, true);
    $formDiv.appendChild($clone);
  }

  if (e.target.matches(".delete-btn")) {
    // console.log("hi");
  }
});
