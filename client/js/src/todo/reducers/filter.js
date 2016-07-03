import { FILTER_ITEMS, SHOW_ALL } from '../actions/filter'

let filter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case FILTER_ITEMS:
            return action.status
        default:
            return state
    }
}

export default filter;