import React, { Component } from 'react';

export default class Animaladd extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            imageUrl: ''
        }
    }

    updateNameInput = (name) => {
        this.setState( {name} )
    }

    updateImgInput = (imageUrl) => {
        this.setState( {imageUrl} )
    }

    addAnimalComp = () => {
        this.props.addAnimal(this.state.name, this.state.imageUrl)
        this.setState({ name: '', imageUrl: '' })
    }

    render() {
        return (
            <div className="addAnimalContainer">
                <input className="inputBar" placeholder="Name" value={this.state.name} onChange={(e) => this.updateNameInput(e.target.value)} />
                <input className="inputBar" placeholder="imageUrl" value={this.state.imageUrl} onChange={(e) => this.updateImgInput(e.target.value)} />
                <div className="inputButton" onClick={ this.addAnimalComp }>Add</div>
            </div>
        )
    }
}