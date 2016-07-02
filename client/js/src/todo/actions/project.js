export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const DELETE_ITEMS = 'DELETE_ITEMS'
export const UPDATE_ITEM = 'UPDATE_ITEM'
export const UPDATE_ITEMS = 'UPDATE_ITEMS'


export function addItem({
    text,
    id
}) {
    return dispatch => {
        dispatch({
            type: ADD_ITEM,
            id,
            text
        })
    }
}