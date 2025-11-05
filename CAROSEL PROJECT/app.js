let carousel=[
    'https://images.wallpaperscraft.com/image/single/waterfall_cliff_stone_141850_300x188.jpg',
    'https://www.shutterstock.com/image-photo/ultra-4k-nature-wallpaper-beautiful-260nw-2431081569.jpg',
    'https://i.pinimg.com/236x/bd/80/61/bd806178726f3bb32974c76745c07b5b.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg',
    'https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg'
]

let count=0;
let img=document.getElementById('img');
let left=document.getElementById('left');
left.addEventListener('click',()=>{

    count=(count-1+carousel.length)%carousel.length
    img.src=carousel[count]
})

let right=document.getElementById('right');
right.addEventListener('click',()=>{
    count=(count+1)%carousel.length;
    img.src=carousel[count]
})