//attributes: {key: value} --> az attributumokat járjuk be
// a 10. sorban

export function create(tag, attributes = {}, children = []) {
  const el = document.createElement(tag);

  // az objecjt.keys vissza ad egy tömböt amiben bármely objektum
  // kulcsai megtalálhatóak
  for (const key of Object.keys(attributes)) {
    // 2.set the el property by key
    // egy javascriptes objektum mezőjére dinamikusan így hivatkozunk
    el[key] = attributes[key];
  }

  for (const child of children) {
    el.append(child);
  }

  return el;
}

export function createCard(title, text, hidden, id) {
  const cardDiv = create(
    "div",
    {
      className: "card",
    },
    [
      create("h1", {
        innerText: title,
        className: "card__h1",
      }),
      create("p", {
        innerText: text,
        className: "card__p",
      }),
      create('pre', {
        innerHTML: hidden,
        className:"card__hidden",
        id: `info-${id}`
      }), 
      create("button", {
        className: "card__button",
        innerText: "Info",
        'data-target': `info-${id}`
      }),
    ]
  );
  return cardDiv;
}

export function createList(items) {
  const listUl = create("ul", {
    className: "list",
  });

  for (const item of items) {
    const listLi = create("li", {
      innerText: item, className: "list__li"
    });
    listUl.append(listLi);
  }
  return listUl;
}

export function createTable(headers, raws) {
    const table = create("table");

    const firstRaw = create("tr");
    for (const header of headers) {
        const th = create("th", { innerText: "header" });
        firstRaw.append(th);
    }

    table.append(firstRaw);
}
createTable("id", "name", "email");