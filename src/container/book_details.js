/**
 * Created by SriramRanganathan on 11/18/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.activeBook) return <div>Please Select a Book</div>
        return (
            <div>{this.props.activeBook.bookTitle}</div>
        );
    }

}

function mapStateToProps(state) {
    return {activeBook: state.activeBook}
}

export default connect(mapStateToProps)(BookDetail);
