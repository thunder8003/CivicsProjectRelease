import React from 'react';
import { Button } from 'react-bootstrap';

const variantColors = [
    'warning',
    'primary',
    'danger',
    'success'
]

class QuestionRenderer extends React.Component {
    constructor(props) {
        super(props);
    }

    generateButtons() {
        const options = this.props.Question.Options.sort(() => Math.random() - .5);
        return options.map((option,index) => {
            return (
                <Button variant={variantColors[index]} style={{ width: "50%", height: "50%", fontSize: "2vw" }} onClick={() => this.props.onAnswer(option)}>
                    {option}
                </Button>
            )
        })
    }

    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", gridTemplateRows: "1fr 1fr 2fr 4fr 1fr 6fr", height:"100vh", maxHeight:"100vh" }}>
                <div style={{ height:"100%", gridRow: "2 / span 3", gridColumn: "2" }}>
                    <div style={{ overflowWrap: "break-word", textAlign: "center", padding: "1rem", backgroundColor: "rgb(245, 155, 66)", borderRadius: ".5rem", fontSize: "2vw" }}>
                        {this.props.Question.Question}
                    </div>
                </div>
                <div style={{ height:"100%", gridRow: "6", gridColumn: "1 / span 3", backgroundColor: "gray" }}>
                    {this.generateButtons()}
                </div>
            </div>
        )
    }
}

export default QuestionRenderer;