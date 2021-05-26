import React from 'react';

class BookshelfChanger extends React.Component {
    state = {
        value: this.props.shelf
    };
    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
        this.props.onMove(this.props.book, value);
    };
    render(){
        return (
            <div className="book-shelf-changer">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currnetly Reading</option>
                    <option value="wantToRead">Want to read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookshelfChanger;