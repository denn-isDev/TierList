const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const fileInput = $('#image-input')
const boxImages = $('.box-images')


fileInput.addEventListener('change', e => {
    const files = e.target.files;

    for(let i=0; i<files.length; i++){
        const file = files[i];

        const img = document.createElement('img')
        img.classList.add('image-preview');
        img.file = file;

        boxImages.appendChild(img);

        const reader = new FileReader();

        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);

        reader.readAsDataURL(file);

    }

})