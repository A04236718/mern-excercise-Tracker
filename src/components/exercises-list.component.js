import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
<td>{props.exercise.username}</td>
<td>{props.exercise.description}</td>
<td>{props.exercise.duration}</td>
<td>{props.exercise.date.substring(0,10)}</td>
    <Link to={"/edit/"+props.exercise._id}>Edit</Link> ||
    <a href="/#" onClick={() => {
        props.deleteExercise(props.exercise._id)}}> Delete</a>
    </tr>
)



export default class ExerciseList extends Component{

    constructor(props){
        super(props);
        this.state = {
            exercises : []
        };
        
        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({exercises:response.data});
        }).catch((err) => {
            console.log(err);
        })
    }

    deleteExercise (id) {
        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    // Essentially passing in those variables to the Exercise element which can be accesed via props
    exerciseList(){
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} 
            key={currentexercise._id} />
        })
    }

    render(){
        return(
            <div>
                <h3> Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th> Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* // Tag used To insert Body Content in the table */}
                    <tbody>
                        {this.exerciseList()} 
                    </tbody>
                </table>
            </div>
        )
    }
}