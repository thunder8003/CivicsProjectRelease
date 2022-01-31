import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import Questions from '../Questions.js';
import RenderQuestion from './questionrenderer.js'


class Singleplayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            QuestionIndex: 0,
            Questions: this.generateQuestions(Questions),
            AnsweredCorrectly: null,
            AnswersCorrect: 0,
        }
    }

    generateQuestions(Original) {
        return Original.sort(() => Math.random() - .5);
    }

    userAnswered(answer) {
        let Timeout = 3500
        if(answer === this.state.Questions[this.state.QuestionIndex].CorrectAnswer) {
            this.setState({ AnsweredCorrectly: true, QuestionIndex: this.state.QuestionIndex + 1, AnswersCorrect: this.state.AnswersCorrect + 1 })
            Timeout = 1000
        } else {
            this.setState({ AnsweredCorrectly: false, QuestionIndex: this.state.QuestionIndex + 1 })
        }

        setTimeout(() => {
            this.setState({AnsweredCorrectly: null})
        }, Timeout)
    }

    createProgress() {
        return (
            <div style={{ position: "fixed", width:"100vw" }}>
                <ProgressBar variant="primary" now={this.state.QuestionIndex/this.state.Questions.length * 100} animated />
                <h3 style={{ fontSize: "2vw" }}>Question {this.state.QuestionIndex}/{this.state.Questions.length}</h3>
            </div>
        )
    }

    resetGame(returnToMenu) {
        this.setState({
            QuestionIndex: 0,
            Questions: this.generateQuestions(Questions),
            AnsweredCorrectly: null,
            AnswersCorrect: 0,
        })

        if(returnToMenu) {
            this.props.ReturnToMenu();
        }
    }

    render() {

        if(this.state.AnsweredCorrectly !== null) {
            return (
                <>
                {this.createProgress()}
                    <center>
                        <div style= {{ width: "100vw", height: "100vh", display: "table-cell", verticalAlign: "middle" }}>
                            <div style={{ maxWidth: "80vw", minWidth: "10vw" }}>
                                <h1 style={{borderRadius: ".5rem", padding: "1rem", width: "fit-content", backgroundColor: this.state.AnsweredCorrectly ? "#198754" : "#dc3545"}}>
                                    {this.state.AnsweredCorrectly ? "Correct" : "Incorrect"}
                                    <br />
                                    {this.state.AnsweredCorrectly ? "" : `Correct Answer: ${this.state.Questions[this.state.QuestionIndex-1].CorrectAnswer}`}
                                </h1>
                            </div>
                        </div>
                    </center>
                </>
            )
        }

        if(this.state.QuestionIndex < this.state.Questions.length) {
            return (
                <>
                    {this.createProgress()}
                    <RenderQuestion Question={this.state.Questions[this.state.QuestionIndex]} onAnswer={(ans) => this.userAnswered(ans)} />
                </>
            )
        }
        return (
            <>
                {this.createProgress()}
                <center>
                    <div style= {{ width: "100vw", height: "100vh", display: "table-cell", verticalAlign: "middle" }}>
                        <div style={{ padding: "1rem", backgroundColor: "#f59b42", width: "10vw", minWidth: "fit-content", borderRadius: ".2rem" }}>
                            <h3 style={{ marginBottom: "10px" }}>
                                You got {this.state.AnswersCorrect}/{this.state.Questions.length} correct!
                            </h3>
                            <Button style={{ width: "100%" }} variant="success" onClick={() => this.resetGame(false)}>Play Again</Button>
                            <Button style={{ width: "100%", marginTop: "10px" }} variant="warning" onClick={() => this.resetGame(true)}>Main Menu</Button>
                        </div>
                    </div>
                </center>
            </>
        )
    }
}

export default Singleplayer;