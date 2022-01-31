import React from 'react';
import io from 'socket.io-client';
import { Button } from 'react-bootstrap'


class MultiplayerHandler extends React.Component {
    constructor(props) {
        super(props)

        this.s = new WebSocket()

        this.state = {
            isHosting: undefined
        }
    }

    host() {
    }

    connect() {

    }

    render() {
        if(this.props.isHosting === undefined) {
            return (
                <center>
                    <div style= {{ width: "100vw", height: "100vh", display: "table-cell", verticalAlign: "middle" }}>
                        <div style={{ padding: "1rem", backgroundColor: "#f59b42", width: "10vw", minWidth: "fit-content", borderRadius: ".2rem" }}>
                            <Button style={{width: "100%"}}>Host Room</Button>
                            <Button style={{width: "100%", marginTop: "10px"}}>Join Room</Button>
                        </div>
                    </div>
                </center>
            )
        }

        return (
            <div>
                {this.socket !== null ? "Socket Made" : "Socket Not Found"}
            </div>
        )
    }


}

export default MultiplayerHandler