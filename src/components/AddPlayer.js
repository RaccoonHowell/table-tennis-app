import React, {Component} from 'react';

export class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            players: [],
            playersShuffled: [],
            column1: [],
            column2: [],
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePairs = this.handlePairs.bind(this);
        // this.handleShuffle = this.handleShuffle.bind(this);
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
            playersShuffled: [],
            column1: [],
            column2: [],
        })
    }

    // handleShuffle(array) {
    //     array.sort(() => Math.random() - 0.5);
    // }

    // selects player1 and player2 from the players array by setting the players index using Math.random
    handlePairs() {
        const { players } = this.state;

        const half_length = Math.ceil(players.length / 2);    

        this.setState({
            playersShuffled: players.sort(() => Math.random() - 0.5),
            // playersShuffled: this.handleShuffle(players),
            column1: this.playersShuffled.splice(0, half_length),
            column2: this.playersShuffled.splice(half_length, this.playersShuffled.length),
        })
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Add an even number of players</label>
                    <input placeholder="Enter player names here" type="text" onChange={this.handleUserInput} value={this.state.userInput}/>

                    <button>Add player</button>

                    <ul>Players
                        { this.state.players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </form>

                <button onClick={ this.handlePairs }>Generate pairs</button>

                <p>{this.state.playersShuffled}</p>

                <button onClick={ this.handleReset }>Reset</button>
            </>
        );
    }
}

export default AddPlayer;