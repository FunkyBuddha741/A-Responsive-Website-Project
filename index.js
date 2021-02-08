const images = document.querySelectorAll('.article-img');
const modalOuter = document.querySelector('.modal-outside');
const modalInner = document.querySelector('.modal-inside');
const widgetImg = document.querySelectorAll('.widget-img');

function handleImageClick(e){
    const theImg = e.currentTarget.src;
    modalInner.innerHTML = `
    <img src="${theImg}"/> 

    `;
    modalOuter.classList.add('open');
    
}

function handleOutsideClick(e){
    if(e.currentTarget === e.target){
        modalOuter.classList.remove('open');
    }
}

function handleKeyDown(event){
    if(event.key ==="Escape"){
        modalOuter.classList.remove('open');
    }
}


widgetImg.forEach(image => image.addEventListener('click',handleImageClick));
images.forEach(image => image.addEventListener('click',handleImageClick));
modalOuter.addEventListener('click',handleOutsideClick);
window.addEventListener('keydown',handleKeyDown);