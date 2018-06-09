import React, { Component } from 'react';
import addDesc from './addDesc'
import './Animal.css';

export default class Animaldesc extends Component {
    constructor() {
        super()

        this.state = {
            desc: ''
        }
    }

    updateDescInput = (desc) => {
        this.setState( {desc} )
    }

    addAnimalDesc = (id) => {
        addDesc(this.state.desc, id).then(x => {
            this.props.updateArrayState(x)
            this.setState({ desc: '' })
        })
    }

    render() {
        return (
            <div className="Animal-Desc-Container">
                <input className="inputBar" placeholder="Desc" value={this.state.desc} onChange={(e) => this.updateDescInput(e.target.value)} />
                <div className="inputButton" value={this.props.id} onClick={() => this.addAnimalDesc(this.props.id) }>Change Description</div>
            </div>
        )
    }
}