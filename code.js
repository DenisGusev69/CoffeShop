document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.price button').forEach(button => {
        button.onclick = function() {
            const card = this.closest('.item');
            localStorage.setItem('name', card.querySelector('.cards_item_text').textContent);
            localStorage.setItem('price', card.querySelector('.cards_item_price').textContent);
            window.location.href = 'page2.html';
        };
    });
    
    document.querySelector('.product_name').textContent = localStorage.getItem('name');
    document.querySelector('.total').textContent = localStorage.getItem('price');

    const sizeBoxes = document.querySelectorAll('.size_box');
    sizeBoxes.forEach(box => {
        box.addEventListener('click', function() {
            sizeBoxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const extraButtons = document.querySelectorAll('.extra .button_setup');
    extraButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    const milkButtons = document.querySelectorAll('.milk_type .button_setup');
    milkButtons.forEach(button => {
        button.addEventListener('click', function() {
            milkButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
