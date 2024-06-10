let button = document.getElementById('button');

button.addEventListener('click', function(e) {
    spiderbutton(button);
});

function spiderbutton(button){
    button.remove();
    create();
    create();
}

function create() {
    let newButton = document.createElement('button');
    newButton.textContent = 'button';
    newButton.id = 'button';
    newButton.addEventListener('click', function(e) {
        spiderbutton(newButton);
    });
    document.body.appendChild(newButton);
}
