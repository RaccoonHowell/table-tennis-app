import React, {Component} from 'react';

export class AddPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            players: [],
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleReset= this.handleReset.bind(this);
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
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>

                    <button>Submit</button>

                    <ul>Players
                        { this.state.players.map((player, i) => (
                            <li key={ i }>{ player }</li>
                        )) }
                    </ul>
                </form>

                <button>Generate pair</button>

                <button onClick={ this.handleReset }>Reset</button>
            </>
        );
    }
}

export default AddPlayer;