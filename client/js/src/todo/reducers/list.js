import { ADD_ITEM } from '../actions/project';

let createItem = ({ text, id }) => {
    let date = new Date()
    let time = date.getTime()
    return {
        id,
        addTime: time,
        updateTime: time,
        displayTime: date.toLocaleString(),
        status: false,
        text
    }
}

export default (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [createItem(action), ...state]
        default:
            return state
    }
}