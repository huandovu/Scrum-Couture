function displayLookbookImages() {
    console.log('Displaying lookbook images'); 
    const images = document.querySelectorAll('.lookbook-item img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.animation = 'fadeIn 1.25s forwards'; 
        }, index * 300); 
    });
}
document.addEventListener('DOMContentLoaded', function() {
    displayLookbookImages();
});