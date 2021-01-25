const ball = document.getElementById('ball');
const field = document.getElementById('field');


field.addEventListener("click", event => {
    let fieldPosition = field.getBoundingClientRect();
    console.log(fieldPosition)
    let ballPosition = {
        top: event.clientY - fieldPosition.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldPosition.left - field.clientLeft - ball.clientWidth / 2
    }
    console.log(ball.clientHeight)
    console.log(field.clientLeft)
    console.log(event.clientX)
    if (ballPosition.left < 0) {
        ballPosition.left = 0;
    } else if (ballPosition.top < 0) {
        ballPosition.top = 0;
    }
    ball.style.left = ballPosition.left + 'px';
    ball.style.top = ballPosition.top + 'px';
    console.log(ball.style.left)
});


    
