import { data } from "../../data"

const INITIAL_STATE = {
    bookList : data,
    fav : []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FAVORIYE_EKLE':
            
            return {...state, fav:[...state.fav,action.payload]}

        case 'FAVORIDEN_CIKART':
            
                return {...state,
                     fav: state.fav.filter((book) => book !== action.payload) } 
    
        default:
            return state;
    }
}