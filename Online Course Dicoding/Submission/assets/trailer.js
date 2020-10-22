// 1. 
// <iframe width="1053" height="490" src="https://www.youtube.com/embed/3KR8_igDs1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// https://youtu.be/3KR8_igDs1Y

// 2.
// <iframe width="1053" height="490" src="https://www.youtube.com/embed/XBNWo25izJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// https://youtu.be/XBNWo25izJ8

// 3.
// <iframe width="1053" height="490" src="https://www.youtube.com/embed/MONVPR1dnRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// https://youtu.be/MONVPR1dnRQ

const MODAL = document.querySelector('#modal-trailer');
const IFRAME = document.querySelector('#iframe');
const KEY = 'LINK';
const TRAILER = {
    first: 'https://www.youtube.com/embed/3KR8_igDs1Y',
    second: 'https://www.youtube.com/embed/XBNWo25izJ8',
    third: 'https://www.youtube.com/embed/MONVPR1dnRQ',
    fourth: 'https://www.youtube.com/embed/6scZ1qj2w38',
    fifth: 'https://www.youtube.com/embed/6vMuWuWlW4I',
    sixth: 'https://www.youtube.com/embed/ExUMiF1L0HA'
};

function checkStorage(){
    return typeof(Storage) !== 'undefined';
}

function setData(){
    if(checkStorage()){
        localStorage.setItem(KEY, JSON.stringify(TRAILER));
    }
}

function getData(){
    if(checkStorage){
        return JSON.parse(localStorage.getItem(KEY));
    }
}

function showModal(idVideo) {
    for (let id in getData()) {
        if (getData().hasOwnProperty(idVideo)) {
            // console.log(getData()[idVideo]);
        //     const element = object[key];
            IFRAME.setAttribute('src', getData()[idVideo]);
            MODAL.style.display = 'block';
        }
    }
    // 
}

window.addEventListener('click', function(event) {
    if(event.target == MODAL){
        MODAL.style.display = 'none';
        IFRAME.setAttribute('src', '');
    }
})

setData();