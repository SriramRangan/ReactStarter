export default function SelectBookActionCreator(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}