import React, { Component } from 'react';
import './Animal.css';

export default class Animalremove extends Component {

    removeAnimalComp = (id) => {
        this.props.removeAnimal(id)
    }

    render() {
        return (
            <div className="removeAnimalContainer">
                <div className="inputButton" value={this.props.id} onClick={() => this.removeAnimalComp(this.props.id) }>Remove { this.props.name }</div>
            </div>
        )
    }
}