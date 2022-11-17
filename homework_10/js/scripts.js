"use strict";

let requestURL = "https://reqres.in/api/users?per_page=12";
fetch(requestURL)
  .then((responce) => responce.json())
  .then((data) => {
    let dataUser = data.data;

    console.log("----------Пункт 1---------");
    dataUser.forEach((user) => {
      console.log(
        `id: ${user.id}, email: ${user.email}, first name: ${user.first_name}, last name: ${user.last_name}, avatar: ${user.avatar}\n`
      );
    });

    console.log("----------Пункт 2---------");
    dataUser.forEach((user) => {
      console.log(`last name: ${user.last_name}`);
    });

    console.log("----------Пункт 3---------");
    let letterFilter = "F";
    let lastNameFiltered = dataUser.filter(
      (item) => item.last_name[0] === letterFilter
    );

    let lastNameFilteredString = "";
    lastNameFiltered.forEach((item, index, array) => {
      if (index === array.length - 1) {
        lastNameFilteredString += item.last_name + ".";
      } else {
        lastNameFilteredString += item.last_name + ", ";
      }
      return lastNameFilteredString;
    });

    if (lastNameFilteredString === "" || lastNameFilteredString === undefined) {
      console.log(`Пользователи на букву: ${letterFilter} не найдено`);
    } else {
      console.log(lastNameFilteredString);
    }

    console.log("----------Пункт 4---------");
    let dbUsers = dataUser.reduce((acc, item, index, array) => {
      if (index === array.length - 1) {
        acc += item.first_name + " " + item.last_name + ".";
      } else {
        acc += item.first_name + " " + item.last_name + ", ";
      }
      return acc;
    }, "Наша база содержит данные следующих пользователей: ");
    console.log(dbUsers);

    console.log("----------Пункт 5---------");
    let userKeys = Object.keys(dataUser[1]);
    for (let i = 0; i < userKeys.length; i++) {
      console.log(userKeys[i]);
    }
  })

  .catch((error) => {
    console.log(error);
  });

/* 
{
    "page":1,
    "per_page":6,
    "total":12,
    "total_pages":2,
    "data":[
        {"id":1,
        "email":"george.bluth@reqres.in",
        "first_name":"George",
        "last_name":"Bluth",
        "avatar":"https://reqres.in/img/faces/1-image.jpg"},

        {"id":2,
        "email":"janet.weaver@reqres.in",
        "first_name":"Janet","last_name":"Weaver",
        "avatar":"https://reqres.in/img/faces/2-image.jpg"},

        {"id":3,
        "email":"emma.wong@reqres.in",
        "first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
*/
