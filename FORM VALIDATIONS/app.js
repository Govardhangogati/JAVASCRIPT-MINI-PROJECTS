

let form=document.getElementById('form')
form.addEventListener('submit',(e)=>{
    

    let uname=document.getElementById('uname').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let adhar=document.getElementById('adharcard').value;
    let pan=document.getElementById('pancard').value

    let unameregex=/^[A-Za-z\s]{8,15}$/;
    let emailregex=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let passwordregex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!$%&?#*])[A-Za-z\d@!$%&?#*]{8,15}$/;
    let adharregex = /^[0-9]{4} ?[0-9]{4} ?[0-9]{4}$/;
    let panregex = /^[A-Z]{4}\s?[0-9]{4}\s?[A-Z]$/;

    if(
        unameregex.test(uname)&&
        emailregex.test(email)&&
        passwordregex.test(password)&&
        adharregex.test(adhar)&&
        panregex.test(pan)
       
    ){
        alert('login')
        
    }
    else{
        e.preventDefault();
        alert('enter valid details')
        
    }
})

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("keydown", () => {
    setTimeout(() => {
      if (input.value.length < 4) {
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
    }, 0); // ensures it reads the latest keystroke
  });

  // Reset when leaving the field
  input.addEventListener("blur", () => {
    input.style.border = "1px solid #ccc";
  });
});





