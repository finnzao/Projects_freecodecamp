function App() {
    const [expresion, setExpresion] = React.useState("")
    const [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {
        console.log(expresion)
        console.log(symbol)
        setExpresion(prev => prev + symbol)
        if (expresion === "" && symbol == '-' || expresion === "" && symbol == '*' || expresion === "" && symbol == '+' || expresion === "" && symbol == '/' || expresion === "" && symbol == '.' || expresion === "" && symbol == 0) {
            setExpresion("")
        }


        if (symbol == "AC") {
            setExpresion("")
            setAnswer(0)
        }
    }

    const calcular = () => {
        setAnswer(eval(expresion))
    }
    return (

        < div className="container" >
            <div className="box">
                <div className="display" id="display">
                    <input type="text" value={expresion} placeholder="0" disabled></input>
                    <div className="answer">{`= ${answer}`}</div>
                </div>
                <div className="keyboard">
                    <div className="row-1">
                        <button onClick={() => display("AC")} className="button" id="clear">AC</button>
                        <button onClick={() => display("/")} className="button" id="divide">/</button>
                        <button onClick={() => display("*")} className="button" id="multiply">X</button>
                    </div>
                    <div className="row">
                        <button onClick={() => display("7")} className="button" id="seven">7</button>
                        <button onClick={() => display("8")} className="button" id="eight">8</button>
                        <button onClick={() => display("9")} className="button" id="nine">9</button>
                        <button onClick={() => display("-")} className="button" id="subtract">-</button>
                    </div>
                    <div className="row">
                        <button onClick={() => display("4")} className="button" id="four">4</button>
                        <button onClick={() => display("5")} className="button" id="five">5</button>
                        <button onClick={() => display("6")} className="button" id="six">6</button>
                        <button onClick={() => display("+")} className="button" id="add">+</button>
                    </div>
                    <div className="row">
                        <button onClick={() => display("1")} className="button" id="one">1</button>
                        <button onClick={() => display("2")} className="button" id="two">2</button>
                        <button onClick={() => display("3")} className="button" id="three">3</button>
                        <button onClick={() => display("0")} className="button" id="zero">0</button>
                    </div>

                    <div className="row-last">
                        <button onClick={() => display(".")} className="button" id="decimal">.</button>
                        <button onClick={() => calcular()} className="button" id="equals">=</button>
                    </div>

                </div>
            </div>
        </div>


    )

}

ReactDOM.render(<App />, document.getElementById("root"))