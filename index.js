let productContainer = document.getElementById('products')

async function get_products(){
    const res = await fetch("https://fakestoreapi.com/products");
    const productData = await res.json();
    productContainer.innerHTML = productData.map(products => {
        return `<div class="product-innercon">
                    <img src=${products.image} />
                    <h4>${products.title}</h4>
                    <div class="categoryPrice">
                        <p>${products.category}</p>
                        <p>$${products.price}</p>
                    </div>
                </div>`
    }).join("");
}

get_products()

async function jewelry() {
    const res = await fetch("https://fakestoreapi.com/products");
    const productData = await res.json();

    const jewelryProducts = productData.filter(product => product.category === "jewelery").map(product => {
        return `<div class="product-innercon">
                    <img src="${product.image}" />
                    <h4>${product.title}</h4>
                    <div class="categoryPrice">
                        <p>${product.category}</p>
                        <p>$${product.price}</p>
                    </div>
                </div>`;
    })

    console.log(jewelryProducts);
    productContainer.innerHTML = jewelryProducts.join('');
}

                

    // productContainer.innerHTML = jewelryProducts.map(product => {
    //     return `<div class="product-innercon">
    //                 <img src="${product.image}" />
    //                 <h4>${product.title}</h4>
    //                 <div class="categoryPrice">
    //                     <p>${product.category}</p>
    //                     <p>$${product.price}</p>
    //                 </div>
    //             </div>`;
    // }).join("");



