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
            playersShuffled:[],
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handlePairs = this.handlePairs.bind(this);
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
        const { players } = this.state;

        const halfLength = Math.floor(players.length / 2);
        
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
        const { players } = this.state; 
        
        const { column1 } = this.state;
        
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>Add an even number of players</label>

                    <input 
                        placeholder="Enter player names here" 
                        type="text" onChange={this.handleUserInput} 
                        value={this.state.userInput}
                    />

                    <button>Add Player</button>

                </form>

                    {/* {!this.state.clicked ? */}
                    <ul>Players
                        { players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                    {/* : null} */}
                

                { players.length % 2 === 0 && players.length > 0 ?     

                    <button onClick={ this.handlePairs }>Generate Pairs</button>
                    :
                    <p className="error">Add another player to make it an even number!</p>
                }

                <div className='columns'>
                    <ul className='column1'>
                        { this.state.column1.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                    
                    { column1.length > 0 ?
                        <p className='vs'>vs</p>
                        :
                        null
                    }  

                    <ul className='column2'>
                        { this.state.column2.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </div>
                
                <button onClick={ this.handleReset }>Start Again</button>
            </>
        );
    }
}

export default AddPlayer;