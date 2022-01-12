import { Get_ITEMS , ADD_ITEM , DELETE_ITEM , ITEMS_LOADING } from './types'

export const get_items = items => {
    return {
        type: Get_ITEMS , 
        payload: items
    }
}

export const add_item = item => {
    return {
        type: ADD_ITEM , 
        payload: item
    }
}

export const delete_item = id => {
    return {
        type: DELETE_ITEM , 
        payload: id
    }
}

export const items_loading = () => {
    return {
        type: ITEMS_LOADING 
    }
}