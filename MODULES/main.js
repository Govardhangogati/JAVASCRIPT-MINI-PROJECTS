import { mobiles } from "./data.js"

let card_container=document.getElementById('card-container')
let cart=JSON.parse(localStorage.getItem('cart'))|| []
document.getElementById('cart').innerHTML=cart.length

function renderProducts(products){

    let product=products.map(item=>{
        return `
        <div id='card'>
            <img src="${item.img}" alt="">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <mark>${item.price}</mark><br><br>
            <button onclick="addProduct(${item.id})">Add to cart</button>
        </div>
        `
    })
    card_container.innerHTML=product.join('')
}

renderProducts(mobiles)



window.filterData=()=>{
    let input=document.getElementById('input').value
    let filterdata=mobiles.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
    renderProducts(filterdata)

}

window.addProduct=(user)=>{
    let cart=JSON.parse(localStorage.getItem('cart'))|| []
    

    let addedData=mobiles.find(item=>item.id===user)
    cart.push(addedData)
    localStorage.setItem('cart',JSON.stringify(cart))
    document.getElementById('cart').innerHTML=cart.length

}