let task = JSON.parse(localStorage.getItem('task')) || [];
let product_container = document.getElementById('product-container');
document.getElementById('cart').innerHTML = task.length;

function render() {
    if (task.length === 0) {
        product_container.innerHTML = `
            <div id='emptycart'>
                <img src='https://www.shutterstock.com/image-vector/empty-no-item-shopping-cart-260nw-2278903521.jpg' alt="image">
                <h2>No items added</h2>
            </div>
        `;
        return;
    }

    let product = task.map((item, index) => {
        return `
            <div id='card'>
                <img src='${item.image}' width="200" height="200">
                <h2>${item.title}</h2>
                <p>${item.category}</p>
                <mark>₹${item.price}</mark><br><br>
                <button onclick="deleteData(${index})">delete</button>
            </div>
        `;
    });

    product_container.innerHTML = product.join('');
}

render();

window.deleteData = (index) => {
    task.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(task));
    render();
    document.getElementById('cart').innerHTML = task.length;
};
