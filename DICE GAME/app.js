// let btn=document.getElementById('btn');
// btn.addEventListener('click',()=>{
//     let box1=document.getElementById('box1');
//     let box2=document.getElementById('box2');
//     [box1,box2].forEach(box => {
//         box.innerHTML='';
//         box.style.animation='spin 1s ease';
//     });
//     setTimeout(()=>{
//         [box1,box2].forEach(box =>{
//             box.style.animation='';
//             let randomNumber=Math.floor(Math.random()*6)+1;
//             box.innerHTML=randomNumber;
//     })
//     },1000)
// })


let result=document.getElementById('result');
result.style.display='none';
let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    let box1=document.getElementById('box1');
    let box2=document.getElementById('box2');
    result.style.display='none';
    [box1,box2].forEach(box => {
        box.innerHTML='';
        box.style.animation='spin 1s ease';
    });
    
    setTimeout(()=>{
        let num1=Math.floor(Math.random()*6)+1;
        let num2=Math.floor(Math.random()*6)+1;
        box1.innerHTML=num1;
        box2.innerHTML=num2;
        box1.style.animation='';
        box2.style.animation='';
        result.style.display='block';
        if(num1>=num2){
            result.innerHTML=num1;
        }
        else if(num2>=num1){
            result.innerHTML=num2;
        }
        // setTimeout(()=>{
        //     result.style.display='none';
        // },1500)
    },1000)

})