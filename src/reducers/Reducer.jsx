import { FETCh_GAMES_DATA, SET_FILTER_OPTION } from "../common/Constant";

const initialState = {
    data:[],
    filterOption : '',
}

export const reducer = (state = initialState, action) =>  {        
    switch(action.type){
        case FETCh_GAMES_DATA :
            return {...state, data:action.payload}
        case SET_FILTER_OPTION : 
            return {...state, filterOption:action.payload}    
        default : return state;
    }
}