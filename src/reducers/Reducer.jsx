import { FETCh_GAMES_DATA, FILTER_DATA_BY_OPTION } from "../common/Constant";

const initialState = {
    data:[],
    filterOption : '',
}

export const reducer = (state = initialState, action) =>  {        
    switch(action.type){
        case FETCh_GAMES_DATA :
            return {...state, data:action.payload}
        case FILTER_DATA_BY_OPTION : 
            return {...state, data:action.payload}    
        default : return state;
    }
}