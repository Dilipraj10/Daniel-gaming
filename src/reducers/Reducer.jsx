import { FETCh_GAMES_DATA } from "../common/Common";

const initialState = {
    data:[],
}

export const reducer = (state = initialState, action) =>  {        
    switch(action.type){
        case FETCh_GAMES_DATA :
            return {...state, data:action.payload}
        default : return state;
    }
}