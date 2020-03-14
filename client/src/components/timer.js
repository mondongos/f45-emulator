import React from 'react'
import { Progress, Container} from 'reactstrap';


export default class Timer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {secondsCounter, time} = this.props
        return (
            <div>
                <Container>
                    <h3>Total Time Remaining: {time - secondsCounter}</h3>
                    <br></br>
                    <Progress animated color="success" value={secondsCounter} max={time} />
                </Container>
            </div>
        )
    }
    
}