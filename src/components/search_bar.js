import React, { Component } from 'react';
const image = '../logo.png';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
    render() {
        return (
            <div className="search-bar">
                <img className="logo" src={image} />
                <input
                value={this.state.term} 
                onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchBar;