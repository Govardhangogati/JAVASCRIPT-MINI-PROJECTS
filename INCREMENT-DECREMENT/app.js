let increment=document.getElementById('increment');
let decrement=document.getElementById('decrement');
let box=document.getElementById('box')
let count=box.textContent;
increment.addEventListener('click',()=>{
    count++;
    box.textContent=count;
    
})
decrement.addEventListener('click',()=>{
    count--;
    box.textContent=count;
})

// let btn=document.getElementById('btn');
// let box=document.getElementById('box');
// let count=Number(box.textContent);
// btn.addEventListener('click',()=>{
//     if(btn.textContent=='+'){
//         count++;
//         box.textContent=count;
//     }
//     else{
//         count--;
//         box.textContent=count;
//     }
// })