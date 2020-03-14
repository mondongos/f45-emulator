import React from 'react'
import { Container } from 'reactstrap';
import '../styles/exercise-style.css'
import Timer from './timer'


export default class Exercise extends React.Component {
    constructor(props) {
        super(props) 
        // this.state = {
        //     name: this.props.name, 
        //     reps: this.props.reps, 
        //     time: this.props.time, 
        //     rest: this.props.rest, 
        //     gif: this.props.gif
        // }
        this.state = {name: "Arms", reps: 3, time: 40, rest: 15, gif: 'https://media.giphy.com/media/12KZKe1ppk5q3C/giphy.gif'}
    }

    render() {
        return (
            <Container className="exercise-box">
                <Timer totalSeconds={this.state.time}/>
                <br></br>
                <img src={this.state.gif}></img>
            </Container>
        )
    }
}