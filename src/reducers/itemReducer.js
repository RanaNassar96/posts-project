import { Get_ITEMS , ADD_ITEM , DELETE_ITEM , ITEMS_LOADING } from '../actions/types'

const INITIAL_STATE = {
    items:[] , 
    loading: false
}

const itemReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case Get_ITEMS:
            return {
                ...state , 
                items: action.payload ,
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state , 
                items: [ action.payload , ...state.items ]
            }
        case DELETE_ITEM:
            return {
                ...state , 
                items: state.items.filter( el => action.payload !== el.id )
            }
        case ITEMS_LOADING:
            return {
                ...state , 
                loading: true
            }
        default:
            return state
    }
}

export default itemReducer