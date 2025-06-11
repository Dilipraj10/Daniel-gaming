import { getGamesData } from "../apis/Apis"
import { FETCh_GAMES_DATA, SET_FILTER_OPTION } from "../common/Constant";

export const fetchGamesData = () => {
    return async (dispatch) => {
        try {
            const games = await getGamesData();
            dispatch({
                type: FETCh_GAMES_DATA,
                payload: games?.data || [],
            });
        } catch (error) {
            console.error('Dispatch error:', error);
        }
    };
}

export const setFilterOption = (option) => {
    return async (dispatch) => {
        dispatch({
            type: SET_FILTER_OPTION,
            payload: option,
        })  
    }
}