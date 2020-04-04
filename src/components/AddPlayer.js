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

        if (this.state.userInput.length === 0) {
            return;
        }

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
            clicked: false,
        })
    }

    // shuffles the array using Math.random and splits it into 2 arrays using splice
    handlePairs() {
        const halfLength = Math.floor(this.state.players.length / 2);
        
        const playersShuffled = [...this.state.players];

        this.setState({
            playersShuffled: playersShuffled.sort(() => Math.random() - 0.5),
            column1: playersShuffled.slice(0, halfLength),
            column2: playersShuffled.slice(halfLength, playersShuffled.length),
            clicked: true,
        })
    }
    
    render() {
        const { players } = this.state; 
        
        const { column1 } = this.state;

        const { clicked } = this.state;
        
        return (
            <>
                {/* form section */}
                <form className='form' onSubmit={this.handleSubmit}>
                    <label>Add an even number of players</label>

                    <input 
                        placeholder='Enter player names here' 
                        type='text' onChange={this.handleUserInput} 
                        value={this.state.userInput}
                        maxLength='20'
                        minLength='1'
                    />

                    <button className='add'>Add Player</button>
                </form>
                
                {/* section that displays player names when the array contains at least one item */}
                <div className='players'>
                    {players.length > 0 ?
                        <h2>Players</h2>
                        :
                        null
                    }

                    <ul>
                        { players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </div>

                {/* generate pairs section - button shows unless uneven number of players entered and then the error <p> is displayed instead, once clicked and players even the shuffle <p> shows */}
                <div className='pairs'>
                    { players.length % 2 !== 0 && players.length > 0 ? 
                        <p className="error">Add another player to make it an even number!</p>
                        :
                        <button onClick={ this.handlePairs }>Generate Pairs</button>   
                    }

                    { clicked && players.length % 2 === 0  && players.length > 0 ? 
                        <p>Click again to shuffle the pairs</p>
                        :
                        null
                    }
                </div>

                {/* section that displays the pairings after generate pairings has been clicked, vs <p> shows as long as column 1 is not empty */}
                <div className='columns'>
                    <ul className='column1'>
                        { this.state.column1.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                    
                    { column1.length > 0 ?
                        <p className='vs'>vs.</p>
                        :
                        null
                    }  

                    <ul className='column2'>
                        { this.state.column2.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </div>
                
                {/* start again button resets the page to intial state */}
                <button className='refresh' onClick={ this.handleReset }>Start Again</button>
            </>
        );
    }
}

export default AddPlayer;