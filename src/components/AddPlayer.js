import React, {Component} from 'react';

export class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            players: [],
            column1: [],
            column2: [],
            clicked: false,
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
            column1: [],
            column2: [],
            playersShuffled: [],
        })
    }

    // shuffles the array using Math.random and splits it into 2 arrays using splice
    handlePairs() {
        // const { players } = this.state;

        const halfLength = Math.floor(this.state.players.length / 2);
        
        const playersShuffled = [...this.state.players];

        this.setState({
            playersShuffled: playersShuffled.sort(() => Math.random() - 0.5),
            // playersShuffled: this.handleShuffle(players),
            column1: playersShuffled.slice(0, halfLength),
            column2: playersShuffled.slice(halfLength, playersShuffled.length),
            clicked: true,
        })
    }
    
    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>Add an even number of players</label>

                    <input 
                        placeholder="Enter player names here" 
                        type="text" onChange={this.handleUserInput} 
                        value={this.state.userInput}
                    />

                    <button>Add player</button>

                    {/* {!this.state.clicked ? */}
                    <ul>Players
                        { this.state.players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                    {/* : null} */}
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