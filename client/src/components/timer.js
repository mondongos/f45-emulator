import React from 'react'
import { Progress, Container} from 'reactstrap';


export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            maxSeconds: this.props.totalSeconds
        }
    }

    componentDidMount = () => {
        this.myInterval = setInterval(() => {
            const { seconds, maxSeconds } = this.state
            if (seconds < maxSeconds) {
                this.setState(({ seconds }) => ({
                    seconds: seconds + 1
                }))
            }
        }, 1000)
    }

    componentWillUnmount = () => {
        clearInterval(this.myInterval)
    }

    render() {
        const {seconds, maxSeconds} = this.state
        return (
            <div>
                <Container>
                    <h3>Total Time Remaining: {this.state.maxSeconds - this.state.seconds}</h3>
                    <br></br>
                    <Progress animated color="success" value={seconds} max={maxSeconds} />
                </Container>
            </div>
        )
    }
    
}