import { getGamesData } from "../apis/Apis"
import { FETCh_GAMES_DATA } from "../common/Common";

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