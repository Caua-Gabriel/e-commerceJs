const mode = document.getElementById('button-mode');
mode.addEventListener('click',() => {
    if(mode.classList.contains('toggle-right')){
        mode.classList.remove('toggle-right');
        mode.classList.add('toggle-left');

        return;

    }

    mode.classList.add('toggle-right');
        mode.classList.remove('toggle-left');
});