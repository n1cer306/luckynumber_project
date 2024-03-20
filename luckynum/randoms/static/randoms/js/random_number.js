var genNumber = document.getElementById("gen-number");
var number = document.getElementById("number");
var numberBlock = document.querySelector(".block-random-number");

genNumber.addEventListener('click', function() {
    let fromNumber = document.getElementById('from').value;
    let toNumber = document.getElementById('to').value;
    let randomNumber = random(fromNumber, toNumber);


    let countNumbers = `${randomNumber}`.length; 
    let strRandomNumber = `${randomNumber}`;
    numberBlock.textContent = '';
    for (let i = 0; i < countNumbers; i++) {
        let start = Date.now(); // запомнить время начала

        let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
            let timePassed = Date.now() - start;

            if (timePassed >= 100) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
            }
  
            draw(timePassed);

        }, 1);

        let newElement = document.createElement("span");
        newElement.innerHTML = strRandomNumber[i];
        newElement.id = `number`;
        newElement.className = "roboto-thin";
        newElement.style = `font-size: 60px; color: aliceblue; margin-bottom: 2rem;`;

        function draw(timePassed) {
            let height = 50;
            newElement.style.bottom = (height - (timePassed / 2)) + 'px';
        }

        numberBlock.append(newElement);
    }
    // number.textContent = randomNumber; // Генерация числа
});

function random(from=0, to=10) {
    const randomNumber = Math.random();
    let min = null;
    let max = null;

    if (from > to) {
        max = from;
        min = to;
    } else {
        max = to;
        min = from;
    };

    let number = parseInt(`${randomNumber}`.substring(2, `${max}`.length+2));
    if (number >= min && number <= max) {
        return number;
    } else {
        let randomNumber2 = Math.random();

        for (var number2 = parseInt(`${randomNumber2}`.substring(2, `${max}`.length+2)); (number2 >= min && number2 <= max) === false;) {
            randomNumber2 = Math.random();
            number2 = parseInt(`${randomNumber2}`.substring(2, `${max}`.length+2))
        }

        return number2;
    }
}