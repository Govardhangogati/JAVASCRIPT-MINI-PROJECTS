// let drivers=[
//     {name:'Arun',car:'Audi',loc:'Kphb',image:'https://media.istockphoto.com/id/1419364025/photo/happy-male-driver-holding-steering-wheel-and-driving-a-car.jpg?s=612x612&w=0&k=20&c=Mw3noFiQk3UQEv552T_xu1lWonKTUgIU7i7BSMlKXt0='},
//     {name:'karthik',car:'jaguar',loc:'Ameerpet',image:'https://media.gettyimages.com/id/1465620151/photo/smiling-young-man-texting-on-mobile-phone-leaning-on-her-car.jpg?s=612x612&w=gi&k=20&c=eZzXOC3fv_-eIxj2eRc-zyuPWyaqJY1syH3M7nIL0hw='},
//     {image:'https://media.istockphoto.com/id/1595870882/photo/stylish-woman-driving-a-car.jpg?s=612x612&w=0&k=20&c=d99SbtjMB_wO5Rgj_RaTDPKZs4ncHXfAJwqY-SBluto=',name:'Radha',car:'benz',loc:'jntu'},
//     {image:'https://plus.unsplash.com/premium_photo-1682090164953-780d182efb39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwaW4lMjBjYXJ8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000',name:'Kowshik',car:'toyoto',loc:'balanagar'},
//     {image:'https://media.gettyimages.com/id/2120760479/photo/young-man-traveling-by-car-getting-out-of-the-car.jpg?s=612x612&w=gi&k=20&c=QOEBRgmGmEZzjq94V2irmcvFrTp3ygKaozk0Dfe3g9U=',name:'Suresh',car:'BMW',loc:'L.B.Nagar'},
//     {image:'https://www.shutterstock.com/image-photo/handsome-man-raising-hand-car-260nw-2615846441.jpg',name:'Ramesh',car:'Hyundai',loc:'secunderabad'}
// ]

// let container=document.getElementById('container')


// let message=drivers.map(driver=>{
//     return`
//     <div id='card'>
//         <img src='${driver.image}'
//         <h1>${driver.name}</h1>
//         <h3>${driver.car}</h3>
//     </div>
//     `  
// }).join('')
// container.innerHTML=message

// let m=[1,2,3,4,5,6,7];

// let n=m.filter(x=>{
//     return x%2==0;
// })
// console.log(n)

let array=[1,2,4,2,3,4,3,2,2,3,3,2,1,2,3,,3];

let unique=array.filter((value,index,array)=>{
    return array.indexOf(value)===index
})
console.log(unique);

