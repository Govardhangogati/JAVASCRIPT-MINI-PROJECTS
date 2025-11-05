// let cb=document.getElementById('cb');
// let btn=document.getElementById('btn');
// let mails=document.getElementById('mails')

// cb.addEventListener('change',()=>{
//     if(cb.checked){
//         btn.disabled=false;
//         btn.classList.add('active')
//     }
//     else{
//         btn.disabled=true;
//         btn.classList.remove('active')
//     }
// })

// let mailslist=[]


// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     let value=document.getElementById('email').value;
//     if(value!==''){
        
        
//         if(mailslist.includes(value)){
//             alert('selected mail is already registered')
//         }
//         else{
//             let li=document.createElement('li');
//             li.textContent=value;
//             mails.appendChild(li);
//             mailslist.push(li.textContent)
//             alert('you are registered successfully')
//         }
        
//         document.getElementById('uname').value='';
//         document.getElementById('email').value=''
//         cb.checked=false;
//         btn.disabled=true;
//         btn.classList.remove('active')
//     }
// })




let cb=document.getElementById('cb');
let btn=document.getElementById('btn');
let mails=document.getElementById('mails')

cb.addEventListener('change',()=>{
    if(cb.checked){
        btn.disabled=false;
        btn.classList.add('active')
    }
    else{
        btn.disabled=true;
        btn.classList.remove('active')
    }
})

let mailslist=[]

let span1=document.createElement('span');
span1.id='span1'
span1.textContent='selected mail is already registered';
document.body.appendChild(span1);
let span2=document.createElement('span');
span2.id='span2';
span2.textContent='you are registered successfully';
document.body.appendChild(span2);


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let value=document.getElementById('email').value;
    let uname=document.getElementById('uname').value;
    if(value!==''){
        if(uname==''){
            span1.textContent='user name is not entered'
            span1.classList.add('activate')
            setTimeout(()=>{
                span1.classList.remove('activate')
            },3000)
        }
        else{

            if(mailslist.includes(value)){
                // alert('selected mail is already registered')
                span1.textContent='selected mail is already registered'
                span1.classList.add('activate')
                setTimeout(()=>{
                    span1.classList.remove('activate')
                },3000)
            
            }
            else{
                let li=document.createElement('li');
                li.textContent=value;
                mails.appendChild(li);
                mailslist.push(li.textContent)
                // alert('you are registered successfully')
                span2.classList.add('activate1')
                setTimeout(()=>{
                    span2.classList.remove('activate1')
                },3000)
                
            }
            document.getElementById('uname').value='';
            document.getElementById('email').value=''
            cb.checked=false;
            btn.disabled=true;
            btn.classList.remove('active')
        }
        
        
    }
    else{
        span1.textContent='please Enter Email'
        span1.classList.add('activate')
        setTimeout(()=>{
            span1.classList.remove('activate')
        },3000)
    }
})




// let cb = document.getElementById('cb');
// let btn = document.getElementById('btn');
// let mails = document.getElementById('mails');

// // Load existing emails from localStorage
// let mailslist = JSON.parse(localStorage.getItem('emails')) || [];

// // Display existing emails on page load
// mailslist.forEach(email => {
//     let li = document.createElement('li');
//     li.textContent = email;
//     mails.appendChild(li);
// });

// cb.addEventListener('change', () => {
//     if (cb.checked) {
//         btn.disabled = false;
//         btn.classList.add('active');
//     } else {
//         btn.disabled = true;
//         btn.classList.remove('active');
//     }
// });

// // Create notification spans only once
// let span1 = document.createElement('span');
// span1.id = 'span1';
// document.body.appendChild(span1);

// let span2 = document.createElement('span');
// span2.id = 'span2';
// document.body.appendChild(span2);

// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     let uname = document.getElementById('uname').value.trim();
//     let value = document.getElementById('email').value.trim();

//     if (uname === '') {
//         span1.textContent = 'User name is not entered';
//         span1.classList.add('activate');
//         setTimeout(() => span1.classList.remove('activate'), 3000);
//         return;
//     }

//     if (value === '') {
//         span1.textContent = 'Please enter Email';
//         span1.classList.add('activate');
//         setTimeout(() => span1.classList.remove('activate'), 3000);
//         return;
//     }

//     if (mailslist.includes(value)) {
//         span1.textContent = 'Selected mail is already registered';
//         span1.classList.add('activate');
//         setTimeout(() => span1.classList.remove('activate'), 3000);
//     } else {
//         let li = document.createElement('li');
//         li.textContent = value;
//         mails.appendChild(li);

//         // Save to localStorage
//         mailslist.push(value);
//         localStorage.setItem('emails', JSON.stringify(mailslist));

//         span2.textContent = 'You are registered successfully';
//         span2.classList.add('activate1');
//         setTimeout(() => span2.classList.remove('activate1'), 3000);
//     }

//     // Reset form
//     document.getElementById('uname').value = '';
//     document.getElementById('email').value = '';
//     cb.checked = false;
//     btn.disabled = true;
//     btn.classList.remove('active');
// });


