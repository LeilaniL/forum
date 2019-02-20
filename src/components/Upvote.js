import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post';

class Upvote extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked(event) {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.value}
                    <button onClick={this.buttonClicked}>⬆ </button>
                </div>
            </div>
        );
    }
}
export default Upvote;




