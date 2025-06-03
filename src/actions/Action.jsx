import { getGamesData } from "../apis/Apis"
import { FETCh_GAMES_DATA, FILTER_DATA_BY_OPTION } from "../common/Constant";

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

export const filterDataByOption = (option) => {
    return async (dispatch,getState) => {
        const state = getState();
        const filteredData = state.data.filter((data) => data.platforms[0].name.includes(option));
        dispatch({
            type: FILTER_DATA_BY_OPTION,
            payload: filteredData,
        })  
    }
}