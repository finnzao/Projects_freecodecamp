import React from "react";
import Badge from "react-bootstrap/Badge";
import { marked } from 'marked'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });

  }


  render() {

    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };
    return (
      <div className="App">
        <div className="container">
          <div className="col mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="col mt-4">
            <div className="col-mdt-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Markdown Input
                  </Badge>
                </h4>

                <div className="mark-input" style={inputStyle}>
                  <textarea
                    className="input"
                    style={inputStyle} onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }}></textarea>
                </div>
              </div>
            </div>

            <div className="col-mdt-6">
              <div className="col mt-5 text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
                <div
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                ></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}