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

function random(from, to) {
    var max = null;
    var min = null;

    if (from > to) {
        max = from;
        min = to;
    } else {
        max = to;
        min = from;
    }

    const randomNumber = Math.random();
    let number = randomNumber * max;

    if (min <= number) {     
        return parseInt(number);
    } else {
        number = `${number}`.substring(3);
        luckyNumber = null;
        let mas = [];

        for (let i = 0; i < number.length; i++) {
            mas[i] = number[i];
        }

        let i = 0
        let j = 1
        while ((i <= mas.length - 1) && (j <= mas.length)){
            if (parseInt(mas[i] + mas[j]) >= min && parseInt(mas[i] + mas[j]) <= max) {
                luckyNumber = parseInt(mas[i] + mas[j]);
                break
            } else {
                i += 1;
                j += 1;
            }
        }
        return luckyNumber === null ? parseInt(min) : luckyNumber;
    }
}