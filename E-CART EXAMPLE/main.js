import { products } from "./data";

let hamburger=document.getElementById('hamburger');
let nav_links=document.getElementById('nav-links')

hamburger.addEventListener('click',()=>{
    nav_links.classList.toggle('active')
})


let product_container=document.getElementById('product-container');


function render(productItems){
    let product=productItems.map(item=>{
        return `
            <div id='card'>
                <img src='${item.image}'>
                <h1>${item.title}</h1>
                <mark>${item.price}</mark><br><br>
                <button onclick="addToCart(${item.id})" id='btn'>Add to cart</button>
            </div>
        `
    })
    product_container.innerHTML=product.join('')
}
render(products)

let filterproducts=()=>{
    let input=document.getElementById('input').value;
    let dup_data=products.filter(item=>item.title.toLowerCase().includes(input.toLowerCase())||
        item.category.toLowerCase().includes(input.toLowerCase())
    )
    render(dup_data)
}

function addToCart(user){
    let temp_data=products.find(pro=>pro.id===user)
    alert(`${temp_data.title} added to rhe cart`)
    cart.push(temp_data)
    document.getElementById('cart').innerHTML=cart.length
    totalSum()
}

function filterdata(category){
    if(category==='all'){
        render(products)
    }
    else{
        let filter_data=products.filter(item=>item.category===category)
        render(filter_data)
    }
}

function totalSum(){
    let sum=cart.reduce((acc,val)=>{
        return acc+val.price
    },0)
    document.getElementById('total-sum').innerHTML=`Total Amount :<mark>${sum} </mark>`
}

