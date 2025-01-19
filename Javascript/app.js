



let prodHTML = '';
product.forEach((products) =>{
    prodHTML +=
    `<div class="item"><img src="${products.image}" class="item-img"><img src= "images/rating-${products.rating.stars * 10}.png" class="rating" >
    
                <p>${products.name}</p>
                <select name="" >
                <optgroup>
                    
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                </optgroup>
            </select>
            <p>$${(products.price / 100).toFixed(2)}</p>
       
            <button class="btn-primary">Add to Cart</button>
        </div>`;
});

                console.log(prodHTML);
    

document.querySelector('.js-item-container').innerHTML= prodHTML;