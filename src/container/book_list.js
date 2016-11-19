/**
 * Created by SriramRanganathan on 11/18/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectBookActionCreator from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.renderBooks()}
            </ul>
        );
    }

    renderBooks() {
        return this.props.books.map(
            (book) => {
                return <li
                    onClick={() => this.props.activeBook(book)}
                    key={book.bookTitle}
                    className="list-group-item cols-sm-4">
                    {book.bookTitle}
                </li>
            }
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({activeBook: SelectBookActionCreator}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);