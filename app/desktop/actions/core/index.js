import config from "desktop/config"
import fetch from "cross-fetch";

/*
 * action types
 */

export const SET_INFO_ALL = "SET_INFO_ALL";



/*
 * action creators
 */

export const setInfoAll = info => {
    return {
        type: SET_INFO_ALL,
        info
    }
};

/*
 * fetch
 */

export const fetchInfoAll = () => {
    return async dispatch => {
        let response = await fetch(`${config.api}/info/all`);
        let info = await response.json();
        localStorage.setItem("infoAll", JSON.stringify(info));
        dispatch(setInfoAll(info));
    }
};