// fetch('https://reqres.in/api/products')
//   .then((response) => response.json())
//   .then((myJson) => {
//     let parentElem = document.createElement("ul");
//     parentElem.classList.add('productListing');
//     document.body.appendChild(parentElem);
//     myJson.data.map((item, key) => {
//       let childElem = document.createElement("li");
//       childElem.innerHTML = `<span class="test">${item.id}.</span> <a href="#">${item.name}</a> <span class="test">${item.year}</span> <span class="test">${item.color}</span>`;
//       parentElem.appendChild(childElem);
//     });
//   });


fetch('https://reqres.in/api/users')
  .then((response) => response.json())
  .then((myJson) => {
    let loader = document.getElementById('loader');
    loader.classList.add('hide');
    let parentElem = document.createElement("ul");
    parentElem.classList.add("userListing", "clearfix");
    document.body.appendChild(parentElem);
    myJson.data.map((item, key) => {
      let childElem = document.createElement("li");
      childElem.innerHTML = `<img src="${item.avatar}"/> <a href="#">${item.email}</a> <span class="test">${item.id}.${item.first_name} ${item.last_name}</span>`;
      parentElem.appendChild(childElem);
    });
  });
