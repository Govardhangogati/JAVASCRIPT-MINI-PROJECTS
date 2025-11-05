function movie(){
    let data=fetch('http://www.omdbapi.com/?apikey=61e576a4&t=kalki 2898 ad')
    .then(res=>{
        return res.json()
    }).then(data=>{
        let movie=[data].map(item=>{
            return `
                <div id='card'>
                    <img src=${item.Poster}>
                    <h1>${item.Title}</h1>
                    <h2>${item.Actors}</h2>
                </div>
            `
        })
        document.body.innerHTML=movie
    })
}

movie()

