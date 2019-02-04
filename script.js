fetch('https://pixabay.com/api/?key=11478607-0eb32deca43fc9d409ff4f730&q=snow&image_type=photo')
    .then(response => {
    return response.json();
    
})
    .then(data => {    
    const mydata = data.hits[1].webformatURL;

const images = document.querySelectorAll('.image');
    
    for (let i = 0; i < images.length; i++) {
        images[i].src = data.hits[i].webformatURL;
    }

 let index = 1;
    
    const showImage = (index) => {   
        for (let i = 0; i < images.length; i++) {
            images[i].style.opacity = '0';
        }
        images[index-1].style.opacity = '1';
    }
    
    showImage(index);
    
    const nextImage = () => {            
        index++;
        if (index > images.length) {
            index = 1;
        }
        showImage(index);
    }
        
    const previousSlide = () => {
        index--;
        if (index < 1) {
            index = images.length;
        } 
        showImage(index);
    }
    
    const nextSlideButton = document.getElementById('right-button');
    const previousSlideButton = document.getElementById('left-button');
    nextSlideButton.addEventListener('click', nextImage);
    previousSlideButton.addEventListener('click', previousSlide);

})