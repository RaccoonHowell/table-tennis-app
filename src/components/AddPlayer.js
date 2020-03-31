import React, {Component} from 'react';

export class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            players: [],
            player1: '',
            player2: '',
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePair = this.handlePair.bind(this);
    }

    // updates state when user types in input field
    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    // updates player array to add input value on submit
    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            userInput: '',
            players: [...this.state.players, this.state.userInput],
        })
    }

    // resets page to initial state
    handleReset() {
        this.setState({
            userInput: '',
            players: [],
            player1: '',
            player2: '',
        })
    }

    // selects player1 and player2 from the players array by setting the players index using Math.random
    handlePair() {
        const { players } = this.state;

        this.setState({
            player1: players[Math.floor(Math.random() * players.length)],
            player2: players[Math.floor(Math.random() * players.length)]
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter player names here" type="text" onChange={this.handleUserInput} value={this.state.userInput}/>

                    <button>Add player</button>

                    <ul>Players
                        { this.state.players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </form>

                <button onClick={ this.handlePair }>Generate pair</button>

                <p>{ this.state.player1 } v { this.state.player2 }</p>

                <button onClick={ this.handleReset }>Reset</button>
            </>
        );
    }
}

export default AddPlayer;