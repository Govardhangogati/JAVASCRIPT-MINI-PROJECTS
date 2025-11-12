// async function render(){
//     let product_container=document.getElementById('product-container')
//     let data=await fetch(`https://dummyjson.com/products?limit=100`)
//     let {products}=await data.json()
//     console.log(products)
//     let product=products.map(item=>{
//         return`
//             <div id="card">
//                  <img src="${item.thumbnail}" alt="">
//                 <h1>${item.title}</h1>
//                 <p>${item.description}</p>
//             </div>
//         `
//     })
//     product_container.innerHTML=product.join('')

    

    

// }
// render()

let productvalues=[]
async function render(){
    let data=await fetch('https://dummyjson.com/products?limit=100')
    let {products}=await data.json()
    productvalues=products
    displayProducts(productvalues)

}

function displayProducts(products){
    let product_container=document.getElementById('product-container')
    let product=products.map(item=>{
        return`
            <div id="card">
                <img src="${item.thumbnail}" alt="">
                <h1>${item.title}</h1>
                <p>${item.description}</p>
            </div>
        `
    })
    product_container.innerHTML=product.join('')
}

function filter(){
    let input=document.getElementById('input').value
    let filter_data=productvalues.filter(item=>item.title.toLowerCase().includes(input.toLowerCase())
    )
    displayProducts(filter_data)
}

render()