// Add dark mode/light mode button
document.body.onload = addLightMode;

function addLightMode() {
    const modeDiv = document.createElement('div');

    modeDiv.classList.add('mode-button-wrapper');

    const modeButton = document.createElement('a');

    const buttonText = document.createTextNode('Light Mode');
    
    modeButton.appendChild(buttonText);

    modeButton.href = '#';

    modeButton.id = 'mode-button';

    modeButton.classList.add('button');

    // On click dark mode/light mode button toggles light-mode class on body element
    // On click toggle mode text
    modeButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('light-mode');
        if(modeButton.innerHTML === 'Light Mode') {
            modeButton.innerHTML = 'Dark Mode';
        } else {
            modeButton.innerHTML = 'Light Mode';
        }
    })

    modeDiv.appendChild(modeButton);

    const contentMain = document.querySelector('.content-main');

    contentMain.prepend(modeDiv);
}
