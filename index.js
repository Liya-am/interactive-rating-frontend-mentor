let clicked = null;
let buttons = document.getElementsByClassName('btn');
for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function handleClick() {
            clicked = buttons[i];
        }
        )
}

function clickSubmit () {
    const thankYou = document.getElementById('after');
    const howDidWeDo = document.getElementById('before');
    if (clicked !== null) {
    thankYou.hidden = false;
    howDidWeDo.hidden = true;
    const span = document.getElementById('given-rating');
    const rating = document.createTextNode(clicked.id);
    span.appendChild(rating);
    } else {
        alert('Please select a rating before submitting')
    }

}