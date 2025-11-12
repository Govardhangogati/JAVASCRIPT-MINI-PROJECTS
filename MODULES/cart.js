let card_container=document.getElementById('card-container')
let cart=JSON.parse(localStorage.getItem('cart'))|| []

function renedrProducts(){
    if(cart.length===0){
        card_container.innerHTML='welcome to the cart'
    }

    let addedProduct=cart.map(item=>{
        return `
        <div id='card'>
            <img src="${item.img}" alt="">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <mark>${item.price}</mark><br><br>
            <button onclick="deleteItem()">Delete</button>
        </div>
        `
    })
     card_container.innerHTML=addedProduct.join('')
}
renedrProducts()
let price=cart.reduce((acc,value)=>{
    return acc+value.price
},0)

document.getElementById('price').innerHTML=price

window.deleteItem=(index)=>{
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    renedrProducts()
    let price=cart.reduce((acc,value)=>{
    return acc+value.price
},0)
document.getElementById('price').innerHTML=price

}
