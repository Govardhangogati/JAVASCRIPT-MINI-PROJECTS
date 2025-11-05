let hamburger=document.getElementById('hamburger');
let nav_links=document.getElementById('nav-links')

hamburger.addEventListener('click',()=>{
    nav_links.classList.toggle('active')
})


let products=[
    {id:1,category:'mobiles',title:'Samsung',price:20000,image:"../assets/samsungmobile.webp"},
    {id:2,category:'mobiles',title:'Vivo',price:30000,image:"../assets/vivo.webp"},
    {id:3,category:'mobiles',title:'iphone',price:20000,image:"../assets/iphone.webp"},
    {id:4,category:'mobiles',title:'Motorolo',price:30000,image:"../assets/motorola.jpg"},
    {id:5,category:'mobiles',title:'Realmi',price:20000,image:"../assets/realmi.webp"},
    {id:6,category:'mobiles',title:'Google',price:30000,image:"../assets/google.png"},
    {id:7,category:'televisions',title:'LG',price:30000,image:"../assets/lg television.png"},
    {id:8,category:'televisions',title:'ASUS',price:30000,image:"../assets/asus.webp"},
    {id:9,category:'televisions',title:'Croma',price:30000,image:"../assets/croma television.jpg"},
    {id:10,category:'televisions',title:'Infinix',price:30000,image:"../assets/infinix television.jpeg"},
    {id:11,category:'televisions',title:'Hitachi',price:30000,image:"../assets/hitachi television.webp"},
    {id:12,category:'laptops',title:'Dell',price:30000,image:"../assets/dell laptop.jpg"},
    {id:13,category:'laptops',title:'ACER',price:30000,image:"../assets/acer laptop.jpg"},
    {id:14,category:'laptops',title:'Macbook',price:30000,image:"../assets/macbook laptop.jpg"},
    {id:15,category:'laptops',title:'HP',price:30000,image:"../assets/hp-laptop.jpg"},
    {id:16,category:'headsets',title:'Bose',price:30000,image:"../assets/bose headset.webp"},
    {id:17,category:'headsets',title:'Apple',price:30000,image:"../assets/apple headset.webp"},
    {id:18,category:'headsets',title:'Sony',price:30000,image:"../assets/sony headset.webp"},
]

let product_container=document.getElementById('product-container');
let cart=[]

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

