document.querySelector('main').style.display = 'none';

document.addEventListener('keydown',(event) => {
    document.querySelector('.before').style.display = 'none';
    document.querySelector('main').style.display = 'flex';
    document.querySelector('.eventKeyCode').innerHTML = event.keyCode;
    document.querySelector('.eventCode').innerHTML = event.code

    if(event.code === 'Space') {
        document.querySelector('.eventKey').innerHTML = '';
        document.querySelector('.eventKey').style.height = '16px';
    } else {
        document.querySelector('.eventKey').innerHTML = event.key
    }
})
