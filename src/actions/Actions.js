import * as constants from "../constants/Constants"

export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
);

export const findAllWidgets = dispatch => {
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
};