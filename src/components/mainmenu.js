import React from 'react';
import { Button } from 'react-bootstrap'

class Mainmenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <center>
                <div style= {{ width: "100vw", height: "100vh", display: "table-cell", verticalAlign: "middle" }}>
                    <div style={{ padding: "1rem", backgroundColor: "#f59b42", width: "10vw", minWidth: "fit-content", borderRadius: ".2rem" }}>
                        <h1>
                            Civia
                        </h1>
                        <div style={{ marginBottom: "10px" }}>
                            Civia is a trivia game where the questions revolve around Civics
                        </div>
                        <Button style={{ width: "100%" }} onClick={this.props.setSingleplayer}>
                            Singleplayer
                        </Button>
                        <Button style={{ width: "100%", marginTop: "10px" }} onClick={this.props.setMultiplayer} disabled>
                            Multiplayer W.I.P
                        </Button>
                    </div>
                </div>
            </center>
        )
    }
}


export default Mainmenu;