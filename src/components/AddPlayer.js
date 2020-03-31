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
    }

    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            userInput: '',
            players: [...this.state.players, this.state.userInput],
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>

                <button>Submit</button>

                <ul>Players
                    { this.state.players.map((player, i) => (
                        <li key={ i }>{ player }</li>
                    )) }
                </ul>
            </form>
        );
    }
}

export default AddPlayer;