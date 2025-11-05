let hamburger=document.getElementById('hamburger');
let nav_links=document.getElementById('nav-links')
hamburger.addEventListener('click',()=>{
    nav_links.classList.toggle('active')
})




let mobiles=[
    {id:'1',category:'mobile',img:'https://www.sathya.store/img/product/Zqk2qgdK2IxmJqd2.webp',title:'Realmi',price:29999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'2',category:'mobile',img:'https://5.imimg.com/data5/SELLER/Default/2023/10/353622084/HH/SM/BJ/200046698/motorola-edge-40-mobile-phone.jpg',title:'Motorola',price:39999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'3',img:'https://nelooq.com/liveimages/nelooq_cms_products/2195186461.jpg',title:'lava',price:29999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'4',img:'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg',title:'Samsung',price:39999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'5',img:'https://5.imimg.com/data5/SELLER/Default/2022/3/DT/MK/NS/97590607/oppo-reno4-pro-refurbished-superb.jpg',title:'oppo',price:19999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'6',img:'https://vlebazaar.in/image/cache/catalog//B089MTFGB1/Vivo-X50-Glaze-Black-8GB-RAM-128GB-Storage-Without-Offer-B089MTFGB1-1200x1200.jpg',title:'vivo',price:29999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'7',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuOKqjknnmKLqjAMRa1R8OorG7-nGOZ5UnWsVX25y4bfYJPFIPnNs_pHMLRZWJWZ43VA&usqp=CAU',title:'infinix',price:39999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'8',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBa7lJpvpgYswGaj-puyJtVkwwhH0tXl1Ks838eHkxcUOPTMUwNMzf5oeLLDMD--xsv0&usqp=CAU',title:'xiomi',price:99999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'9',img:'https://lh3.googleusercontent.com/yqgJVjNgrZsUPWoFLhOzITuEvhtAqsET1VxdblogD8G2ifUpKl3EJsO8oAcsoipJtrrQY9CKaA1DqXGr452lJBvBLVQnjLtYKOCFURo=rw-e365-w842-v1',title:'Google',price:99999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'10',img:'https://ddfndelma2gpn.cloudfront.net/card_image/None/Card-Recovered.webp',title:'Nokia',price:39999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'11',img:'https://cdn.lotuselectronics.com/webpimages/494951IM.webp',title:'iphone',price:99999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},
    {id:'12',img:'https://5.imimg.com/data5/SELLER/Default/2023/8/337487292/ST/JB/TD/189620676/oneplus-nord-ce-3-5g-500x500.jpg',title:'one plus',price:29999,desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, neque!'},

]

// function renderproduct(products){
//     container.innerHTML=''
//     products.map(mobile=>{
//         let card=document.createElement('div')
//         card.classList.add('card')
//         card.innerHTML=`
//             <img src=${mobile.img}>
//             <h1>${mobile.title}</h1>
//             <mark>${mobile.price}</mark>
//             <p>${mobile.desc}</p>
//             <button>Add to cart</button>
            
//         `
//         container.appendChild(card)
//         // return card
//     })
//     // container.innerHTML=product
// }

let container=document.getElementById('container')
let cart=[]

function renderproduct(products){
    let product=products.map(mobile=>{
        return`
            <div id='card'>
                <img src=${mobile.img}>
                <h1>${mobile.title}</h1>
                <mark>${mobile.price}</mark>
                <p>${mobile.desc}</p>
                <button onclick="addToCart('${mobile.id}')">Add to cart</button>
            </div>

        `
    })
    container.innerHTML=product.join('')
}
renderproduct(mobiles)

function filterCategory(category){
    if(category === 'all'){
        renderproduct(mobiles)
    }
    else{
        let filter_data=mobiles.filter(item=>item.category===category)
        renderproduct(filter_data)
    }
}

let filterMobiles=()=>{
    let input=document.getElementById('input').value
    let dup_data=mobiles.filter(item=>item.title.toLowerCase().includes(input.toLowerCase()))
    renderproduct(dup_data)
    
}

function addToCart(user){
    let tempdata=mobiles.find(mob => mob.id===user)
    alert(`${tempdata.title} added to the cart`)
    cart.push(tempdata)
    document.getElementById('cart').innerHTML=cart.length
    calculateSum()
    
}

function calculateSum() {
    let sum=cart.reduce((acc,val)=>{
    return acc+val.price
    },0)
    document.getElementById('total-sum').innerHTML =`total Amount : <mark>${sum}</mark>` ;

}