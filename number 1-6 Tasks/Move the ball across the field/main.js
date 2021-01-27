const ball = document.getElementById('ball');
const field = document.getElementById('field');


field.addEventListener("click", event => {
    let fieldPosition = field.getBoundingClientRect();
    
    let ballPosition = {
        top: (event.clientY - fieldPosition.top - field.clientTop - ball.clientHeight / 2),
        left: (event.clientX - fieldPosition.left - field.clientLeft - ball.clientWidth / 2)
    }
    
    console.log(field.clientWidth);
    console.log(fieldPosition);
    if (ballPosition.left < 0) {
        ballPosition.left = 0;
    } else if (ballPosition.top < 0) {
        ballPosition.top = 0;
    } else if (ballPosition.left + ball.clientWidth > field.clientWidth) {
        ballPosition.left = field.clientWidth - ball.clientWidth;
    } else if (ballPosition.top + ball.clientHeight > field.clientHeight) {
        ballPosition.top = field.clientHeight - ball.clientHeight;;
    }
    
    ball.style.left = ballPosition.left + 'px';
    ball.style.top = ballPosition.top + 'px';
    
});


    
