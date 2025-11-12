import { products } from "./data.js";

let task=JSON.parse(localStorage.getItem('task'))||[]
document.getElementById('cart').innerHTML=task.length

let product_container = document.getElementById('product-container');

function render(list) {
    let product = list.map(item => {
        return `
            <div id='card'>
                <img src='${item.image}' width="200" height="200">
                <h2>${item.title}</h2>
                <p>${item.category}</p>
                <mark>₹${item.price}</mark><br><br>
                <button onclick="addToCart(${item.id})">Add to cart</button>
            </div>
        `;
    });
    product_container.innerHTML = product.join('');
}
render(products);


window.filterProducts=()=> {
    let input = document.getElementById('input').value.toLowerCase();


    let filterData = products.filter(item =>
        item.title.toLowerCase().includes(input)
    );


    render(filterData);
}

window.filtercategory=(category)=>{
    if(category=='all'){
        render(products)
    }
    else{
        let filterData=products.filter(item=>item.category===category)
        render(filterData)
    }
}


window.addToCart=(user)=>{
    let task=JSON.parse(localStorage.getItem('task'))||[]
    let addedData=products.find(item=>item.id===user)
    task.push(addedData)
    localStorage.setItem('task',JSON.stringify(task))
    document.getElementById('cart').innerHTML=task.length
}




