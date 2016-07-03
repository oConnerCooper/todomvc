export const FILTER_ITEMS = 'FILTER_ITEMS';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';

export function getFilterStatus(status) {
    return dispatch => {
        dispatch({
            type: FILTER_ITEMS,
            status
        })
    }
}


