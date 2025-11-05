function randomGenerator(){
    let randomNum=Math.floor(Math.random()*103)

    let data=fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')

    .then(res =>{
        return res.json();
        
    }).then(data=>{
        console.log(data.quotes[0].quote)
        document.getElementById('text').innerHTML=data.quotes[randomNum].quote;
        document.getElementById('author').innerHTML=data.quotes[randomNum].author
    })
}
