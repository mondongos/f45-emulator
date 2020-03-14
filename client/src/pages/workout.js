import React from 'react'
import { Jumbotron, Container } from 'reactstrap';
import '../styles/workout-style.css'
import Exercise from '../components/exercise';


export default class Workout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exerciseId: null, 
            exercises: [
                {name: "Arms", reps: 3, time: 40, rest: 15, gif: 'https://media.giphy.com/media/12KZKe1ppk5q3C/giphy.gif'}, 
                {name: "Legs", reps: 2, time: 30, rest: 15, gif: 'https://media.giphy.com/media/3oEduXXBwLDCtaGfNS/giphy.gif'}
            ]
        }
    }

    // rotateExercises = () => {
    //     this.state.exercises.map((exercise) => {
    //         return (
    //             <Exercise 
    //             name={exercise.name} 
    //             reps={exercise.reps} 
    //             time={exercise.time} 
    //             rest={exercise.rest} 
    //             gif={exercise.gif}
    //             />
    //         )
    //     })
    // }

    render() {
        return (
            <div>
                <Jumbotron className="halsey"fluid>
                    <Container  fluid>
                        <h1 className="display-3">Arms Exercise 1</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </Container>
                </Jumbotron>
                <Exercise/>
            </div>
        )
    }
}