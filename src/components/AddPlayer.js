import React, {Component} from 'react';

export class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            players: [],
            // playersShuffled: [],
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
            // playersShuffled: [],
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

        const halfLength = Math.floor(players.length / 2);    

        this.setState({
            players: players.sort(() => Math.random() - 0.5),
            // playersShuffled: this.handleShuffle(players),
            column1: [...players.slice(0, halfLength), this.state.column1],
            column2: [...players.slice(halfLength, players.length), this.state.column2],
        })
    }

    // handleSplice() {
    //     const half_length = Math.ceil(this.players.length / 2);    

    //     this.setState({
    //         column1: this.players.splice(0, half_length),
    //         column2: this.players.splice(half_length, this.players.length),
    //     })
    // }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Add an even number of players</label>

                    <input 
                        placeholder="Enter player names here" 
                        type="text" onChange={this.handleUserInput} 
                        value={this.state.userInput}
                    />

                    <button>Add player</button>

                    <ul>Players
                        { this.state.players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </form>

                <button onClick={ this.handlePairs }>Generate pairs</button>

                <ul>Column 1
                    { this.state.column1.map((player, i) => (
                        <li key={ i }>{ player }</li>
                    )) }
                </ul>

                <ul>Column 2
                    { this.state.column2.map((player, i) => (
                        <li key={ i }>{ player }</li>
                    )) }
                </ul>
                
                <button onClick={ this.handleReset }>Reset</button>
            </>
        );
    }
}

export default AddPlayer;