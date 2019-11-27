import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component{

    constructor(props){
        super(props);
        this.state = {
            exercises : []
        };
        
        this.deleteExercise = this.deleteExercise.bind(this);
    }

    render(){
        return(
            <div>
                <p>You are On the Exercise List Component</p>
            </div>
        )
    }
}