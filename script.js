const url = 'https://pixabay.com/api/?key=11478607-0eb32deca43fc9d409ff4f730&q=snow&image_type=photo';

req = new XMLHttpRequest();
req.open('GET', url, true);
req.send();
req.onload = () => {
    req = JSON.parse(req.responseText);
    
    console.log(req);
    console.log(req.hits);
    console.log(req.hits[0].webformatURL);
    
    const img = document.querySelectorAll('.image');
    console.log(img);
    
const images = document.querySelectorAll('.image');
    
    for (let i = 0; i < images.length; i++) {
        img[i].src = req.hits[i].webformatURL;
    }

    let index = 1;
    
    const initialImage = () => {
        images[index-1].style.display = 'block';
        console.log(index);
        console.log(images[index]);
    }
    
    initialImage();
    
    const nextImage = () => {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';
        }
        images[index++].style.display = 'block';
        console.log(index);
        console.log(images[index]);
        if (index >= images.length) {
            index = 0;
        }
    }
        
    const previousSlide = () => {
        for (let i = images.length-1; i >= 0; i--) {
            images[i].style.display = 'none';
        }
        images[index--].style.display = 'block';
        console.log(index);
        console.log(images[index]);
        if (index < 0) {
            index = 5;
        } 
    }
    
    const nextSlideButton = document.getElementById('right-button');
    const previousSlideButton = document.getElementById('left-button');
    nextSlideButton.addEventListener('click', nextImage);
    previousSlideButton.addEventListener('click', previousSlide);

}

