// let toBasketBtn = document.querySelectorAll(".add-bag");



// toBasketBtn.forEach(btn => {
//     btn.addEventListener("click", function () {

//         let item = addBasketElem(this);

//         cardTableBody.innerHTML +=
//             `<tr data-id = ${item.id}>
//         <td class="w-25">
//           <img src="${item.img}" class="img-fluid img-thumbnail" alt="Sheep">
//         </td>
//         <td>${item.model}</td>
//         <td>${item.price}</td>
//         <td class="qty">${item.count}</td>
//         <td>${parseInt(item.price) * item.count}$</td>
//         <td>
//           <i class="fa fa-times"></i>
//         </td>
//       </tr>`


//     })
// });



// // function addBasketElem(elem) {
// return {
//     id: elem.parentElement.dataset.id,
//     price: elem.parentElement.previousElementSibling.children[0].innerText.substring(1, elem.parentElement.previousElementSibling.children[0].innerText.length),
//     name: elem.parentElement.previousElementSibling.previousElementSibling.innerText.toUpperCase(),
//     img: elem.parentElement.parentElement.previousElementSibling.src,
//     count: 1
// }
// // }




















// let toBasketBtns = document.querySelectorAll(".add-bag");

// checkBasket();

// let basket = JSON.parse(localStorage.getItem("basket"));
// let x = document.querySelector(".tBody");
// toBasketBtns.forEach(btn => {
//     btn.addEventListener("click",function(){
//         checkBasket();
//         let basket = JSON.parse(localStorage.getItem("basket"));
//         let basketItem = getBasketElm(this)
//         if (basket.find(x=>x.id == basketItem.id) == undefined) {
//             basket.push(basketItem);
//         }
//         else{
//             basket.find(x=>x.id == basketItem.id).count++
//         }
//         localStorage.setItem("basket",JSON.stringify(basket))
//     })
// });

// function checkBasket(){
//     if (!localStorage.getItem("basket")) {
//         localStorage.setItem("basket",JSON.stringify([]))
//     }
    
// }


// function getBasketElm(elem){
//     return{
//         id:elem.parentElement.dataset.id,
//         price: elem.parentElement.previousElementSibling.children[0].innerText.substring(1,elem.parentElement.previousElementSibling.children[0].length),
//         name : elem.parentElement.previousElementSibling.previousElementSibling.innerText.toUpperCase(),
//         img : elem.parentElement.parentElement.previousElementSibling.src,
//         count : 1
//     }
    
// }
// function addBasketItem(){

// }

// function fillBasket(){
//     checkBasket();
//     let basketItems = JSON.parse(localStorage.getItem("basket"));

//     tBody.innerHTML = "";
//     itemCount +=item.count ;
//     basketItems.forEach(
//         item=>{
//             itemCount += item.count;
//              tBody.innerHTML += 
//             `<tr data-id = ${item.id}>
//              <td class="w-25">
//           <img src="${item.img}" class="img-fluid img-thumbnail" alt="Sheep">
//         </td>
//         <td>${item.model}</td>
//         <td>${item.price}</td>
//         <td class="qty">${item.count}</td>
//         <td>${parseInt(item.price)*item.count}$</td>
//         <td>
//           <i class="fa fa-times"></i>
//         </td>
//       </tr>`
//         }
//     )
// }






let toBasketbtns = document.querySelectorAll(".add-bag");

toBasketbtns.forEach(btn => {
  btn.parentElement.addEventListener("click", function () {
    addBasketItem(this);
    fillBasket();
  })
});

function addBasketItem(elem){
  checkBasket();
  let basket = JSON.parse(localStorage.getItem("basket"));
  let basketItem = getBasketItem(elem);
  if(basket.find(b => b.id == basketItem.id) == undefined){
    basket.push(basketItem);
  }
  else{
    basket.find(b => b.id == basketItem.id).count += 1;
  }
  localStorage.setItem("basket",JSON.stringify(basket))
}

function getBasketItem(elem) {
    return{
        id:elem.parentElement.dataset.id,
        price: elem.parentElement.previousElementSibling.children[0].innerText.substring(1),
        name : elem.parentElement.previousElementSibling.previousElementSibling.innerText.toUpperCase(),
        img : elem.parentElement.parentElement.previousElementSibling.src,
        count : 1
    }

 
}
let tBody = document.querySelector(".tBody");
function fillBasket() {
  checkBasket();
  let basketItems = JSON.parse(localStorage.getItem("basket"));
  tBody.innerHTML = "";
  
  basketItems.forEach(
    item=>{
      itemCount += item.count;
      tBody.innerHTML += 
      `<tr data-id = ${item.id}>
        <td class="">
          <img src="${item.img}" class="" alt="">
        </td>
        <td>${item.model}</td>
        <td>${item.price}</td>
        <td class="">${item.count}</td>
        <td>${parseInt(item.price)*item.count}$</td>
        <td>
          <i class="fa fa-times"></i>
        </td>
      </tr>`
    }
  )
}

checkBasket();
fillBasket() 

function checkBasket() {
  if (!localStorage.getItem("basket")) {
    localStorage.setItem("basket",JSON.stringify([]))
  }
}











////--------------------------------------------------------------------------------------



const btn = document.getElementById('btn');
const tables = document.getElementById("table-div")

btn.addEventListener('click', () => {

    tables.classList.toggle("hide")

});
