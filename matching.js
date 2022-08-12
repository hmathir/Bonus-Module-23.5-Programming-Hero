var products = [{ brand: 'samsung', model: 'note 8' }, { brand: 'samsung', model: 'note 7' }, { brand: 'samsung', model: 'note 6' }, { brand: 'walton', model: 'primo' }, { brand: 'xaiomi', model: 'note 11' }, { brand: 'Apple', model: 'iPhone 11' }, { brand: 'Apple', model: 'iPhone 12' }];


function searchProducts(product, search) {
    var filtered = [];
    for (const product of products) {
        if (product.model.toLowerCase().includes(search.toLowerCase())) {
            filtered.push(product);
        }
    }
    return filtered;
}

var result = searchProducts(products, 'NOTE');
console.log(result);
