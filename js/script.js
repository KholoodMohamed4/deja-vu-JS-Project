var elements = document.querySelectorAll(".card-body .card-title");
var cart = document.querySelector("#Cart");
var model = document.querySelector(".modal-body")
var show = document.getElementById("Total-price");
var res = document.getElementById("TotalPrice");


var totalPrice = 0;
var totalElements = 0;


elements.forEach(function (item) {
    item.onclick = function () {
        totalPrice += Number(item.getAttribute("price"));
        totalElements ++;
        cart.textContent = totalElements;
        model.innerHTML += item.textContent + "<br>";
    }
});

res.style.fontSize = "1.3rem";
show.onclick = function () {
    res.innerHTML = "Total Price = " + totalPrice ;
}