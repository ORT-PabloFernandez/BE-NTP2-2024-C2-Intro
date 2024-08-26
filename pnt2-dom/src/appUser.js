document.addEventListener("DOMContentLoaded", () => load());

function load() {
  const user = {
    "Block credential": "FALSE",
    City: "Bloomington",
    "Country/Region": "United States",
    Department: "R&D",
    DirSyncEnabled: "",
    "Display name": "Grady Archie",
    Fax: "",
    "First name": "Grady",
    "Last dirsync time": "2022-03-14 14:45:23Z",
    "Last name": "Archie",
    "Last password change time stamp": "",
    "License assignment details":
      "Microsoft 365 E5 Developer (without Windows and Audio Conferencing)",
    Licenses: "",
    "Mobile Phone": "",
    "Oath token meta data": "",
    "Object Id": "302ddc87-c65a-437f-83de-aa8672f8e8a3",
    Office: "19/2109",
    "Password never expires": "",
    "Phone number": "+1 309 555 0104",
    "Postal code": "61704",
    "Preferred data location": "",
    "Preferred language": "en-US",
    "Proxy addresses": "SMTP:GradyA@tecnosharedev.onmicrosoft.com",
    "Release track": "",
    "Soft deletion time stamp": "",
    State: "IL",
    "Street address": "2203 E. Empire St., Suite J",
    "Strong password required": "",
    Title: "Designer",
    "Usage location": "US",
    "User principal name": "GradyA@tecnosharedev.onmicrosoft.com",
    "When created": "2020-05-23 19:59:03Z",
  };
  createUser(user);
}

function createUser(user) {
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

  const titleUser = document.createElement("h2");
  titleUser.innerHTML = user.Title;
  userItemInfo.appendChild(titleUser);

  const stateUser = document.createElement("h3");
  stateUser.innerHTML = user.State;
  userItemInfo.appendChild(stateUser);
}
