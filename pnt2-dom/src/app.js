function load() {
  //TODO: Voy a recibir un listado usuarios, un array de usuario, tengo que
  // llamar a la funcion createUser cuantas veces sea necesario
  // quiero que el listado se genere con el componente

  let usuarios = [
    { nombre: "Adele Vance", twitter: "@adelev" },
    { nombre: "Alex Wilber", twitter: "@alexw" },
  ];

  const usuario = { nombre: "Adele Vance", twitter: "@adelev" };
  createUser(usuario);

  const usuario2 = { nombre: "Alex Wilber", twitter: "@alexw" };
  createUser(usuario2);
}

function createUser(user) {
  //TODO: Corregir el tema del ul, se esta generando todo el tiempo que se llama
  // a createUser, solo se tiene que generar una vez para todos

  const main = document.getElementById("main");

  const users = document.createElement("ul");
  users.className = "users-list";
  main.appendChild(users);

  const userItem = document.createElement("li");
  userItem.className = "user-item";
  users.appendChild(userItem);

  const card = document.createElement("div");
  card.className = "card user-item__content";
  userItem.appendChild(card);

  const link = document.createElement("a");
  link.href = "#";
  card.appendChild(link);

  const userItemImage = document.createElement("div");
  userItemImage.className = "user-item__image avatar";
  link.appendChild(userItemImage);

  const imageUser = document.createElement("img");
  imageUser.src = `images/${user.nombre}.jpg`;
  userItemImage.appendChild(imageUser);

  const userItemInfo = document.createElement("div");
  userItemInfo.className = "user-item__info";
  link.appendChild(userItemInfo);

  const nombreUser = document.createElement("h2");
  nombreUser.innerHTML = user.nombre;
  userItemInfo.appendChild(nombreUser);

  const twitterUser = document.createElement("h2");
  twitterUser.innerHTML = user.twitter;
  userItemInfo.appendChild(twitterUser);
}
