const defaultState = {
    count: 0
}

export const countReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
        return {

        }
        default: return state
    }
}

export default countReducer