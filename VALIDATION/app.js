let btn=document.getElementById('btn');
let cb=document.getElementById('cb');
cb.addEventListener('change',()=>{
    if(cb.checked){
        btn.disabled=false;
        btn.classList.add('active');
    }
    else{
        btn.disabled=true;
        btn.classList.remove('active')
    }
})
btn.addEventListener('click',(e)=>{
    if(!cb.checked){
        e.preventDefault();
    }
})