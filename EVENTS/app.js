let color=['red','green','blue'];
let count=0;
let btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
    if(count<color.length){
        document.body.style.backgroundColor=color[count]
        count++;
    }
    else{
        count=0;
        document.body.style.backgroundColor=color[count];
        count++;
    }
})