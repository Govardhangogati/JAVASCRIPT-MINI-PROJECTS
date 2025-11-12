let products = [
  {id:1,rating:2.4,category:'mobiles',title:'Samsung',price:20000,image:"../assets/samsungmobile.webp"},
  {id:2,rating:3.4,category:'mobiles',title:'Vivo',price:30000,image:"../assets/vivo.webp"},
  {id:3,rating:4.4,category:'mobiles',title:'iPhone',price:20000,image:"../assets/iphone.webp"},
  {id:4,rating:3.4,category:'mobiles',title:'Motorola',price:30000,image:"../assets/motorola.jpg"},
  {id:5,rating:4.4,category:'mobiles',title:'Realmi',price:20000,image:"../assets/realmi.webp"},
  {id:6,rating:2.4,category:'mobiles',title:'Google',price:30000,image:"../assets/google.png"},
  {id:7,rating:4.4,category:'televisions',title:'LG',price:30000,image:"../assets/lg television.png"},
  {id:8,rating:1.4,category:'televisions',title:'ASUS',price:30000,image:"../assets/asus.webp"},
  {id:9,rating:4.4,category:'televisions',title:'Croma',price:30000,image:"../assets/croma television.jpg"},
  {id:10,rating:3.4,category:'televisions',title:'Infinix',price:30000,image:"../assets/infinix television.jpeg"},
  {id:11,rating:1.4,category:'televisions',title:'Hitachi',price:30000,image:"../assets/hitachi television.webp"},
  {id:12,rating:2.4,category:'laptops',title:'Dell',price:30000,image:"../assets/dell laptop.jpg"},
  {id:13,rating:3.4,category:'laptops',title:'ACER',price:30000,image:"../assets/acer laptop.jpg"},
  {id:14,rating:4.4,category:'laptops',title:'Macbook',price:30000,image:"../assets/macbook laptop.jpg"},
  {id:15,rating:1.4,category:'laptops',title:'HP',price:30000,image:"../assets/hp-laptop.jpg"},
  {id:16,rating:2.4,category:'headsets',title:'Bose',price:30000,image:"../assets/bose headset.webp"},
  {id:17,rating:3.4,category:'headsets',title:'Apple',price:30000,image:"../assets/apple headset.webp"},
  {id:18,rating:4.4,category:'headsets',title:'Sony',price:30000,image:"../assets/sony headset.webp"},
];

let product_container = document.getElementById('product-container');
let typerange = document.getElementById('typerange');
let rangevalue = document.getElementById('rangevalue');
let threestar = document.getElementById('threestar');
let fourstar = document.getElementById('fourstar');
let twostar=document.getElementById('twostar')
let onestar=document.getElementById('onestar')


let dupproducts=[...products]

function render(data){
    if(data.length===0){
        product_container.innerHTML=`<P id='data'>No data found</P>`
        return
    }
    let product=data.map(item=>{
        return`
         <div id="card">
            <img src="${item.image}" width="150">
            <h2>${item.title}</h2>
            <p>₹${item.price}</p>
            <mark>${item.rating} ★</mark><br><br>
            <button>Add to cart</button>
        </div>
        `
    })
    product_container.innerHTML=product.join('')
}

function filterProducts(){
    let filtered=dupproducts.filter(item=>item.price<=typerange.value)

    if(threestar.checked){
        filtered=filtered.filter(item=>item.rating>3)
    }
    if(fourstar.checked){
        filtered=filtered.filter(item=>item.rating>4)
    }
    if(twostar.checked){
        filtered=filtered.filter(item=>item.rating>2)
    }
    if(onestar.checked){
        filtered=filtered.filter(item=>item.rating>1)
    }
    render(filtered)
}

typerange.addEventListener('input',()=>{
    rangevalue.innerHTML=typerange.value;
    filterProducts()
})

onestar.addEventListener('change',filterProducts)
twostar.addEventListener('change',filterProducts)

threestar.addEventListener('change',filterProducts)
fourstar.addEventListener('change',filterProducts)

render(dupproducts)