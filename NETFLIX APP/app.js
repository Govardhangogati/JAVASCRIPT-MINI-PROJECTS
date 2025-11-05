async function movie() {
  let card_container = document.getElementById('card-container');
  let input = document.getElementById('input').value.trim();
  

  let data = await fetch(`http://www.omdbapi.com/?apikey=61e576a4&t=${input}`);
  let product = await data.json();

  if (product.Response === "False") {
    card_container.innerHTML = `
        <div id='not-found'>
            <h2>Movie not found</h2>
        </div>
    `;
    return;
  }

  let movie = `
    <div id='card'>
      <img src="${product.Poster}" alt="${product.Title}">
      <h1>${product.Title}</h1>
      <p>${product.Actors}</p>
    </div>
  `
  card_container.innerHTML = movie;

 
  let card = document.getElementById('card');
  setTimeout(() => {
    card.classList.add('show');
  }, 100); 
}
