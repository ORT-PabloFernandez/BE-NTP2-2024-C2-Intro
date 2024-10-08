// import users from "../data/users.js";
import { userCSV } from "../data/usersCSV.js";
import Papa from "papaparse";

document.addEventListener("DOMContentLoaded", () => load());

function load() {
  //console.log(userCSV);
  const users = Papa.parse(userCSV, { header: true }).data;
  console.log(users);
  createUsers(users);
}

function createUsers(usuarios) {
  const main = document.getElementById("main");

  const users = document.createElement("ul");
  users.className = "users-list";
  main.appendChild(users);

  for (const user of usuarios) {
    const userItem = document.createElement("li");
    userItem.className = "user-item";
    users.appendChild(userItem);

    const card = document.createElement("div");
    card.className = "card user-item__content";
    userItem.appendChild(card);

    const link = document.createElement("a");
    link.href = `usuario.htm?userId=${user["Object Id"]}`;
    card.appendChild(link);

    const userItemImage = document.createElement("div");
    userItemImage.className = "user-item__image avatar";
    link.appendChild(userItemImage);

    const imageUser = document.createElement("img");
    imageUser.src = `images/${user["Display name"]}.jpg`;
    userItemImage.appendChild(imageUser);

    const userItemInfo = document.createElement("div");
    userItemInfo.className = "user-item__info";
    link.appendChild(userItemInfo);

    const nombreUser = document.createElement("h2");
    nombreUser.innerHTML = user["Display name"];
    userItemInfo.appendChild(nombreUser);

    const titleUser = document.createElement("h3");
    titleUser.innerHTML = user.Title;
    userItemInfo.appendChild(titleUser);

    const stateUser = document.createElement("h3");
    stateUser.innerHTML = user.State;
    userItemInfo.appendChild(stateUser);
  }
}
