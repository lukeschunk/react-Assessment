import React, { Component } from 'react';
import Animaldesc from './Animaldesc'
import Animalremove from './Animalremove'
import './Animal.css';

export default class Animal extends Component {

    render() {
        return (
            <div className="AnimalContainer">
                { this.props.frontArray.map(obj => (
                    <div className="animal" key={obj.id}>
                        <div className="animal-row">
                            <img className="animal-image" src={obj.imageUrl} alt={obj.id}></img>
                            <div className="animal-info">
                                <h2>Name: {obj.name}</h2>
                                <h4>{obj.description}</h4>
                                <Animaldesc id={obj.id} updateArrayState={this.props.updateArrayState}/>
                            </div>
                        </div>
                        <div>
                            <Animalremove id={obj.id} name={obj.name} removeAnimal={this.props.removeAnimal} />
                        </div>
                    </div>
            )) }
            </div>
        )
    }
}