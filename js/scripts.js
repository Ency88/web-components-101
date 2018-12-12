function handleClick() {
    console.log('Vanilla button clicked!');
    document.dispatchEvent(new CustomEvent('new-message', { detail: 'Vanilla item message'}));
}

document.addEventListener('new-message', event => {
    let element = document.getElementById('message');
    element.innerText = event.detail;
    setTimeout(() => {
        element.innerText = '';
    }, 3000)
});