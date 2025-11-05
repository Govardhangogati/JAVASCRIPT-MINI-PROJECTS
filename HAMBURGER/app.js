let hamburger=document.getElementById('hamburger');
let nav_links=document.getElementById('nav-links')
hamburger.addEventListener('click',()=>{
    nav_links.classList.toggle('active')
})