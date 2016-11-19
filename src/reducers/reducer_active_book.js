/**
 * Created by SriramRanganathan on 11/19/16.
 */

export default function(state=null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
