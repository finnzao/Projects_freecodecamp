const drumPads = [
    {
        "key": "Q",
        "song": "Heater-1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        "key": "W",
        "song": "Heater-2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        "key": "E",
        "song": "Heater-3",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        "key": "A",
        "song": "Heater-4",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        "key": "S",
        "song": "Heater-6",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        "key": "D",
        "song": "Dsc_Oh",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        "key": "Z",
        "song": "Kick_n_Hat",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        "key": "X",
        "song": "RP4_KICK_1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        "key": "C",
        "song": "Cev_H2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
]


let aqwe = document.getElementById("drum-0");
const array = []
const buttonsDrums = document.querySelectorAll(".drum-pad")
const display = document.getElementsByClassName("display")
const display2 = document.querySelector("#display")
console.log(display)

buttonsDrums.forEach(function (btn) {
    array.push(btn.innerText)

    btn.addEventListener("click", function (e) {
        const audio = e.target.firstChild.nextSibling;
        display2.innerText = e.target.innerText
        audio.play();
    })


    window.document.onkeyup = function (evennt) {
        array.map((e) => {
            if (evennt.key == e.toUpperCase() || evennt.key == e.toLowerCase()) {
                let id = document.getElementById(e.toUpperCase());
                display2.innerText = e.toUpperCase()

                id.play()
            }
        })
    }


})


