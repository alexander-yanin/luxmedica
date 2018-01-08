import config from "desktop/config";
import fetch from "cross-fetch";

/*
 * action types
 */

export const HOME_PAGE = "HOME_PAGE";



/*
 * action creators
 */

export const setHomePage = home => {
    return {
        type: HOME_PAGE,
        payload: home
    }
};

/*
 * fetch
 */

export const fetchHome = dispatch => {
    return async dispatch => {
        let response = await fetch(`${config.api}/stock`);
        let stocks = await response.json();
        response = await fetch(`${config.api}/slider`);
        let slides = await response.json();
        response = await fetch(`${config.api}/doctors`);
        let doctors = await response.json();
        dispatch(setHomePage({slides, stocks, doctors}));
    }
};