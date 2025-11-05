let btn=document.getElementById('btn');
let fruits=document.getElementById('fruits');
let clear=document.getElementById('clear');
btn.addEventListener('click',()=>{
  let inputvalue=document.getElementById('input').value;
  if(inputvalue!==''){
    let li=document.createElement('li');
    li.className='fruits-items';
    let inputtext=document.createElement('span');
    inputtext.textContent=inputvalue;

    let deletevalue=document.createElement('i');
    deletevalue.className='fa-solid fa-trash';
    deletevalue.style.color='red';

    deletevalue.addEventListener('click',()=>{
      fruits.removeChild(li);
    })
    li.appendChild(inputtext);
    li.appendChild(deletevalue);
    fruits.appendChild(li)
    document.getElementById('input').value='';
    clear.classList.add('active')


  }
  else{
    alert("choose fruit")
  }
})


clear.addEventListener('click',()=>{
  fruits.innerHTML='';
  document.getElementById('clear').classList.add('active');
  clear.classList.remove('active')
})

