const images=document.querySelectorAll('.img');
const bgshade=document.querySelector('#bgshade')

images.forEach(element => {
    element.addEventListener('click',()=>{
        bgshade.classList.add('active');
        const img=document.createElement('img');
        img.classList.add('bgimg');
        img.src=element.src;
        while(bgshade.firstChild){
            bgshade.removeChild(bgshade.firstChild);
        }
        bgshade.appendChild(img);
    });
});

bgshade.addEventListener('click',()=>{
    bgshade.classList.remove('active');
});