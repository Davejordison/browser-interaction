import { createCard } from "./src/ui.js";

const root = document.querySelector("#root");

function handleInfoBottonClick(event) {
  const dataTarget = event.target["data-target"];
  const info = document.querySelector(`[id='${dataTarget}']`);

  console.log(info);
  //const info = event.target.parentElement.querySelector(".card__hidden");
  info.classList.toggle("visible");

  //console.log(event.target['data-target']);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) => {
    for (const user of users) {
      root.append(
        createCard(
          user.name,
          `${user.email} / ${user.company.name}`,
          JSON.stringify(user.address, null, 2),
          user.id
        )
      );
    }

    document.querySelectorAll(".card__button").forEach((btn) => {
      //események
      btn.addEventListener("click", handleInfoBottonClick);
      //btn.onclick = handleInfoBottonClick;
    });
  });

/*
root.append(createList(["valami", "test", "adat", "item"]));
root.append(createCard("Első", "Bla bla bla"));
root.append(createCard("Második", "Bla bla bla"));
root.append(createCard("Harmadik", "Bla bla bla"));
root.append(createCard("Negyedik", "Bla bla bla"));
root.append(createCard("Ötödik", "Bla bla bla"));
*/

//document.body.querySelector("#root").append(div);
