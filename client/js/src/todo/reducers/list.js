import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, DELETE_ITEMS, UPDATE_ITEMS } from '../actions/project';
import { FILTER_ITEMS, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/filter';

let createItem = ({ text, id }) => {
    let date = new Date()
    let time = date.getTime()
    return {
        id,
        addTime: time,
        updateTime: time,
        displayTime: date.toLocaleString(),
        status: false,
        // display: true,
        text
    }
}

let updateItem = (data, state) => {
    let date = new Date()
    return state.map(item =>
        item.id === data.id ?
        Object.assign({}, item, data, {
            updateTime: date.getTime(),
            displayTime: date.toLocaleString()
        }) :
        item
    )
}
let clearList = (list, state) => {
    var final = [];
    list.forEach(function(clearItem) {
        final = state.filter(item => (item.id !== clearItem.id));
    });
    
    return final;
}
var finalOrigin = [];
let list =  (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            finalOrigin = [createItem(action), ...state];
            return finalOrigin
        case DELETE_ITEM:
            finalOrigin = state.filter(item => item.id !== action.id)
            return finalOrigin
        case UPDATE_ITEM:
            finalOrigin = updateItem(action.data, state);
            return finalOrigin;
        case UPDATE_ITEMS:
            finalOrigin = state.map(item => Object.assign({}, item, action.data))
            return finalOrigin;
        case SHOW_ALL:
            return finalOrigin;
        case SHOW_ACTIVE:
            return finalOrigin.filter(item => (item.status === false));
        case SHOW_COMPLETED:
            return finalOrigin.filter(item => (item.status === true));
        case DELETE_ITEMS:
            finalOrigin = clearList(action.list, finalOrigin);
            return finalOrigin;
        default:
            return state;
    }
}
export default list;