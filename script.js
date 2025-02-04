document.getElementById('search').addEventListener('input', function () {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');
    products.forEach(product => {
        let name = product.getAttribute('data-name');
        if (name.includes(filter)) {
            product.style.display = 'inline-block';
        } else {
            product.style.display = 'none';
        }
    });
});
