function App() {


    const [displayTime, setDisplayTime] = React.useState(25 * 60);
    const [breakTime, setBreakTime] = React.useState(5 * 60);
    const [sessionTime, setSessionkTime] = React.useState(25 * 60);
    const [timerOn, setTimerOn] = React.useState(false);
    const [onBreak, setOnBreak] = React.useState(false);

    const [breakAudio, setBreakAudio] = React.useState(
        new Audio("./breakSound.mp3")
    );

    const playBreakSound = () => {
        breakAudio.curretTime = 0;
        breakAudio.play();
    }

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return (
            (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
        )
    }

    const changeTime = (amount, type) => {
        if (type === "break") {
            if (breakTime <= 60 & amount < 0) {
                return
            }
            setBreakTime((prev) => prev + amount)
        }
        else if (type === "session") {
            if (sessionTime <= 60 & amount < 0) {
                return
            }
            setSessionkTime((prev) => prev + amount)
            if (!timerOn) {
                setDisplayTime(sessionTime + amount);
            }
        }
    };

    const controlTime = () => {
        let second = 1000;
        let date = new Date().getTime();
        let nextDate = new Date().getTime() + second;
        let onBreakVariable = onBreak;
        console.log(date);
        if (!timerOn) {
            let interval = setInterval(() => {
                date = new Date().getTime();
                if (date > nextDate) {
                    setDisplayTime((prev) => {
                        if (prev <= 0 && !onBreakVariable) {
                            playBreakSound();
                            onBreakVariable = true;
                            setOnBreak(true);
                            return breakTime;
                        } else if (prev <= 0 && onBreakVariable) {
                            playBreakSound();
                            onBreakVariable = false;
                            setOnBreak(false);
                            return sessionTime
                        }
                        return prev - 1
                    });
                    nextDate += second;
                }
            }, 30);
            localStorage.clear();
            localStorage.setItem("interval-id", interval);
        }

        if (timerOn) {
            clearInterval(localStorage.getItem("interval-id"));
        }
    };


    //BUTONS
    const play = () => {
        console.log("2")
        setTimerOn(true)
        controlTime()
    }

    const pause = () => {
        if (timerOn === false) {
            return
        }
        setTimerOn(false)
        controlTime()
    }

    const resetTime = () => {
        setDisplayTime(25 * 60)
        setBreakTime(5 * 60)
        setSessionkTime(25 * 60)
    };

    return (
        <div className="container">
            <div className="box">
                <div className="title"><h1>Pomodoro</h1></div>
                <div className="row">

                    <div id="break-label " className="break label">
                        <h3>Break Length</h3>
                        <div className="config">
                            <div id="break-decrement">
                                <button onClick={() => changeTime(-60, "break")}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                </svg>
                                </button>
                            </div>
                            <div id="break-length" className="number_break">{formatTime(breakTime)}</div>
                            <div id="break-increment">
                                <button onClick={() => changeTime(60, "break")}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="session-label " className="session label">
                        <h3>Session Length</h3>
                        <div className="config">
                            <div id="session-decrement">
                                <button onClick={() => changeTime(-60, "session")}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                </svg>
                                </button>
                            </div>
                            <div id="session-length">{formatTime(sessionTime)}</div>
                            <div id="session-increment">
                                <button onClick={() => changeTime(60, "session")}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

                <div id="timer-label" className="time">
                    <h4>{onBreak ? "Break" : "Session"}</h4>
                    <div className="time-left" id="time-left">
                        <h1>{formatTime(displayTime)}</h1>
                    </div>
                </div>

                <div className="buttons">
                    <div>
                        <button onClick={play}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                        </button>
                    </div>

                    <div>
                        <button onClick={pause}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                        </svg>
                        </button>
                    </div>

                    <div>

                        <button onClick={resetTime}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-repeat" viewBox="0 0 16 16">
                            <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >

    )

}

ReactDOM.render(<App />, document.getElementById("root"))