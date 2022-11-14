let allTotal = 0;

function addToCart(element){
    let mainEL = element.closest(".single-item")
    let price = mainEL.querySelector("h3").innerText
    let name = mainEL.querySelector("h4").innerText
    let quantity = mainEL.querySelector("input").value
    let cartItems = document.querySelector(".cart-items")


    if (parseInt(quantity) > 0){

        price = price.substring(1, price.length)
        price = parseInt(price)
        quantity = parseInt(quantity)
        let total = price * quantity

        allTotal += total

        cartItems.innerHTML += `<div class="list"><p><h5>${name} </h5>  : $${price} * ${quantity} = $<span>${total}</span> 
                                <button class="remove-item" onclick="removeFromCart(this)">Remove</button> </p> </div>   `

        document.querySelector(".total").innerText = ` Total is: $${allTotal}`        
                                
        element.innerText = "Added"
        element.setAttribute("disabled", "true")
    } else{
        alert("You must pick a quantity of certain vegetable")
    }
    

}

function removeFromCart(element){
    let mainEL = element.closest(".list")
    let price = mainEL.querySelector("span").innerText
    let total = document.querySelector(".total")
    let name = mainEL.querySelector("h5").innerText
    let vegetables = document.querySelectorAll(".single-item")
    price = parseInt(price)
    allTotal -= price
    total.innerText = ` Total is: $${allTotal}`
    mainEL.remove()
    vegetables.forEach(
        function (vege){
            let itemName = vege.querySelector(".si-content h4").innerText
            if(itemName ===  name){
                vege.querySelector(".actions input").value = 0;
                vege.querySelector(".actions button").removeAttribute("disabled")
                vege.querySelector(".actions button").innerText = "Add";
            }
        }
    )
}